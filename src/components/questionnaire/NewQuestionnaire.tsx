import { useRecoilState } from 'recoil'
import { activeQuestionnaire } from '~/app-state/activeQuestionnaire'
import type { StepData } from '~/app-state/ActiveQuestionnaireTypes'

import { ValueSelectedForStepName } from '~/app-state/combinedConfiguration'
import { NewQuestionnaireStepRadio } from './NewQuestionnaireStepRadio'
import { QuestionnaireStateMachine } from '~/app-state/QuestionnaireStateMachine'

const NewQuestionnaire = () => {
  const [activeQuestionnaireData, setActiveQuestionnaireData] =
    useRecoilState(activeQuestionnaire)

  const onValueSelected = (
    valueSelectedForStepName: ValueSelectedForStepName
  ) => {
    const { stepName, selectedValue } = valueSelectedForStepName
    console.log('stepName=', stepName)
    console.log('selectedStepValue=', selectedValue)

    const currentSequence = activeQuestionnaireData.currentSequence
    // find position of the selected step in the current sequence
    const positionInSequence = currentSequence.findIndex(
      (stepData) => stepData.name === stepName
    )

    // remove everything after current step - in case the user changed the previous decision
    const baseSequence = currentSequence.slice(0, positionInSequence + 1)

    const nextStepData = QuestionnaireStateMachine.nextStep({
      stepName,
      selectedValue,
      baseSequence
    })

    const newCurrentSequence = [...baseSequence]

    if (nextStepData) {
      newCurrentSequence.push(nextStepData)
    }

    setActiveQuestionnaireData((prev) => {
      return {
        ...prev,
        currentSequence: newCurrentSequence
      }
    })
  }

  const renderStep = (stepData: StepData) => {
    if (stepData.type === 'radio') {
      return (
        <NewQuestionnaireStepRadio
          key={stepData.id}
          name={stepData.name}
          stepData={stepData}
          onValueSelected={onValueSelected}
        />
      )
    }
    return null
  }
  return (
    <div className='flex w-full flex-col gap-6'>
      {activeQuestionnaireData.currentSequence.map((stepData) =>
        renderStep(stepData)
      )}
    </div>
  )
}

export { NewQuestionnaire }
