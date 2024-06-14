import type { ActiveQuestionnaire, StepData } from './ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'
import { questionnaireConfig } from './combinedConfiguration'
import type { StepConfig, StepName, StepOption } from './combinedConfiguration'

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

class Connection {
  static nextStep({ selectedValue }: NextStepArgs) {
    if (selectedValue === '1PHASE') {
      const upgradeConnectionConfig = Utils.copyConfig('upgradeConnection')
      const step: StepData = {
        id: uuidv4(),
        name: 'upgradeConnection',
        selectedValue,
        ...upgradeConnectionConfig
      }
      return step
    } else {
      const distributionBox3PhaseConfig = Utils.copyConfig(
        'distributionBox3Phase'
      )
      const step: StepData = {
        id: uuidv4(),
        name: 'distributionBox3Phase',
        selectedValue,
        ...distributionBox3PhaseConfig
      }
      return step
    }
  }
}

class QuestionnaireStateMachine {
  activeQuestionnaire: ActiveQuestionnaire

  constructor(activeQuestionnaire: ActiveQuestionnaire) {
    this.activeQuestionnaire = activeQuestionnaire
  }

  static init(): ActiveQuestionnaire {
    const connectionConfig = Utils.copyConfig('connection')
    const initialQuestionnaire: ActiveQuestionnaire = {
      currentSequence: [
        {
          id: uuidv4(),
          name: 'connection',
          ...connectionConfig
        }
      ]
    }
    return initialQuestionnaire
  }

  static nextStep(args: NextStepArgs) {
    switch (args.stepName) {
      case 'connection':
        return Connection.nextStep(args)
      default:
        break
    }
    return undefined
  }
}

export { QuestionnaireStateMachine }
