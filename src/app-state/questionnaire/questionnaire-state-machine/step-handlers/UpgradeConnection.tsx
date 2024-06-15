import { QuestionnaireDataUtils } from '../QuestionnaireDataUtils'
import type { NextStepArgs } from '../QuestionnaireDataUtils'

class UpgradeConnection {
  static nextStep({ selectedValue }: NextStepArgs) {
    if (selectedValue === 'YES') {
      return QuestionnaireDataUtils.createStepData('distributionBox3Phase')
    } else {
      return QuestionnaireDataUtils.createStepData('currentCapacity1Phase')
    }
  }
}

export { UpgradeConnection }
