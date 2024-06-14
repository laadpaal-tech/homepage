import {
  Configuration,
  defaultInstallationConfig
} from '~/app-state/configuration'

const questionnaireNL = {
  connection: {
    question: 'Wat is jouw huidige aansluiting?',
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
    next: (value: string) => {
      if (value === 'YES') {
        return 'distributionBox3Phase'
      } else {
        return 'currentCapacity1Phase'
      }
    }
  },
  currentCapacity1Phase: {
    question: 'Wat is jouw huidige 1-fase aansluiting waarde?',
    label: 'aansluiting waarde:',
    next: (value: string) => {
      console.log('capacity1Phase:', value)
      if (['1x6A', '1x10A', '1x25A', '1x35A'].includes(value)) {
        return 'upgradeCapactity1Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  upgradeCapactity1Phase: {
    question: 'Wil je jouw huidige 1-fase aansluiting verzwaren?',
    next: (
      value: string,
      config: Configuration = defaultInstallationConfig
    ) => {
      if (value === 'YES') {
        return 'destinationCapacity1Phase'
      } else if (['1x6A', '1x10A'].includes(config.currentCapacity1Phase)) {
        return 'capacityInsufficient1Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  destinationCapacity1Phase: {
    question: 'Wat is jouw gewenste 1-fase aansluiting waarde?',
    label: 'aansluiting waarde:',
    next: (value: string) => {
      console.log('destinationCapacity1Phase:', value)
      if (['1x6A', '1x10A', '1x25A', '1x35A'].includes(value)) {
        return 'upgradeCapactity1Phase'
      } else {
        return 'distributionBox1Phase'
      }
    }
  },
  capacityInsufficient1Phase: {
    question: 'KANIEC FILMA',
    next: (value: string) => {
      console.log('1phaseCapacityInsufficient:', value)
      return '1phaseCapacityInsufficient'
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

const questionnaireData = {
  nl: questionnaireNL
}

type Language = keyof typeof questionnaireData
type QuestionnaireDataInitialType = typeof questionnaireData

type QuestionnaireDataOptionalLabel<L extends Language> = {
  [P in keyof QuestionnaireDataInitialType[L]]: QuestionnaireDataInitialType[L][P] extends {
    label: unknown
  }
    ? Omit<QuestionnaireDataInitialType[L][P], 'label'> &
        Partial<Pick<QuestionnaireDataInitialType[L][P], 'label'>>
    : QuestionnaireDataInitialType[L][P] & { label?: undefined }
}

type QuestionnaireData = {
  [L in keyof QuestionnaireDataInitialType]: QuestionnaireDataOptionalLabel<L>
}

export { questionnaireData }
export type { QuestionnaireData, Language }
