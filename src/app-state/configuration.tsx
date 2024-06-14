import { atom } from 'recoil'
import type { ConfigurationOptions, Language } from './configurationOptions'

type ConfigurationOptionValues<C extends keyof ConfigurationOptions[Language]> =
  ConfigurationOptions[Language][C]['values'][number]['value']

type ConfigurationOptionsObjects<
  C extends keyof ConfigurationOptions[Language]
> = ConfigurationOptions[Language][C]['values']

type Configuration = {
  connection: ConfigurationOptionValues<'connection'>
  upgradeConnection: ConfigurationOptionValues<'upgradeConnection'>
  currentCapacity1Phase: ConfigurationOptionValues<'currentCapacity1Phase'>
  upgradeCapactity1Phase: ConfigurationOptionValues<'upgradeCapactity1Phase'>
  destinationCapacity1Phase: ConfigurationOptionValues<'destinationCapacity1Phase'>
  capacityInsufficient1Phase: ConfigurationOptionValues<'capacityInsufficient1Phase'>
  distributionBox1Phase: ConfigurationOptionValues<'distributionBox1Phase'>
  distributionBox3Phase: ConfigurationOptionValues<'distributionBox3Phase'>
}

const defaultInstallationConfig: Configuration = {
  connection: '1PHASE',
  upgradeConnection: 'YES',
  currentCapacity1Phase: '1x25A',
  upgradeCapactity1Phase: 'NO',
  destinationCapacity1Phase: '1x35A',
  capacityInsufficient1Phase: 'NO',
  distributionBox1Phase: 'NEWGROUP',
  distributionBox3Phase: 'NEWGROUP'
}

type ConfigurationOption<C extends keyof Configuration> = {
  [key in C]: Configuration[key]
}

const installationConfig = atom<Configuration>({
  key: 'installationConfiguration',
  default: defaultInstallationConfig
})

export { installationConfig, defaultInstallationConfig }
export type {
  Configuration,
  ConfigurationOptionsObjects,
  ConfigurationOptionValues,
  ConfigurationOption
}
