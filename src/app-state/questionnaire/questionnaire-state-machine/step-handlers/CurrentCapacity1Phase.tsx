import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type { NextStepArgs } from '../../QuestionnaireDataUtils'

class CurrentCapacity1Phase {
  static nextStep({ selectedValue }: NextStepArgs) {
    if (['1x6A', '1x10A'].includes(selectedValue)) {
      return QuestionnaireDataUtils.createStepData('mustUpgradeCapactity1Phase')
    } else if (['1x25A', '1x35A'].includes(selectedValue)) {
      return QuestionnaireDataUtils.createStepData('upgradeCapactity1Phase')
    } else {
      return QuestionnaireDataUtils.createStepData('distributionBox1Phase')
    }
  }
}

export { CurrentCapacity1Phase }
