import { useState } from 'react'
import { configurationOptions } from './configurationOptions'
import {
  installationConfig,
  type Configuration,
  type ConfigurationOption,
  type ConfigurationOptionValues
} from './configuration'
import { QuestionnaireStepRadio } from './QuestionnaireStepRadio'
import { questionnaireData } from './questionnaireData'
import type { Language } from './questionnaireData'
import { QuestionnaireStepSelect } from '../components/questionnaire/QuestionnaireStepSelect'
import { useRecoilValue } from 'recoil'

type QuestionnaireStepName = keyof Configuration

interface QuestionnaireProps {
  children?: never
  language: Language
  stepsNames: QuestionnaireStepName[]
}

const Questionnaire = ({ stepsNames, language }: QuestionnaireProps) => {
  const [visibleSteps, setVisibleSteps] = useState<QuestionnaireStepName[]>([
    stepsNames[0]
  ])
  const config = useRecoilValue(installationConfig)
  const onNext = (keyValue: ConfigurationOption<keyof Configuration>) => {
    console.log('keyValue=', keyValue)
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
    const nextStep = questionnaireData[language][currentStep].next(
      selectedValue,
      config
    ) as unknown as QuestionnaireStepName
    console.log('nextStep=', nextStep)
    setVisibleSteps([...baseSteps, nextStep])
  }
  const renderControl = (stepName: QuestionnaireStepName) => {
    if (configurationOptions[language][stepName].control === 'radio') {
      let keyValue = stepName
      if (stepName === 'upgradeCapactity1Phase') {
        keyValue += `${config.currentCapacity1Phase}`
      }
      return (
        <QuestionnaireStepRadio
          key={keyValue}
          name={stepName}
          language={language}
          questionnaireData={questionnaireData}
          options={configurationOptions[language][stepName].values}
          onNext={onNext}
        />
      )
    } else {
      return (
        <QuestionnaireStepSelect
          key={stepName}
          name={stepName}
          language={language}
          questionnaireData={questionnaireData}
          options={configurationOptions[language][stepName].values}
          onNext={onNext}
        />
      )
    }
  }
  return (
    <div className='flex w-full flex-col gap-6'>
      {visibleSteps.map((stepName) => renderControl(stepName))}
    </div>
  )
}

export { Questionnaire }
