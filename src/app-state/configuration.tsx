import { atom } from 'recoil'
import type { ConfigurationOptions } from './configurationOptions'

type ConfigurationOptionValues<C extends keyof ConfigurationOptions> =
  ConfigurationOptions[C][number]['value']

type ConfigurationOptionsObjects<C extends keyof ConfigurationOptions> =
  ConfigurationOptions[C]

type Configuration = {
  connection?: ConfigurationOptionValues<'connection'>
  upgradeConnection?: ConfigurationOptionValues<'upgradeConnection'>
  distributionBox1Phase?: ConfigurationOptionValues<'distributionBox1Phase'>
  distributionBox3Phase?: ConfigurationOptionValues<'distributionBox3Phase'>
}

const defaultInstallationConfig: Configuration = {
  connection: undefined,
  upgradeConnection: undefined,
  distributionBox1Phase: undefined,
  distributionBox3Phase: undefined
}

type ConfigurationOption<C extends keyof Configuration> = {
  [key in C]: Configuration[key]
}

const installationConfig = atom<Configuration>({
  key: 'installationConfiguration',
  default: defaultInstallationConfig
})

export { defaultInstallationConfig, installationConfig }
export type {
  Configuration,
  ConfigurationOptionsObjects,
  ConfigurationOptionValues,
  ConfigurationOption
}
