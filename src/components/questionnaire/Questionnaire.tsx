import { useRecoilState } from 'recoil'
import { activeQuestionnaire } from '~/app-state/questionnaire/activeQuestionnaire'
import type { StepData } from '~/app-state/questionnaire/ActiveQuestionnaireTypes'

import type {
  InfoStepAction,
  ValueSelectedForStepName
} from '~/app-state/questionnaire/QuestionnaireTypes'
import { QuestionnaireStepRadio } from './QuestionnaireStepRadio'
import { QuestionnaireStateMachine } from '~/app-state/questionnaire/questionnaire-state-machine/QuestionnaireStateMachine'
import { QuestionnaireStepSelect } from './QuestionnaireStepSelect'
import { QuestionnaireDataUtils } from '~/app-state/questionnaire/QuestionnaireDataUtils'
import { QuestionnaireStepInfo } from './QuestionnaireStepInfo'
import { QuestionnaireStepFuseBox1Phase } from './QuestionnaireStepFuseBox1Phase'

const Questionnaire = () => {
  const [activeQuestionnaireData, setActiveQuestionnaireData] =
    useRecoilState(activeQuestionnaire)

  const onValueSelected = async (
    valueSelectedForStepName: ValueSelectedForStepName
  ) => {
    const { stepName, selectedValue } = valueSelectedForStepName
    console.log('stepName=', stepName)
    console.log('selectedStepValue=', selectedValue)

    if (
      stepName === 'endConfigurator' &&
      (selectedValue as InfoStepAction) === 'clear'
    ) {
      const activeQuestionnaireData = QuestionnaireStateMachine.init()
      activeQuestionnaireData.currentSequence[0].stepConfig.isInitial = false
      setActiveQuestionnaireData(activeQuestionnaireData)
      return
    }

    const { currentSequence, ...otherQuestionnaireMembers } =
      activeQuestionnaireData
    // find position of the selected step in the current sequence
    const positionInSequence = currentSequence.findIndex(
      (stepData) => stepData.name === stepName
    )

    // remove everything after current step - in case the user changed the previous decision
    const baseSequence = currentSequence.slice(0, positionInSequence + 1)

    // Objects stored in Recoil state are frozen by default
    // https://github.com/facebookexperimental/Recoil/issues/299#issuecomment-642308559
    // that's why we need to recreate the current element as well
    const newCurrentSequence = baseSequence.slice(0, -1)
    const currentStep: StepData = QuestionnaireDataUtils.copyStepData(
      baseSequence[positionInSequence]
    )
    currentStep.selectedValue = selectedValue

    const returnValue = await QuestionnaireStateMachine.nextStep({
      stepName,
      selectedValue,
      immutablePreviousSteps: newCurrentSequence,
      mutableCurrentStep: currentStep,
      ...otherQuestionnaireMembers
    })

    if (returnValue) {
      const { nextStep, ...otherOptions } = returnValue

      console.log('nextStep:', nextStep)
      console.log('otherOptions:', otherOptions)

      newCurrentSequence.push(currentStep)

      if (nextStep) {
        newCurrentSequence.push(nextStep)
      }

      setActiveQuestionnaireData((prev) => {
        return {
          ...prev,
          currentSequence: newCurrentSequence,
          ...otherOptions
        }
      })
    }
  }

  const renderStep = (stepData: StepData) => {
    switch (stepData.stepConfig.type) {
      case 'radio':
        return (
          <QuestionnaireStepRadio
            key={stepData.id}
            stepData={stepData}
            activeQuestionnaireData={activeQuestionnaireData}
            disableScrollIntoView={stepData.stepConfig.isInitial}
            onValueSelected={onValueSelected}
          />
        )
      case 'select':
        return (
          <QuestionnaireStepSelect
            key={stepData.id}
            stepData={stepData}
            activeQuestionnaireData={activeQuestionnaireData}
            disableScrollIntoView={stepData.stepConfig.isInitial}
            onValueSelected={onValueSelected}
          />
        )
      case 'info':
        return (
          <QuestionnaireStepInfo
            key={stepData.id}
            stepData={stepData}
            activeQuestionnaireData={activeQuestionnaireData}
            disableScrollIntoView={stepData.stepConfig.isInitial}
            onValueSelected={onValueSelected}
          />
        )
      case 'fuse-box-1phase':
        return (
          <QuestionnaireStepFuseBox1Phase
            key={stepData.id}
            stepData={stepData}
            activeQuestionnaireData={activeQuestionnaireData}
            disableScrollIntoView={stepData.stepConfig.isInitial}
            onValueSelected={onValueSelected}
          />
        )
      default:
        return null
    }
  }
  return (
    <div className='flex w-full flex-col gap-6'>
      {activeQuestionnaireData.currentSequence.map((stepData) =>
        renderStep(stepData)
      )}
    </div>
  )
}

export { Questionnaire }
