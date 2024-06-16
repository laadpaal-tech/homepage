import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type {
  NextStepArgs,
  NextStepReturnValue
} from '../QuestionnaireStateMachine'

class Connection {
  static nextStep({ selectedValue }: NextStepArgs): NextStepReturnValue {
    if (selectedValue === '1PHASE') {
      return {
        nextStep: QuestionnaireDataUtils.createStepData('upgradeConnection')
      }
    } else {
      return {
        nextStep: QuestionnaireDataUtils.createStepData('distributionBox3Phase')
      }
    }
  }

  static sayHi() {
    return 'Hi'
  }
}

export { Connection }
