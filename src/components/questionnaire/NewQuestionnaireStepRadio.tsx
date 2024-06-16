import { useEffect, useRef } from 'react'
import { RadioGroup } from '@nextui-org/react'
import type { ValueSelectedForStepName } from '~/app-state/questionnaire/QuestionnaireTypes'
import {
  ActiveQuestionnaire,
  StepData
} from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
import { CustomRadio } from './CustomRadio'
import { QuestionnaireUtils } from './QuestionnaireUtils'

type NewQuestionnaireStepRadioProps = {
  stepData: StepData
  activeQuestionnaireData: ActiveQuestionnaire
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
  disableScrollIntoView?: boolean
}

const NewQuestionnaireStepRadio = ({
  stepData,
  activeQuestionnaireData,
  onValueSelected,
  disableScrollIntoView
}: NewQuestionnaireStepRadioProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const HeaderComponent = stepData.stepConfig.headerComponent

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
  }, [disableScrollIntoView])

  return (
    <div ref={ref} className='animate-fadeIn flex scroll-mt-6'>
      <RadioGroup
        label={
          HeaderComponent ? (
            <HeaderComponent
              activeQuestionnaireData={activeQuestionnaireData}
            />
          ) : (
            stepData.stepConfig.header
          )
        }
        description={stepData.stepConfig.additionalInfo}
        className='w-2/3 p-6'
        classNames={{
          base: 'border border-theme-blue rounded-xl',
          label: 'text-xl pb-4 text-black'
        }}
        onValueChange={onValueChange}
      >
        {stepData.stepConfig.options.map((option) => {
          const DescriptionComponent = option.descriptionComponent
          const AdditionalConfiguration =
            option.additionalConfigurationComponent
          return (
            <CustomRadio
              key={option.value}
              description={
                DescriptionComponent ? (
                  <DescriptionComponent
                    activeQuestionnaireData={activeQuestionnaireData}
                  />
                ) : (
                  option.description
                )
              }
              value={option.value}
              additionalConfiguration={
                AdditionalConfiguration ? (
                  <AdditionalConfiguration
                    activeQuestionnaireData={activeQuestionnaireData}
                  />
                ) : null
              }
            >
              {option.label}
            </CustomRadio>
          )
        })}
      </RadioGroup>
    </div>
  )
}

export { NewQuestionnaireStepRadio }
