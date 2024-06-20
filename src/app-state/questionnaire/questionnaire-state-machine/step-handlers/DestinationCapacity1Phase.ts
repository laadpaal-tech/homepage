import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type { NextStepArgs } from '../QuestionnaireStateMachine'

class DestinationCapacity1Phase {
  static nextStep({
    selectedValue,
    immutablePreviousSteps,
    mutableCurrentStep,
    currentCapacity
  }: NextStepArgs) {
    switch (currentCapacity) {
      case '1x6A':
        // € 603,79
        break

      default:
        break
    }
  }
}

export { DestinationCapacity1Phase }
