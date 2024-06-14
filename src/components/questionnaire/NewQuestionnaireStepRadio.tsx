import { RadioGroup } from '@nextui-org/react'
import { CustomRadio } from './CustomRadio'
import { useEffect, useRef } from 'react'
import {
  StepName,
  ValueSelectedForStepName
} from '~/app-state/combinedConfiguration'
import { StepData } from '~/app-state/ActiveQuestionnaireTypes'

type NewQuestionnaireStepRadioProps = {
  name: StepName
  stepData: StepData
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
}

const NewQuestionnaireStepRadio = ({
  name,
  stepData,
  onValueSelected
}: NewQuestionnaireStepRadioProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const onValueChange = (value: string) => {
    const allowedValues = stepData.options.map((o) => o.value)
    if (!allowedValues.includes(value)) {
      throw new Error(`"${value}" not in ${allowedValues}`)
    }
    const valueSelectedForStepName: ValueSelectedForStepName = {
      stepName: name,
      selectedValue: value
    }
    onValueSelected(valueSelectedForStepName)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  })

  return (
    <div ref={ref} className='flex scroll-mt-6'>
      <RadioGroup
        label={stepData.header}
        className='w-2/3 p-6'
        classNames={{
          base: 'border border-theme-blue rounded-xl',
          label: 'text-xl pb-4 text-black'
        }}
        onValueChange={onValueChange}
      >
        {stepData.options.map((option) => (
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
