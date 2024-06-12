// type ConnectionNL = '1-fase' | '2-fase'
// type Connection = ConnectionNL

// type ConnectionOption = {
//   key: 'connection'
//   value: Connection
// }

// type OptionBase = {
//   default?: boolean
// }

// type Option = ConnectionOption & OptionBase

type Connection = '1PHASE' | '3PHASE'

type Configuration = {
  connection: Connection
}

const defaultConfiguration: Configuration = {
  connection: '1PHASE'
}

const configurationOptionsNL = {
  connection: [
    { key: '1PHASE', value: '1-fase' },
    { key: '3PHASE', value: '3-fase' }
  ]
} as const

type ConfigurationOptionsNL = typeof configurationOptionsNL

export { defaultConfiguration, configurationOptionsNL }
export type { ConfigurationOptionsNL, Configuration }
