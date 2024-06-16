import type {
  ActiveQuestionnaire,
  StepData
} from '../../../app-state/questionnaire/ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'

import { QuestionnaireDataUtils } from '../QuestionnaireDataUtils'

import { questionnaireConfig } from '../questionnaireConfig'
import type { StepName } from '../QuestionnaireTypes'

import {
  Connection,
  CurrentCapacity1Phase,
  UpgradeConnection
} from './step-handlers/'
import { MustUpgradeCapactity1Phase } from './step-handlers/MustUpgradeCapactity1Phase'
import { UpgradeCapactity1Phase } from './step-handlers/UpgradeCapactity1Phase'

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

// const steps = Object.keys(questionnaireConfig)
// const object = steps.reduce(
//   (acc, current) => {
//     const name = current.slice(0, 1).toLocaleUpperCase() + current.slice(1)
//     acc[current] = name
//     return acc
//     // const module = import(`./step-handlers/${}`)
//   },
//   {} as Record<string, string>
// )
// console.log('object=', object)
// const nn = 'Connection'
// const CC = await import(`./step-handlers/${nn}`)
// console.log('OBJECT=', CC[nn].sayHi())
// // const handlers = {}

// class Base {
//   constructor() {
//     console.log('constr.base')
//   }

//   public sayHi() {
//     return 'Hello Base'
//   }
// }
// class Sub extends Base {
//   constructor() {
//     super()
//     console.log('constr.sub')
//   }

//   public sayHi() {
//     return 'Hello Sub'
//   }
// }

// const aa: Base = new Sub()
// console.log('aa.sayHi()=', aa.sayHi())

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

  static async nextStep2(args: NextStepArgs): Promise<NextStepReturnValue> {
    const moduleName =
      args.stepName.slice(0, 1).toLocaleUpperCase() + args.stepName.slice(1)
    const handlerModule = await import(`./step-handlers/${moduleName}`)
    const handler = handlerModule[moduleName] as StepHandler

    return handler.nextStep(args)
  }

  static nextStep(args: NextStepArgs): NextStepReturnValue {
    switch (args.stepName) {
      case 'connection':
        return Connection.nextStep(args)
      case 'upgradeConnection':
        return UpgradeConnection.nextStep(args)
      case 'currentCapacity1Phase':
        return CurrentCapacity1Phase.nextStep(args)
      case 'mustUpgradeCapactity1Phase':
        return MustUpgradeCapactity1Phase.nextStep(args)
      case 'upgradeCapactity1Phase':
        return UpgradeCapactity1Phase.nextStep(args)
      default:
        break
    }
    return undefined
  }
}

export { QuestionnaireStateMachine }
export type { NextStepArgs, NextStepReturnValue }
