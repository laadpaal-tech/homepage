import { useEffect, useState } from 'react'
import type { ExtraFormattingComponentProps } from './ExtraFormattingComponentProps'

const MustUpgradeCapacity1PhaseYES1PhaseDescription = ({
  activeQuestionnaireData
}: ExtraFormattingComponentProps) => {
  const [showWarning6A, setShowWarning6A] = useState<boolean>(false)
  const [showWarning10A, setShowWarning10A] = useState<boolean>(false)

  useEffect(() => {
    if (activeQuestionnaireData && activeQuestionnaireData.currentSequence) {
      const currentStep = activeQuestionnaireData.currentSequence.find(
        (step) => step.name === 'currentCapacity1Phase'
      )
      if (currentStep) {
        console.log('selectedValue:', currentStep.selectedValue)
        if (currentStep.selectedValue === '1x6A') {
          setShowWarning6A(true)
        } else {
          setShowWarning10A(true)
        }
      }
    }
  }, [activeQuestionnaireData])

  if (showWarning6A) {
    return (
      <p className='text-sm text-black opacity-70'>
        Bij sommige netwerkbeheerders (bjiv. Enexis), vanaf een{' '}
        <strong>1x6A</strong> aansluitingswaarde krijg je maximaal een 1-fase
        aansluiting met waarde 1x35A kiezen. Dit is dus in dit geval de enige
        optie als je jouw laadpaal van 1-fase aansluiting wil draaien.
        Controleer bij twijfel de voorwaarden van jouw netwerkbeheerder.
      </p>
    )
  } else if (showWarning10A) {
    return (
      <p className='text-sm text-black opacity-70'>
        Bij sommige netwerkbeheerders (bjiv. Enexis), vanaf een{' '}
        <strong>1x10A</strong> aansluitingswaarde krijg je alleen een 1-fase
        aansluiting met waarde 1x35A kiezen. Dit is dus in dit geval de enige
        optie als je jouw laadpaal van 1-fase aansluiting wil draaien. Dit is
        ook de waarde dat ik zou je aanbevelen. Controleer bij twijfel de
        voorwaarden van jouw netwerkbeheerder.
      </p>
    )
  } else {
    return null
  }
}

export { MustUpgradeCapacity1PhaseYES1PhaseDescription }
