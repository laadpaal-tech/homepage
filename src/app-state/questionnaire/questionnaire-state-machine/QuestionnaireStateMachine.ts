import type { ActiveQuestionnaire, StepData } from '../ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'

import { QuestionnaireDataUtils } from '../QuestionnaireDataUtils'

import { questionnaireConfig } from '../questionnaireConfig'
import type { StepName } from '../QuestionnaireTypes'

// import {
//   Connection,
//   CurrentCapacity1Phase,
//   UpgradeConnection
// } from './step-handlers/'
// import { MustUpgradeCapactity1Phase } from './step-handlers/MustUpgradeCapactity1Phase'
// import { UpgradeCapactity1Phase } from './step-handlers/UpgradeCapactity1Phase'

type NextStepArgs = Partial<Omit<ActiveQuestionnaire, 'currentSequence'>> & {
  stepName: StepName
  selectedValue: string
  readonly immutablePreviousSteps: StepData[]
  mutableCurrentStep: StepData
}

type NextStepReturnValue =
  | (Partial<Omit<ActiveQuestionnaire, 'currentSequence'>> & {
      nextStep: StepData
    })
  | undefined

interface StepHandler {
  nextStep(args: NextStepArgs): NextStepReturnValue
}

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
      price: 0,
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

  static async nextStep(args: NextStepArgs): Promise<NextStepReturnValue> {
    const moduleName =
      args.stepName.slice(0, 1).toLocaleUpperCase() + args.stepName.slice(1)
    const handlerModule = await import(`./step-handlers/${moduleName}.ts`)
    const handler = handlerModule[moduleName] as StepHandler

    return handler.nextStep(args)
  }

  //   static nextStep(args: NextStepArgs): NextStepReturnValue {
  //     switch (args.stepName) {
  //       case 'connection':
  //         return Connection.nextStep(args)
  //       case 'upgradeConnection':
  //         return UpgradeConnection.nextStep(args)
  //       case 'currentCapacity1Phase':
  //         return CurrentCapacity1Phase.nextStep(args)
  //       case 'mustUpgradeCapactity1Phase':
  //         return MustUpgradeCapactity1Phase.nextStep(args)
  //       case 'upgradeCapactity1Phase':
  //         return UpgradeCapactity1Phase.nextStep(args)
  //       default:
  //         break
  //     }
  //     return undefined
  //   }
}

export { QuestionnaireStateMachine }
export type { NextStepArgs, NextStepReturnValue }
