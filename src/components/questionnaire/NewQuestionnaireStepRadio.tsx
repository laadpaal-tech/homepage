import { useEffect, useRef } from 'react'
import { RadioGroup } from '@nextui-org/react'
import type { ValueSelectedForStepName } from '~/app-state/questionnaire/questionnaire-state-machine/QuestionnaireTypes'
import { StepData } from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
import { CustomRadio } from './CustomRadio'
import { QuestionnaireUtils } from './QuestionnaireUtils'

type NewQuestionnaireStepRadioProps = {
  stepData: StepData
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
  disableScrollIntoView?: boolean
}

const NewQuestionnaireStepRadio = ({
  stepData,
  onValueSelected,
  disableScrollIntoView
}: NewQuestionnaireStepRadioProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const onValueChange = (value: string) => {
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
    <div ref={ref} className='flex scroll-mt-6'>
      <RadioGroup
        label={stepData.stepConfig.header}
        className='w-2/3 p-6'
        classNames={{
          base: 'border border-theme-blue rounded-xl',
          label: 'text-xl pb-4 text-black'
        }}
        onValueChange={onValueChange}
      >
        {stepData.stepConfig.options.map((option) => (
          <CustomRadio
            key={option.value}
            description={option.description}
            value={option.value}
            renderExtraInfo={option.extraInfo}
          >
            {option.label}
          </CustomRadio>
        ))}
      </RadioGroup>
    </div>
  )
}

export { NewQuestionnaireStepRadio }
