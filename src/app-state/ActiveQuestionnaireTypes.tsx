import type {
  StepConfig,
  StepName
} from '../components/questionnaire/questionnaire-state-machine/QuestionnaireTypes'

type StepData = {
  id: string
  name: StepName
  selectedValue?: string
  price?: number
} & StepConfig

type ActiveQuestionnaire = {
  currentSequence: StepData[]
}

export type { ActiveQuestionnaire, StepData }
