import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
// import { Select, SelectItem } from '@nextui-org/react'

import type { ValueSelectedForStepName } from '~/app-state/questionnaire/QuestionnaireTypes'
import {
  ActiveQuestionnaire,
  StepData
} from '~/app-state/questionnaire/ActiveQuestionnaireTypes'

import { fuseBoxConfig, fuseBoxConfigOptionsArray } from './fuse-box/BoxConfig'
import { FuseBoxComponent } from './fuse-box/FuseBoxComponent'
// import { QuestionnaireUtils } from './QuestionnaireUtils'

type QuestionnaireStepFuseBoxProps = {
  stepData: StepData
  activeQuestionnaireData: ActiveQuestionnaire
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
  disableScrollIntoView?: boolean
}

const QuestionnaireStepFuseBox1Phase = ({
  stepData,
  activeQuestionnaireData,
  // onValueSelected,
  disableScrollIntoView
}: QuestionnaireStepFuseBoxProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const config = useRecoilValue(fuseBoxConfig)
  const HeaderComponent = stepData.stepConfig.headerComponent

  // const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value
  //   console.log(value)
  //   QuestionnaireUtils.validateData(value, stepData)
  //   const valueSelectedForStepName: ValueSelectedForStepName = {
  //     stepName: stepData.name,
  //     selectedValue: value
  //   }
  //   onValueSelected(valueSelectedForStepName)
  // }

  useEffect(() => {
    console.log('config:', config)
  }, [config])

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!disableScrollIntoView && ref.current) {
        ref.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }, 100)
    return () => {
      clearTimeout(timerId)
    }
  }, [disableScrollIntoView])

  return (
    <div
      ref={ref}
      className='flex w-2/3 animate-fadeIn scroll-mt-6 flex-col gap-6 rounded-xl border border-theme-blue p-6'
    >
      <h3 className='pb-4 text-xl text-black'>
        {HeaderComponent ? (
          <HeaderComponent activeQuestionnaireData={activeQuestionnaireData} />
        ) : (
          stepData.stepConfig.header
        )}
      </h3>
      <div className='flex w-[350px] flex-col gap-6'>
        {fuseBoxConfigOptionsArray.map(
          ({ name, label, extraLabel, options, extraOptions }) => (
            <FuseBoxComponent
              key={name}
              name={name}
              label={label}
              extraLabel={extraLabel}
              options={options}
              extraOptions={extraOptions}
              resetOnReload={false}
            />
          )
        )}
      </div>
    </div>
  )
}

export { QuestionnaireStepFuseBox1Phase }
