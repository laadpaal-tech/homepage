import type { ActiveQuestionnaire } from '../../../app-state/questionnaire/ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'

import { Utils } from './Utils'
import type { NextStepArgs } from './Utils'

import { Connection } from './step-handlers/Connection'
import { questionnaireConfig } from '../questionnaireConfig'
import { StepName } from './QuestionnaireTypes'

class QuestionnaireStateMachine {
  activeQuestionnaire: ActiveQuestionnaire

  constructor(activeQuestionnaire: ActiveQuestionnaire) {
    this.activeQuestionnaire = activeQuestionnaire
  }

  static init(): ActiveQuestionnaire {
    const initialStepName = Object.keys(questionnaireConfig).find(
      (e) => questionnaireConfig[e as StepName].isInitial === true
    ) as StepName
    if (!initialStepName) {
      throw new Error(
        'No initial step configured in the questionnaireConfig! One of the steps needs to have <<isInitial>> attribute set to <<true>>.'
      )
    }
    const connectionConfig = Utils.copyConfig(initialStepName)
    const initialQuestionnaire: ActiveQuestionnaire = {
      currentSequence: [
        {
          id: uuidv4(),
          name: initialStepName,
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
