import type { StepConfig, StepName } from './combinedConfiguration'

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
