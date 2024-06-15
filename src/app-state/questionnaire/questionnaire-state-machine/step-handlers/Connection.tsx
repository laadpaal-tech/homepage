import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type { NextStepArgs } from '../../QuestionnaireDataUtils'

class Connection {
  static nextStep({ selectedValue }: NextStepArgs) {
    if (selectedValue === '1PHASE') {
      return QuestionnaireDataUtils.createStepData('upgradeConnection')
    } else {
      return QuestionnaireDataUtils.createStepData('distributionBox3Phase')
    }
  }
}

export { Connection }
