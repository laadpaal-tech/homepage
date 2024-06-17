import { StepData } from '~/app-state/questionnaire/ActiveQuestionnaireTypes'

class QuestionnaireUtils {
  static validateData(value: string, stepData: StepData) {
    const allowedValues = stepData.stepConfig.options.map((o) => o.value)
    if (!allowedValues.includes(value)) {
      throw new Error(`"${value}" not in ${allowedValues}`)
    }
  }
}

export { QuestionnaireUtils }
