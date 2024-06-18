import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Select, SelectItem } from '@nextui-org/react'

import type { ValueSelectedForStepName } from '~/app-state/questionnaire/QuestionnaireTypes'
import {
  ActiveQuestionnaire,
  StepData
} from '~/app-state/questionnaire/ActiveQuestionnaireTypes'
// import { QuestionnaireUtils } from './QuestionnaireUtils'

type QuestionnaireStepFuseBoxProps = {
  stepData: StepData
  activeQuestionnaireData: ActiveQuestionnaire
  onValueSelected: (valueSelectedForStepName: ValueSelectedForStepName) => void
  disableScrollIntoView?: boolean
}

type BoxConfig = {
  solar: 'zonnepanelengroep-yes' | 'zonnepanelengroep-no'
  solarRCDDD: 'inverter-rcddd-yes' | 'inverter-rcddd-no'
}

type BoxConfigValueType<P extends keyof BoxConfig> = Pick<BoxConfig, P>[P]

const defaultBoxConfig: BoxConfig = {
  solar: 'zonnepanelengroep-no',
  solarRCDDD: 'inverter-rcddd-yes'
}

const QuestionnaireStepFuseBox1Phase = ({
  stepData,
  activeQuestionnaireData,
  // onValueSelected,
  disableScrollIntoView
}: QuestionnaireStepFuseBoxProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [config, setConfig] = useState<BoxConfig>(defaultBoxConfig)
  const HeaderComponent = stepData.stepConfig.headerComponent

  // const onChangeSolar = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value
  // }
  const onChangeSolar = (e: ChangeEvent<HTMLSelectElement>) => {
    const solar = e.target.value as BoxConfigValueType<'solar'>
    if (solar === 'zonnepanelengroep-yes') {
      setConfig((prev) => ({
        ...prev,
        solar,
        solarRCDDD: 'inverter-rcddd-yes'
      }))
    }
  }

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    console.log(value)
    // QuestionnaireUtils.validateData(value, stepData)
    // const valueSelectedForStepName: ValueSelectedForStepName = {
    //   stepName: stepData.name,
    //   selectedValue: value
    // }
    // onValueSelected(valueSelectedForStepName)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!disableScrollIntoView && ref.current) {
        ref.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }, 0)
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
      <Select
        selectionMode='single'
        label='aardlekschakelaars of aardlekautomaten'
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
        defaultSelectedKeys={['aardlekschakelaars']}
      >
        <SelectItem key='aardlekschakelaars'>aardlekschakelaars</SelectItem>
        <SelectItem key='aardlekautomaten'>aardlekautomaten</SelectItem>
      </Select>
      <Select
        selectionMode='single'
        label='fornuisgroep'
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
        defaultSelectedKeys={['fornuisgroep-no']}
      >
        <SelectItem key='fornuisgroep-yes'>JA</SelectItem>
        <SelectItem key='fornuisgroep-no'>NEE</SelectItem>
      </Select>
      <div className='flex  flex-col border-r-8 border-r-theme-dark-blue'>
        <Select
          selectionMode='single'
          label='zonnepanelengroep'
          className='max-w-xs'
          classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
          disallowEmptySelection
          onChange={onChangeSolar}
          defaultSelectedKeys={[defaultBoxConfig.solar]}
        >
          <SelectItem key='zonnepanelengroep-yes' value='zonnepanelengroep-yes'>
            JA
          </SelectItem>
          <SelectItem key='zonnepanelengroep-no' value='zonnepanelengroep-no'>
            NEE
          </SelectItem>
        </Select>
        {config.solar && (
          <Select
            selectionMode='single'
            label='inverter met ingebouwde DC-lekbeveiliging'
            className='max-w-xs animate-fadeIn'
            classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
            disallowEmptySelection
            onChange={onChangeSolar}
            defaultSelectedKeys={[defaultBoxConfig.solarRCDDD]}
          >
            <SelectItem key='inverter-rcddd-yes' value='inverter-rcddd-yes'>
              JA
            </SelectItem>
            <SelectItem key='inverter-rcddd-no' value='inverter-rcddd-no'>
              NEE
            </SelectItem>
          </Select>
        )}
      </div>
      <Select
        selectionMode='single'
        label='groepen merk'
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
        defaultSelectedKeys={['emat-schneider']}
      >
        <SelectItem key='emat-schneider'>EMAT in Schneider kast</SelectItem>
        <SelectItem key='chint-schneider'>CHINT in Schneider kast</SelectItem>
        <SelectItem key='emat-chint-schneider'>
          EMAT/CHINT Type B in Schneider kast
        </SelectItem>
        <SelectItem key='schneider-electric'>Schneider Electric</SelectItem>
        <SelectItem key='abb'>ABB</SelectItem>
      </Select>
      <Select
        selectionMode='single'
        label='laadpunt met ingebouwde DC-lekbeveiliging'
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
        defaultSelectedKeys={['rdc-dd-yes']}
      >
        <SelectItem key='rdc-dd-yes' value='YES'>
          JA
        </SelectItem>
        <SelectItem key='rdc-dd-no' value='NO'>
          NEE
        </SelectItem>
      </Select>
    </div>
  )
}

export { QuestionnaireStepFuseBox1Phase }
