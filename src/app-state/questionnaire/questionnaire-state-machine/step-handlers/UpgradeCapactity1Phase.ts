import { QuestionnaireDataUtils } from '../../QuestionnaireDataUtils'
import type {
  NextStepArgs,
  NextStepReturnValue
} from '../QuestionnaireStateMachine'

// type CapacityRegEx =
//   | ({
//       groups: {
//         capacity: string
//       }
//     } & RegExpMatchArray)
//   | null

class UpgradeCapactity1Phase {
  static nextStep({ selectedValue }: NextStepArgs): NextStepReturnValue {
    if (selectedValue === 'YES') {
      return {
        nextStep: QuestionnaireDataUtils.createStepData(
          'distributionBox1Phase'
        ),
        price: 0,
        destinationCapacity: '1x35A',
        currentMonthlyConnectionCost: 35.59,
        destinationMonthlyConnectionCost: 35.59
      }
      // const stepData = QuestionnaireDataUtils.createStepData(
      //   'destinationCapacity1Phase'
      // )
      // const currentCapacityStep = immutablePreviousSteps.find(
      //   (step) => step.name === 'currentCapacity1Phase'
      // )
      // const currentCapacity = currentCapacityStep?.selectedValue
      // if (!currentCapacity) {
      //   throw new Error(
      //     'Something is WRONG: cannot find current capacity for 1-phase!'
      //   )
      // }
      // const allCapacities = currentCapacityStep?.stepConfig.options
      // if (!allCapacities) {
      //   throw new Error(
      //     'Something is WRONG: cannot find options for step <<currentCapacity1Phase>>!'
      //   )
      // }
      // const allCapacitiesValues = allCapacities.map(({ value }) => value)
      // const allCapacityValuesNumbers = allCapacitiesValues.map((value) => {
      //   const m = value.match(/^1x(?<capacity>\d+)A$/) as CapacityRegEx
      //   if (!m)
      //     throw new Error(
      //       'ERROR processing 1-phase capacity values in <<UpgradeCapactity1Phase.nextStep>>!'
      //     )
      //   return Number(m.groups.capacity)
      // })
      // const currentCapacityNumber = Number(
      //   (currentCapacity.match(/^1x(?<capacity>\d+)A$/) as CapacityRegEx)
      //     ?.groups.capacity ?? '-1'
      // )
      // if (currentCapacityNumber === -1) {
      //   throw new Error(
      //     'ERROR processing current 1-phase capacity value in <<UpgradeCapactity1Phase.nextStep>>!'
      //   )
      // }
      // allCapacityValuesNumbers.sort((a, b) => a - b)
      // const validCapacitiesForUpgrade = allCapacityValuesNumbers
      //   .slice(allCapacityValuesNumbers.indexOf(currentCapacityNumber) + 1)
      //   .map((number) => `1x${number}A`)

      // const options = QuestionnaireDataUtils.copyOptions(
      //   allCapacities.filter(({ value }) =>
      //     validCapacitiesForUpgrade.includes(value)
      //   )
      // )
      // stepData.stepConfig.options = options
      // return { nextStep: stepData }
    } else {
      return {
        nextStep: QuestionnaireDataUtils.createStepData(
          'distributionBox1Phase'
        ),
        price: 0,
        destinationCapacity: '1x25A',
        currentMonthlyConnectionCost: 35.59,
        destinationMonthlyConnectionCost: 35.59
      }
    }
  }
}

export { UpgradeCapactity1Phase }
