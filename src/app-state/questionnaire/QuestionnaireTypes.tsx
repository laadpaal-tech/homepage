import { JSXElementConstructor, ReactNode } from 'react'
import type { ExtraFormattingComponentProps } from './extra-formatting-components/ExtraFormattingComponentProps'

type StepOption = {
  value: string
  label: string
  description?: ReactNode
  descriptionComponent?: JSXElementConstructor<ExtraFormattingComponentProps>
  extraInfo?: () => ReactNode
}

type StepConfig = {
  type: 'radio' | 'select' | 'info'
  header?: ReactNode
  headerComponent?: JSXElementConstructor<ExtraFormattingComponentProps>
  isInitial?: boolean
  label?: string
  additionalInfo?: ReactNode
  options: StepOption[]
}

type StepName =
  | 'connection'
  | 'upgradeConnection'
  | 'distributionBox3Phase'
  | 'currentCapacity1Phase'
  | 'mustUpgradeCapactity1Phase'
  | 'upgradeCapactity1Phase'
  | 'distributionBox1Phase'

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
