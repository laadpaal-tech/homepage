import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type {
  NextStepArgs,
  NextStepReturnValue
} from '../QuestionnaireStateMachine'

class UpgradeConnection {
  static nextStep({ selectedValue }: NextStepArgs): NextStepReturnValue {
    if (selectedValue === 'YES') {
      return {
        nextStep: QuestionnaireDataUtils.createStepData('distributionBox3Phase')
      }
    } else {
      return {
        nextStep: QuestionnaireDataUtils.createStepData('currentCapacity1Phase')
      }
    }
  }
}

export { UpgradeConnection }
