import { ReactNode } from 'react'

type StepOption = {
  value: string
  label: string
  description?: string
  extraInfo?: () => ReactNode
}

type StepConfig = {
  type: 'radio' | 'select' | 'info'
  header: string
  options: StepOption[]
}

type StepName = 'connection' | 'upgradeConnection' | 'distributionBox3Phase'

type QuestionnaireConfig = {
  [Key in StepName]: StepConfig
}

const questionnaireConfig: QuestionnaireConfig = {
  connection: {
    type: 'radio',
    header: 'Wat is jouw huidige aansluiting?',
    options: [
      {
        value: '1PHASE',
        label: '1-fase'
      },
      {
        value: '3PHASE',
        label: '3-fase'
      }
    ]
  },
  upgradeConnection: {
    type: 'radio',
    header: 'Wil je jouw aansluiting upgraden naar 3-fase aansluiting?',
    options: [
      {
        value: 'YES',
        label: 'JA'
      },
      {
        value: 'NO',
        label: 'NEE'
      }
    ]
    // next: (value: string) => {
    //   if (value === 'YES') {
    //     return 'distributionBox3Phase'
    //   } else {
    //     return 'currentCapacity1Phase'
    //   }
    // }
  },
  distributionBox3Phase: {
    type: 'radio',
    header: 'Wat moet er gebeuren met jouw 3-fase groepenkast?',
    // label: '3-fase groepenkast',
    options: [
      {
        value: 'NEWBOX',
        label: 'Nieuwe 1-fase groepenkast',
        description: 'Ik wil een nieuwe 3-fase groepenkast installeren'
      },
      {
        value: 'NEWGROUP',
        label: 'Alleen een nieuwe groep',
        description:
          'Ik will alleen maar een nieuwe group voor de laadpaal. Ik heb voldoende ruimte in mijn huidige groepenkast om de nieuwe group te installeren',
        extraInfo: () => <div>ALA MA KONIA</div>
      }
      // next: (value: string) => {
      //   if (value === 'YES') {
      //     return 'distributionBox3Phase'
      //   } else {
      //     return 'distributionBox1Phase'
      //   }
      // }
    ]
  }
} as const

// type QuestionnaireConfig = typeof questionnaireConfig
// type QuestionnaireStepNames = keyof QuestionnaireConfig

// type ValuesForStepName<Name extends QuestionnaireStepNames> =
//   QuestionnaireConfig[Name]['options'][number]['value']

// type QuestionnaireConfigForStepName<Name extends QuestionnaireStepNames> =
//   QuestionnaireConfig[Name]

// type OptionsTypeForStepName<Name extends QuestionnaireStepNames> = QuestionnaireConfigForStepName<Name>['options']

// type StepNameValues = {
//   [Key in keyof QuestionnaireConfig]: QuestionnaireConfig[Key]['options'][number]['value']
// }

type ValueSelectedForStepName = {
  stepName: StepName
  selectedValue: string
}

export { questionnaireConfig }
export type {
  QuestionnaireConfig,
  StepConfig,
  StepOption,
  StepName,
  ValueSelectedForStepName
}
// export type {
//   QuestionnaireConfig,
//   QuestionnaireConfigForStepName,
//   OptionsTypeForStepName,
//   QuestionnaireStepNames,
//   ValuesForStepName,
//   StepNameValues,
//   ValueSelectedForStepName
// }
