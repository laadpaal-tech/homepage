import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type {
  NextStepArgs,
  NextStepReturnValue
} from '../QuestionnaireStateMachine'

class DistributionBox1Phase {
  static nextStep({ selectedValue }: NextStepArgs): NextStepReturnValue {
    if (selectedValue === 'NEWBOX') {
      return {
        nextStep: QuestionnaireDataUtils.createStepData(
          'distributionBox1PhaseConfig'
        )
      }
    } else {
      return {
        nextStep: QuestionnaireDataUtils.createStepData(
          'distributionBox1PhaseConfig'
        )
      }
    }
  }
}

export { DistributionBox1Phase }
