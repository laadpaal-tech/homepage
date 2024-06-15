import { v4 as uuidv4 } from 'uuid'

import { StepData } from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
import { questionnaireConfig } from '~/app-state/questionnaire/questionnaireConfig'
import type { StepConfig, StepName, StepOption } from './QuestionnaireTypes'

type NextStepArgs = {
  stepName: StepName
  selectedValue: string
  readonly immutablePreviousSteps: StepData[]
  mutableCurrentStep: StepData
}

class QuestionnaireDataUtils {
  static copyOptions(options: StepOption[]) {
    return options.map((o) => {
      return {
        value: o.value,
        label: o.label,
        description: o.description,
        extraInfo: o.extraInfo
      }
    })
  }

  static copyConfig(name: StepName) {
    const configForName: StepConfig = questionnaireConfig[name]
    return this.copyStepConfig(configForName)
  }

  static copyStepConfig(stepConfigToCopy: StepConfig): StepConfig {
    return {
      type: stepConfigToCopy.type,
      header: stepConfigToCopy.header,
      isInitial: stepConfigToCopy.isInitial,
      label: stepConfigToCopy.label,
      options: this.copyOptions(stepConfigToCopy.options)
    }
  }

  static copyStepData(stepDataToCopy: StepData): StepData {
    return {
      id: stepDataToCopy.id,
      name: stepDataToCopy.name,
      selectedValue: stepDataToCopy.selectedValue,
      price: stepDataToCopy.price,
      stepConfig: this.copyStepConfig(stepDataToCopy.stepConfig)
    }
  }

  static createStepData(name: StepName): StepData {
    const stepConfig = this.copyConfig(name)
    return {
      id: uuidv4(),
      name,
      stepConfig
    }
  }
}

export { QuestionnaireDataUtils }
export type { NextStepArgs }
