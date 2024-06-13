const questionnaireNL = {
  connection: {
    question: 'Wat is jouw huidige aansluiting?',
    label: 'huidige aansluiting'
  }
} as const

const questionnaire = {
  nl: questionnaireNL
}

const configurationOptionsNL = {
  connection: [
    { key: '1PHASE', value: '1-fase' },
    { key: '3PHASE', value: '3-fase' }
  ]
} as const

const configurationOptions = {
  nl: configurationOptionsNL
}

type ConfigurationOptionsNL = typeof configurationOptionsNL

type ConfigurationOptions = ConfigurationOptionsNL

type ConfigurationOptionsKeyValues = Pick<
  ConfigurationOptions,
  'connection'
>['connection']

type ConfigurationOptionValues<C extends keyof ConfigurationOptions> =
  ConfigurationOptions[C][number]['key']

type ConfigurationOptionsKeyValuePairs<C extends keyof ConfigurationOptions> =
  ConfigurationOptions[C]

type Configuration = {
  connection: ConfigurationOptionValues<'connection'>
}

const defaultConfiguration: Configuration = {
  connection: '1PHASE'
}

type ConfigurationOption<C extends keyof Configuration> = {
  [key in C]: Configuration[C]
}

type Language = keyof typeof questionnaire

export { defaultConfiguration, configurationOptions, questionnaire }
export type {
  ConfigurationOptions,
  Configuration,
  ConfigurationOptionsKeyValuePairs,
  ConfigurationOptionValues,
  ConfigurationOption,
  ConfigurationOptionsKeyValues,
  Language
}
