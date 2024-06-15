import type {
  StepConfig,
  StepName
} from '~/app-state/questionnaire/QuestionnaireTypes'

type StepData = {
  id: string
  name: StepName
  selectedValue?: string
  price?: number
  stepConfig: StepConfig
}

type ActiveQuestionnaire = {
  currentSequence: StepData[]
}

export type { ActiveQuestionnaire, StepData }
