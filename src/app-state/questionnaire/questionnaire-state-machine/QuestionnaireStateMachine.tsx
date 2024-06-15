import type { ActiveQuestionnaire } from '../../../app-state/questionnaire/ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'

import { Utils } from './Utils'
import type { NextStepArgs } from './Utils'

import { Connection } from './step-handlers/Connection'

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
