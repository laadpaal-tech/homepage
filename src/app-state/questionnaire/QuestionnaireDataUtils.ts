import { v4 as uuidv4 } from 'uuid'

import { StepData } from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
import { questionnaireConfig } from '~/app-state/questionnaire/questionnaireConfig'
import type { StepConfig, StepName, StepOption } from './QuestionnaireTypes'

class QuestionnaireDataUtils {
  static copyOptions(options: StepOption[]): StepOption[] {
    return options.map((o) => {
      return {
        value: o.value,
        label: o.label,
        description: o.description,
        price: o.price,
        priceMonthly: o.priceMonthly,
        descriptionComponent: o.descriptionComponent,
        additionalConfigurationComponent: o.additionalConfigurationComponent
      }
    })
  }

  static copyConfig(name: StepName): StepConfig {
    const configForName: StepConfig = questionnaireConfig[name]
    return this.copyStepConfig(configForName)
  }

  static copyStepConfig(stepConfigToCopy: StepConfig): StepConfig {
    return {
      type: stepConfigToCopy.type,
      header: stepConfigToCopy.header,
      headerComponent: stepConfigToCopy.headerComponent,
      isInitial: stepConfigToCopy.isInitial,
      label: stepConfigToCopy.label,
      additionalInfo: stepConfigToCopy.additionalInfo,
      infoStepAction: stepConfigToCopy.infoStepAction,
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
