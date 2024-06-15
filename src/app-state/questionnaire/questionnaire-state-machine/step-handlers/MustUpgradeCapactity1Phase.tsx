import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type { NextStepArgs } from '../../QuestionnaireDataUtils'

class MustUpgradeCapactity1Phase {
  static nextStep({ selectedValue }: NextStepArgs) {
    if (selectedValue === 'YES-1phase') {
      return QuestionnaireDataUtils.createStepData('upgradeCapactity1Phase')
    } else if (selectedValue === 'YES-3phase') {
      return QuestionnaireDataUtils.createStepData('distributionBox3Phase')
    } else {
      return QuestionnaireDataUtils.createStepData('end')
    }
  }
}

export { MustUpgradeCapactity1Phase }
