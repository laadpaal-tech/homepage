import { JSXElementConstructor, ReactNode } from 'react'
import type { ExtraFormattingComponentProps } from './extra-formatting-components/ExtraFormattingComponentProps'

type StepOption = {
  value: string
  label: string
  description?: ReactNode
  descriptionComponent?: JSXElementConstructor<ExtraFormattingComponentProps>
  additionalConfigurationComponent?: JSXElementConstructor<ExtraFormattingComponentProps>
}

type InfoStepAction = 'clear'

type StepConfig = {
  type: 'radio' | 'select' | 'info'
  header?: ReactNode
  headerComponent?: JSXElementConstructor<ExtraFormattingComponentProps>
  isInitial?: boolean
  label?: string
  additionalInfo?: ReactNode
  infoStepAction?: InfoStepAction
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
  | 'endConfigurator'

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
  InfoStepAction,
  ValueSelectedForStepName
}
