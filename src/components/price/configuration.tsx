const configurationOptionsNL = {
  connection: [
    { value: '1PHASE', label: '1-fase', description: null, extraInfo: null },
    { value: '3PHASE', label: '3-fase', description: null, extraInfo: null }
  ],
  upgradeConnection: [
    { value: 'YES', label: 'JA', description: null, extraInfo: null },
    { value: 'NO', label: 'NEE', description: null, extraInfo: null }
  ],
  distributionBox1Phase: [
    {
      value: 'NEWBOX',
      label: 'Nieuwe 1-fase groepenkast',
      description: 'Ik wil een nieuwe 1-fase groepenkast installeren',
      extraInfo: null
    },
    {
      value: 'NEWGROUP',
      label: 'Alleen een nieuwe groep',
      description:
        'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren',
      extraInfo: null
    }
  ],
  distributionBox3Phase: [
    {
      value: 'NEWBOX',
      label: 'Nieuwe 1-fase groepenkast',
      description: 'Ik wil een nieuwe 3-fase groepenkast installeren',
      extraInfo: null
    },
    {
      value: 'NEWGROUP',
      label: 'Alleen een nieuwe groep',
      description:
        'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren',
      extraInfo: () => <div>ALA MA KONIA</div>
    }
  ]
} as const

const configurationOptions = {
  nl: configurationOptionsNL
}

type ConfigurationOptionsNL = typeof configurationOptionsNL

type ConfigurationOptions = ConfigurationOptionsNL

type ConfigurationOptionValues<C extends keyof ConfigurationOptions> =
  ConfigurationOptions[C][number]['value']

type ConfigurationOptionsObjects<C extends keyof ConfigurationOptions> =
  ConfigurationOptions[C]

type Configuration = {
  connection: ConfigurationOptionValues<'connection'>
  upgradeConnection: ConfigurationOptionValues<'upgradeConnection'>
  distributionBox1Phase: ConfigurationOptionValues<'distributionBox1Phase'>
  distributionBox3Phase: ConfigurationOptionValues<'distributionBox3Phase'>
}

const defaultConfiguration: Configuration = {
  connection: '1PHASE',
  upgradeConnection: 'YES',
  distributionBox1Phase: 'NEWGROUP',
  distributionBox3Phase: 'NEWGROUP'
}

type ConfigurationOption<C extends keyof Configuration> = {
  [key in C]: Configuration[key]
}

const questionnaireNL = {
  connection: {
    question: 'Wat is jouw huidige aansluiting?',
    label: 'huidige aansluiting',
    next: (value: string) => {
      if (value === '1PHASE') {
        return 'upgradeConnection'
      } else {
        return 'distributionBox3Phase'
      }
    }
  },
  upgradeConnection: {
    question: 'Wil je jouw aansluiting upgraden naar 3-fase aansluiting?',
    label: 'upgraden?',
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  distributionBox1Phase: {
    question: 'distributionBox1Phase?',
    label: 'upgraden?',
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  distributionBox3Phase: {
    question: 'Wat moet er gebeuren met jouw 3-fase groepenkast?',
    label: '3-fase groepenkast',
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  }
} as const

const questionnaire = {
  nl: questionnaireNL
}

type Language = keyof typeof questionnaire

export { defaultConfiguration, configurationOptions, questionnaire }
export type {
  ConfigurationOptions,
  Configuration,
  ConfigurationOptionsObjects,
  ConfigurationOptionValues,
  ConfigurationOption,
  Language
}
