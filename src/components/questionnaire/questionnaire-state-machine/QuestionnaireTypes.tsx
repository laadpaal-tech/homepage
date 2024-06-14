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

type ValueSelectedForStepName = {
  stepName: StepName
  selectedValue: string
}

export type {
  QuestionnaireConfig,
  StepConfig,
  StepOption,
  StepName,
  ValueSelectedForStepName
}
