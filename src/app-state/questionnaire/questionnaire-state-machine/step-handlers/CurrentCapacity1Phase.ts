import { CurrentCapacity } from '../../ActiveQuestionnaireTypes'
import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type {
  NextStepArgs,
  NextStepReturnValue
} from '../QuestionnaireStateMachine'

class CurrentCapacity1Phase {
  static nextStep({ selectedValue }: NextStepArgs): NextStepReturnValue {
    const returnValue: Partial<NextStepReturnValue> = {
      currentCapacity: selectedValue as CurrentCapacity
    }
    if (['1x6A', '1x10A'].includes(selectedValue)) {
      returnValue.nextStep = QuestionnaireDataUtils.createStepData(
        'mustUpgradeCapactity1Phase'
      )
      const stepOptions = returnValue.nextStep.stepConfig.options
      const option1 = stepOptions.find((o) => o.value === 'YES-1phase')
      const option2 = stepOptions.find((o) => o.value === 'YES-3phase')
      if (!option1 || !option2) {
        throw new Error('Error: options YES-1phase and YES-3phase do not exist')
      }
      option1.priceMonthly = 35.59
      option2.priceMonthly = 35.59
      if (selectedValue === '1x6A') {
        option1.price = 603.79
        option2.price = 603.79

        // returnValue.price = 603.79
        // returnValue.nextStep.price = 603.79
      } else {
        option1.price = 309.43
        option2.price = 309.43
        // returnValue.price = 309.43
        // returnValue.nextStep.price = 309.43
      }
      returnValue.destinationCapacity = '1x35A'
      returnValue.destinationMonthlyConnectionCost = 35.59
      returnValue.currentMonthlyConnectionCost = 11.07
    } else if (selectedValue === '1x25A') {
      // can only upgrate to 1x35 and it is free
      returnValue.nextStep = QuestionnaireDataUtils.createStepData(
        'upgradeCapactity1Phase'
      )
      returnValue.nextStep.price = 0
      returnValue.destinationCapacity = '1x35A'
      returnValue.currentMonthlyConnectionCost = 35.59
    } else {
      // from 1x35 and 1x40 you can only upgrade to 3-phase connection
      returnValue.nextStep = QuestionnaireDataUtils.createStepData(
        'distributionBox1Phase'
      )
      // do not know the current monthly costs for 1x40A
      if (selectedValue === '1x35A') {
        returnValue.currentMonthlyConnectionCost = 35.59
        returnValue.destinationMonthlyConnectionCost = 35.59
      }
    }
    return returnValue as NextStepReturnValue
  }
}

export { CurrentCapacity1Phase }
