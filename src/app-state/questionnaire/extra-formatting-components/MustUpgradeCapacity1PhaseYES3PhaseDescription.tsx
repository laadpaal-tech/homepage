import { useEffect, useState } from 'react'
import type { ExtraFormattingComponentProps } from './ExtraFormattingComponentProps'

const MustUpgradeCapacity1PhaseYES3PhaseDescription = ({
  activeQuestionnaireData
}: ExtraFormattingComponentProps) => {
  const [showWarning, setShowWarning] = useState<boolean>(false)

  useEffect(() => {
    if (activeQuestionnaireData && activeQuestionnaireData.currentSequence) {
      const currentStep = activeQuestionnaireData.currentSequence.find(
        (step) => step.name === 'currentCapacity1Phase'
      )
      if (currentStep) {
        console.log('selectedValue:', currentStep.selectedValue)
        if (currentStep.selectedValue === '1x6A') {
          setShowWarning(true)
        }
      }
    }
  }, [activeQuestionnaireData])

  if (showWarning) {
    return (
      <p className='text-sm text-black opacity-70'>
        Bij sommige netwerkbeheerders (bjiv. Enexis), vanaf een{' '}
        <strong>1x6A</strong> aansluitingswaarde kan je alleen een 3-fase
        aansluiting met waarde 3x25A kiezen. Controleer bij twijfel de
        voorwaarden van jouw netwerkbeheerder.
      </p>
    )
  } else {
    return null
  }
}

export { MustUpgradeCapacity1PhaseYES3PhaseDescription }
