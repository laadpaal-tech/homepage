import { useEffect, useState } from 'react'
import type { ExtraFormattingComponentProps } from './ExtraFormattingComponentProps'

const MustUpgradeCapacity1PhaseHeader = ({
  activeQuestionnaireData
}: ExtraFormattingComponentProps) => {
  const [currentConnectionCapacity, setCurrentConnectionCapacity] =
    useState<string>()

  useEffect(() => {
    if (activeQuestionnaireData && activeQuestionnaireData.currentSequence) {
      const currentStep = activeQuestionnaireData.currentSequence.find(
        (step) => step.name === 'currentCapacity1Phase'
      )
      if (currentStep) {
        setCurrentConnectionCapacity(currentStep.selectedValue)
        console.log('selectedValue:', currentStep.selectedValue)
      }
    }
  }, [activeQuestionnaireData])

  return (
    <section className='flex flex-col'>
      <h2 className='pb-4 text-xl font-bold text-red-700'>
        Je moet jouw huidige 1-fase aansluiting verzwaren!
      </h2>
      <section className='ml-2 flex flex-col gap-2 border-l-8 border-l-theme-dark-blue pl-4 text-sm text-gray-600'>
        <p>
          Je heb aangewezen dat je een aansluiting met{' '}
          <strong>{currentConnectionCapacity}</strong> heb.
        </p>
        <p>
          Een laadpaal heeft minimaal 6A nodig om te laden, anders begint de
          laadsessie niet. Dus, je moet jouw 1-fase installatie verzwaren. Voor
          1-fase installatie raad ik je aan een aansluiting met waarde{' '}
          <strong>1x35A</strong>.
        </p>
        <p>
          Je mag toch ook willen direct een 3-fase aansluiting aanvragen (beste
          optie).
        </p>
      </section>
    </section>
  )
}

export { MustUpgradeCapacity1PhaseHeader }
