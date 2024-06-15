import type { ActiveQuestionnaire } from '../../../app-state/questionnaire/ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'

import { QuestionnaireDataUtils } from './QuestionnaireDataUtils'
import type { NextStepArgs } from './QuestionnaireDataUtils'

import { questionnaireConfig } from '../questionnaireConfig'
import type { StepName } from './QuestionnaireTypes'

import { Connection, UpgradeConnection } from './step-handlers/'

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
    const stepConfig = QuestionnaireDataUtils.copyConfig(initialStepName)
    const initialQuestionnaire: ActiveQuestionnaire = {
      currentSequence: [
        {
          id: uuidv4(),
          name: initialStepName,
          stepConfig
        }
      ]
    }
    return initialQuestionnaire
  }

  static nextStep(args: NextStepArgs) {
    switch (args.stepName) {
      case 'connection':
        return Connection.nextStep(args)
      case 'upgradeConnection':
        return UpgradeConnection.nextStep(args)
      default:
        break
    }
    return undefined
  }
}

export { QuestionnaireStateMachine }
