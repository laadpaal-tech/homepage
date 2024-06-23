import { atom } from 'recoil'

type ReadMoreState = {
  elementToShow?: HTMLElement
}

const readMoreState = atom<ReadMoreState>({
  key: 'readMoreState',
  default: {}
})

type ScrollToFooter = {
  elementToShow?: HTMLElement
}

const scrollToFooter = atom<ScrollToFooter>({
  key: 'scrollToFooter',
  default: {}
})

type AppState = {
  contactHeight: number
}

const defaultAppState: AppState = {
  contactHeight: 0
}

const appState = atom<AppState>({
  key: 'appState',
  default: defaultAppState
})

export { readMoreState, scrollToFooter, appState }
export type { AppState }
