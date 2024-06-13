// import { Select, SelectItem, Button } from '@nextui-org/react'
import { RadioGroup } from '@nextui-org/react'
import {
  defaultInstallationConfig,
  installationConfig
} from '../../app-state/configuration'
import type {
  Configuration,
  ConfigurationOption,
  ConfigurationOptionValues,
  ConfigurationOptionsObjects
} from '../../app-state/configuration'
import { questionnaireData } from './questionnaireData'
import type { Language } from './questionnaireData'

import { CustomRadio } from './CustomRadio'
import { useRecoilState } from 'recoil'

type QuestionnaireStepProps<C extends keyof Configuration> = {
  onNext: (keyValue: ConfigurationOption<C>) => void
  options: ConfigurationOptionsObjects<C>
  name: C
  language: Language
  className?: string
  classNames?: Record<string, string>
}

const QuestionnaireStep = <C extends keyof Configuration>({
  onNext,
  options,
  language,
  name
}: QuestionnaireStepProps<C>) => {
  const [config, setConfig] = useRecoilState(installationConfig)
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

  return (
    <div className='flex'>
      <RadioGroup
        label={questionnaireData[language][name].question}
        className='w-2/3 p-6 pl-6'
        classNames={{
          base: 'border border-theme-blue rounded-xl',
          label: 'text-xl pb-4 text-black'
        }}
        onValueChange={onValueChange}
        defaultValue={defaultInstallationConfig[name]}
        value={config[name]}
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

export { QuestionnaireStep }
