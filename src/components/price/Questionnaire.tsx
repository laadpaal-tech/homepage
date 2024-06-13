import { ChangeEvent, useState } from 'react'
// import { Select, SelectItem, Button } from '@nextui-org/react'
import { RadioGroup } from '@nextui-org/react'
import {
  configurationOptions,
  defaultConfiguration,
  questionnaire
} from './configuration'
import type {
  Configuration,
  ConfigurationOption,
  ConfigurationOptionValues,
  ConfigurationOptionsObjects,
  Language
} from './configuration'

import { CustomRadio } from './CustomRadio'

type QuestionnaireStepProps<C extends keyof Configuration> = {
  onNext: (keyValue: ConfigurationOption<C>) => void
  options: ConfigurationOptionsObjects<C>
  name: C
  language: Language
  className?: string
  classNames?: Record<string, string>
}

type QuestionnaireStepName = keyof Configuration

const QuestionnaireStep = <C extends keyof Configuration>({
  onNext,
  options,
  language,
  name
}: QuestionnaireStepProps<C>) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const allowedValues = options.map((o) => o.value) as [
      ConfigurationOptionValues<C>
    ]
    const value = e.target.value as ConfigurationOptionValues<C>
    if (!allowedValues.includes(value)) {
      throw new Error(`"${value}" not in ${allowedValues}`)
    }
    const option = { [name]: value } as ConfigurationOption<C>
    onNext(option)
  }
  return (
    <div className='flex'>
      <RadioGroup
        label={questionnaire[language][name].question}
        className='w-2/3 p-6 pl-6'
        classNames={{
          base: 'border border-theme-blue rounded-xl',
          label: 'text-xl pb-4 text-black'
        }}
      >
        {options.map((option) => (
          <CustomRadio
            key={option.value}
            description={option.description}
            onChange={onChange}
            value={option.value}
            renderExtraInfo={option.extraInfo}
          >
            {option.label}
          </CustomRadio>
        ))}
      </RadioGroup>
      {/* <Select
          selectionMode='single'
          label={questionnaire[language][name].label}
          name={name}
          className='max-w-xs'
          classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
          disallowEmptySelection
          onChange={onChange}
        >
          {options.map((option) => (
            <SelectItem key={option.key} aria-multiline>
              {option.value}
            </SelectItem>
          ))}
        </Select>
        <Button color='primary' isDisabled={!selected} onClick={onNextStep}>
          Next...
        </Button> */}
    </div>
  )
}

interface QuestionnaireProps {
  children?: never
  language: Language
  stepsNames: QuestionnaireStepName[]
}

const Questionnaire = ({ stepsNames, language }: QuestionnaireProps) => {
  const [configuration, setConfiguration] =
    useState<Configuration>(defaultConfiguration)
  const [visibleSteps, setVisibleSteps] = useState<QuestionnaireStepName[]>([
    stepsNames[0]
  ])
  const onNext = (keyValue: ConfigurationOption<keyof Configuration>) => {
    console.log('configuration=', configuration)
    console.log('keyValue=', keyValue)
    setConfiguration((prev) => {
      return {
        ...prev,
        ...keyValue
      }
    })
    const currentStep = Object.keys(keyValue)[0] as QuestionnaireStepName
    // remove everything after current step - in case the user changed the previous decision
    const baseSteps = visibleSteps.slice(
      0,
      visibleSteps.indexOf(currentStep) + 1
    )
    console.log('baseSteps=', baseSteps)
    const selectedValue = Object.values(
      keyValue
    )[0] as ConfigurationOptionValues<keyof Configuration>
    const nextStep = questionnaire[language][currentStep].next(selectedValue)
    console.log('nextStep=', nextStep)
    setVisibleSteps([...baseSteps, nextStep])
  }
  return (
    <div className='flex w-full flex-col gap-6'>
      {visibleSteps.map((stepName) => (
        <QuestionnaireStep
          key={stepName}
          name={stepName}
          language={language}
          options={configurationOptions[language][stepName]}
          onNext={onNext}
        />
      ))}
    </div>
  )
}

export { Questionnaire }
