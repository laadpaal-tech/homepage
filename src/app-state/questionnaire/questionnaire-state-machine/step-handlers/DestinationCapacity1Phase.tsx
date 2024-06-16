import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type { NextStepArgs } from '../../QuestionnaireDataUtils'

class DestinationCapacity1Phase {
  static nextStep({
    selectedValue,
    immutablePreviousSteps,
    mutableCurrentStep
  }: NextStepArgs) {
    const currentCapacityStep = immutablePreviousSteps.find(
      (step) => step.name === 'currentCapacity1Phase'
    )
    const currentCapacity = currentCapacityStep?.selectedValue
    if (!currentCapacity) {
      throw new Error(
        'Something is WRONG: cannot find current capacity for 1-phase!'
      )
    }
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
