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

type CurrentCapacity =
  | '1x6A'
  | '1x10'
  | '1x25A'
  | '1x35'
  | '1x40'
  | '3x25'
  | '3x35'
  | '3x40'
  | '3x50'
  | '3x63'
  | '3x80'
type DestinationCapacity = '1x25A' | '1x35A' | '3x25A'

type ActiveQuestionnaire = {
  currentCapacity?: CurrentCapacity
  destinationCapacity?: DestinationCapacity
  currentMonthlyConnectionCost?: number
  destinationMonthlyConnectionCost?: number
  price: number
  currentSequence: StepData[]
}

export type {
  ActiveQuestionnaire,
  StepData,
  CurrentCapacity,
  DestinationCapacity
}
