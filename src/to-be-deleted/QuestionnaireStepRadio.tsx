import { RadioGroup } from '@nextui-org/react'
import { installationConfig } from './configuration'
import type {
  Configuration,
  ConfigurationOption,
  ConfigurationOptionValues,
  ConfigurationOptionsObjects
} from './configuration'
import type { Language, QuestionnaireData } from './questionnaireData'

import { CustomRadio } from '../components/questionnaire/CustomRadio'
import { useSetRecoilState } from 'recoil'
import { useEffect, useRef } from 'react'

type QuestionnaireStepRadioProps<C extends keyof Configuration> = {
  onNext: (keyValue: ConfigurationOption<C>) => void
  options: ConfigurationOptionsObjects<C>
  name: C
  questionnaireData: QuestionnaireData
  language: Language
  className?: string
  classNames?: Record<string, string>
}

const QuestionnaireStepRadio = <C extends keyof Configuration>({
  onNext,
  options,
  language,
  name,
  questionnaireData
}: QuestionnaireStepRadioProps<C>) => {
  const ref = useRef<HTMLDivElement>(null)
  const setConfig = useSetRecoilState(installationConfig)
  const onValueChange = (value: string) => {
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
    <div ref={ref} className='flex scroll-mt-6'>
      <RadioGroup
        label={questionnaireData[language][name].question}
        className='w-2/3 p-6'
        classNames={{
          base: 'border border-theme-blue rounded-xl',
          label: 'text-xl pb-4 text-black'
        }}
        onValueChange={onValueChange}
      >
        {options.map((option) => (
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

export { QuestionnaireStepRadio }
