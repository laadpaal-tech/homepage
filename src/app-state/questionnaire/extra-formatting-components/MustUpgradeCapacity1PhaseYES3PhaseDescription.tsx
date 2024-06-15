import { useEffect, useState } from 'react'
import type { ExtraFormattingComponentProps } from './ExtraFormattingComponentProps'

const MustUpgradeCapacity1PhaseYES3PhaseDescription = ({
  activeQuestionnaireData
}: ExtraFormattingComponentProps) => {
  const [showWarning, setShowWarning] = useState<boolean>(false)
  console.log(
    'MustUpgradeCapacity1PhaseYES3PhaseDescription[activeQuestionnaireData]=',
    activeQuestionnaireData
  )

  useEffect(() => {
    console.log(
      'MustUpgradeCapacity1PhaseYES3PhaseDescription[1]:',
      activeQuestionnaireData
    )
    if (activeQuestionnaireData && activeQuestionnaireData.currentSequence) {
      const currentConnectionStep =
        activeQuestionnaireData.currentSequence.find(
          (step) => step.name === 'currentCapacity1Phase'
        )
      if (currentConnectionStep) {
        console.log(
          'currentConnectionValue:',
          currentConnectionStep.selectedValue
        )
        if (currentConnectionStep.selectedValue === '1x6A') {
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
