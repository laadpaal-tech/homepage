import { StepData } from '~/app-state/ActiveQuestionnaireTypes'
import { questionnaireConfig } from '../../../app-state/combinedConfiguration'
import type { StepConfig, StepName, StepOption } from './QuestionnaireTypes'

type NextStepArgs = {
  stepName: StepName
  selectedValue: string
  baseSequence: StepData[]
}

class Utils {
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
    return {
      type: configForName.type,
      header: configForName.header,
      options: this.copyOptions(configForName.options)
    }
  }
}

export { Utils }
export type { NextStepArgs }
