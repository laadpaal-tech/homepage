import { Select, SelectItem } from '@nextui-org/react'
import { installationConfig } from '../../app-state/configuration'
import type {
  Configuration,
  ConfigurationOption,
  ConfigurationOptionValues,
  ConfigurationOptionsObjects
} from '../../app-state/configuration'
import type { Language, QuestionnaireData } from './questionnaireData'

import { useSetRecoilState } from 'recoil'
import { ChangeEvent, useEffect, useRef } from 'react'

type QuestionnaireStepSelectProps<C extends keyof Configuration> = {
  onNext: (keyValue: ConfigurationOption<C>) => void
  options: ConfigurationOptionsObjects<C>
  name: C
  questionnaireData: QuestionnaireData
  language: Language
  className?: string
  classNames?: Record<string, string>
}

const QuestionnaireStepSelect = <C extends keyof Configuration>({
  onNext,
  options,
  language,
  name,
  questionnaireData
}: QuestionnaireStepSelectProps<C>) => {
  const ref = useRef<HTMLDivElement>(null)
  const setConfig = useSetRecoilState(installationConfig)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const allowedValues = options.map((o) => o.value) as [
      ConfigurationOptionValues<C>
    ]
    if (!allowedValues.includes(value as ConfigurationOptionValues<C>)) {
      throw new Error(`"${value}" not in ${allowedValues}`)
    }
    const option = { [name]: value } as ConfigurationOption<C>
    setConfig((prev) => {
      return {
        ...prev,
        ...option
      }
    })
    onNext(option)
  }

  useEffect(() => {
    if (ref.current) {
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
        {questionnaireData[language][name].question}
      </h3>
      <Select
        selectionMode='single'
        label={questionnaireData[language][name].label as string}
        name={name}
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
      >
        {options.map((option) => (
          <SelectItem key={option.value}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}

export { QuestionnaireStepSelect }
