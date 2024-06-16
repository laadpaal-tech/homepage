import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type {
  NextStepArgs,
  NextStepReturnValue
} from '../QuestionnaireStateMachine'

class MustUpgradeCapactity1Phase {
  static createStepDataFoorYES1phaseFrom1x6A = () => {}

  static nextStep({
    selectedValue,
    mutableCurrentStep,
    currentCapacity
  }: NextStepArgs): NextStepReturnValue {
    if (selectedValue === 'YES-1phase') {
      if (currentCapacity === '1x6A') {
        mutableCurrentStep.price = 603.79
        return {
          nextStep: QuestionnaireDataUtils.createStepData(
            'distributionBox1Phase'
          ),
          destinationCapacity: '1x35A',
          destinationMonthlyConnectionCost: 35.59,
          price: 603.79
        }
      } else {
        mutableCurrentStep.price = 309.43
        return {
          nextStep: QuestionnaireDataUtils.createStepData(
            'distributionBox1Phase'
          ),
          destinationCapacity: '1x35A',
          destinationMonthlyConnectionCost: 35.59,
          price: 309.45
        }
      }
    } else if (selectedValue === 'YES-3phase') {
      if (currentCapacity === '1x6A') {
        return {
          nextStep: QuestionnaireDataUtils.createStepData(
            'distributionBox3Phase'
          ),
          destinationCapacity: '3x25A',
          destinationMonthlyConnectionCost: 35.59,
          price: 603.79
        }
      } else {
        return {
          nextStep: QuestionnaireDataUtils.createStepData(
            'destinationCapacity3Phase'
          )
        }
      }
    } else {
      return {
        nextStep: QuestionnaireDataUtils.createStepData('endConfigurator')
      }
    }
  }
}

export { MustUpgradeCapactity1Phase }
