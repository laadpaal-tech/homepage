import type { StepData } from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
import { v4 as uuidv4 } from 'uuid'

import { Utils } from '../Utils'
import type { NextStepArgs } from '../Utils'

class Connection {
  static nextStep({ selectedValue }: NextStepArgs) {
    if (selectedValue === '1PHASE') {
      const upgradeConnectionConfig = Utils.copyConfig('upgradeConnection')
      const step: StepData = {
        id: uuidv4(),
        name: 'upgradeConnection',
        selectedValue,
        ...upgradeConnectionConfig
      }
      return step
    } else {
      const distributionBox3PhaseConfig = Utils.copyConfig(
        'distributionBox3Phase'
      )
      const step: StepData = {
        id: uuidv4(),
        name: 'distributionBox3Phase',
        selectedValue,
        ...distributionBox3PhaseConfig
      }
      return step
    }
  }
}

export { Connection }
