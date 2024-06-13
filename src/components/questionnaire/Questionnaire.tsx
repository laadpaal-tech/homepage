import { useState } from 'react'
import { configurationOptions } from '../../app-state/configurationOptions'
import type {
  Configuration,
  ConfigurationOption,
  ConfigurationOptionValues
} from '../../app-state/configuration'
import { QuestionnaireStep } from './QuestionnaireStep'
import { questionnaireData } from './questionnaireData'
import type { Language } from './questionnaireData'

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
    const nextStep =
      questionnaireData[language][currentStep].next(selectedValue)
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
