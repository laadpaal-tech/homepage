import { useEffect, useRef } from 'react'
import { Button } from '@nextui-org/react'

import type { ValueSelectedForStepName } from '~/app-state/questionnaire/QuestionnaireTypes'
import {
  ActiveQuestionnaire,
  StepData
} from '~/app-state/questionnaire/ActiveQuestionnaireTypes'

type QuestionnaireStepInfoProps = {
  stepData: StepData
  activeQuestionnaireData: ActiveQuestionnaire
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
  disableScrollIntoView?: boolean
}

const QuestionnaireStepInfo = ({
  stepData,
  activeQuestionnaireData,
  onValueSelected,
  disableScrollIntoView
}: QuestionnaireStepInfoProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const HeaderComponent = stepData.stepConfig.headerComponent
  const onClick = () => {
    const valueSelectedForStepName: ValueSelectedForStepName = {
      stepName: stepData.name,
      selectedValue: stepData.stepConfig.infoStepAction as string
    }
    onValueSelected(valueSelectedForStepName)
  }

  useEffect(() => {
    if (!disableScrollIntoView && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  })

  return (
    <div
      ref={ref}
      className='flex w-2/3 animate-fadeIn scroll-mt-6 flex-col rounded-xl border border-theme-blue p-6'
    >
      {HeaderComponent ? (
        <HeaderComponent activeQuestionnaireData={activeQuestionnaireData} />
      ) : (
        <h3 className='pb-4 text-xl text-black'>
          {stepData.stepConfig.header}
        </h3>
      )}
      <Button
        aria-label='confirmation button'
        className='max-w-max self-center'
        onClick={onClick}
        color='warning'
      >
        {stepData.stepConfig.label}
      </Button>
    </div>
  )
}

export { QuestionnaireStepInfo }
