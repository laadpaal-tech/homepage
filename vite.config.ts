import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

function manualChunks(id, { getModuleInfo }) {
  // I use dynamic imports to make step handlers more maintainable.
  // This would normally result in a number of very small chunks, which
  // feels wrong. With this we bundle them together into one bigger chunk.
  // See:
  //   - https://vitejs.dev/guide/build#chunking-strategy
  //   - https://rollupjs.org/configuration-options/#output-manualchunks
  //   - https://github.com/vitejs/vite/discussions/9440
  //   - https://github.com/sanyuan0704/vite-plugin-chunk-split
  const match = /.*\/step-handlers\/(\w+)\.ts/.exec(id)
  if (match) {
    // const stepHandler = match[1] // e.g. "connection" - we do not use it
    const dependentEntryPoints = []

    // we use a Set here so we handle each module at most once. This
    // prevents infinite loops in case of circular dependencies
    const idsToHandle = new Set(getModuleInfo(id).dynamicImporters)
    // const idsToHandleArray = Array.from(idsToHandle)

    // we are on ESNEXT - we should not see this warning - we silent it
    // @ts-expect-error we are on ESNEXT - we should not see this warning - we silent it
    for (const moduleId of idsToHandle) {
      const { isEntry, dynamicImporters, importers } = getModuleInfo(moduleId)
      if (isEntry || dynamicImporters.length > 0)
        dependentEntryPoints.push(moduleId)

      // The Set iterator is intelligent enough to iterate over
      // elements that are added during iteration
      for (const importerId of importers) idsToHandle.add(importerId)
    }

    // If there is a unique entry, we put it into a chunk based on the
    // entry name
    if (dependentEntryPoints.length === 1) {
      return `${
        dependentEntryPoints[0].split('/').slice(-1)[0].split('.')[0]
      }.stepHandlers`
    }
    // For multiple entries, we put it into a "shared" chunk
    if (dependentEntryPoints.length > 1) {
      return `shared.strings.stepHandlers`
    }
  }
  // @react-aria, framer-motion, @nextui-org
  if (id.includes('node_modules')) {
    const moduleName = id
      .toString()
      .split('node_modules/')[1]
      .split('/')[0]
      .toString()
    // @react-aria and @nextui-org have to be kept together - otherwise things will brake (probably included in wrong order)
    // using individual packages makes CSS chunk somehow smaller - but just around 150kB smaller, and then using
    // individual imports with Vite exibits seems some styling problems (select component was having issues in my case).
    // Good to take a look in the future, but the gain does not seem to be worth it...
    if (['@react-aria', '@nextui-org'].includes(moduleName)) {
      return '@nextui-org'
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})
