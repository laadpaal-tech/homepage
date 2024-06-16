import { ChangeEvent, useEffect, useRef } from 'react'
import { Select, SelectItem } from '@nextui-org/react'

import type { ValueSelectedForStepName } from '~/app-state/questionnaire/QuestionnaireTypes'
import {
  ActiveQuestionnaire,
  StepData
} from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
import { QuestionnaireUtils } from './QuestionnaireUtils'

type QuestionnaireStepSelectProps = {
  stepData: StepData
  activeQuestionnaireData: ActiveQuestionnaire
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
  disableScrollIntoView?: boolean
}

const QuestionnaireStepSelect = ({
  stepData,
  activeQuestionnaireData,
  onValueSelected,
  disableScrollIntoView
}: QuestionnaireStepSelectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const HeaderComponent = stepData.stepConfig.headerComponent
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    QuestionnaireUtils.validateData(value, stepData)
    const valueSelectedForStepName: ValueSelectedForStepName = {
      stepName: stepData.name,
      selectedValue: value
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
      className='flex w-2/3 scroll-mt-6 flex-col rounded-xl border border-theme-blue p-6'
    >
      <h3 className='pb-4 text-xl text-black'>
        {HeaderComponent ? (
          <HeaderComponent activeQuestionnaireData={activeQuestionnaireData} />
        ) : (
          stepData.stepConfig.header
        )}
      </h3>
      <Select
        selectionMode='single'
        label={stepData.stepConfig.label}
        name={stepData.name}
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
      >
        {stepData.stepConfig.options.map((option) => (
          <SelectItem key={option.value}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}

export { QuestionnaireStepSelect }
