import { ChangeEvent, useState } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import {
  configurationOptions,
  defaultConfiguration,
  questionnaire
} from './configuration'
import type {
  Configuration,
  ConfigurationOption,
  ConfigurationOptionsKeyValuePairs,
  ConfigurationOptionValues,
  Language
} from './configuration'

type QuestionnaireStepProps<C extends keyof Configuration> = {
  onNext: (keyValue: ConfigurationOption<C>) => void
  options: ConfigurationOptionsKeyValuePairs<C>
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
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const allowedValues = options.map((o) => o.key) as [
      ConfigurationOption<C>[C]
    ]
    const value = e.target.value as ConfigurationOptionValues<C>
    if (!allowedValues.includes(value)) {
      throw new Error(`"${value}" not in ${allowedValues}`)
    }
    const option = { [name as keyof ConfigurationOption<'connection'>]: value }
    onNext(option)
  }
  return (
    <>
      <h3 className='text-2xl @5xl:text-4xl'>
        {questionnaire[language].connection.question}
      </h3>
      <Select
        selectionMode='single'
        label={questionnaire.nl.connection.label}
        name={name}
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>{option.value}</SelectItem>
        ))}
      </Select>
    </>
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
  const onNext = (keyValue: ConfigurationOption<keyof Configuration>) => {
    console.log(configuration)
    console.log(keyValue)
    setConfiguration((prev) => {
      return {
        ...prev,
        ...keyValue
      }
    })
  }
  return (
    <div>
      {stepsNames.map((stepName) => (
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
