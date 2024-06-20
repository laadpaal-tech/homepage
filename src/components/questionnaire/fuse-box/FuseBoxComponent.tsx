import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { Select, SelectItem } from '@nextui-org/react'

import { boxConfigItem } from './BoxConfig'
import type {
  FuseBoxItemName,
  FuseBoxOption,
  FuseBoxConfigItem
} from './BoxConfig'

type FuseBoxComponentProps = {
  name: FuseBoxItemName
  label: string
  extraLabel?: string
  options: FuseBoxOption[]
  extraOptions?: FuseBoxOption[]
  resetOnReload?: boolean
}

const FuseBoxComponent = ({
  name,
  label,
  extraLabel,
  options,
  extraOptions,
  resetOnReload = true
}: FuseBoxComponentProps) => {
  const [config, setConfig] = useRecoilState(boxConfigItem(name))
  const resetConfig = useResetRecoilState(boxConfigItem(name))
  const [showExtraOptions, setShowExtraOptions] = useState(false)

  const optionChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    console.log('optionChanged:', value)
    const configObject: FuseBoxConfigItem = {
      ...config,
      value
    }
    setConfig((prev) => ({
      ...prev,
      ...configObject
    }))
  }

  const extraOptionChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    const extraValue = e.target.value
    console.log('extraOptionChanged:', extraValue)
    const configObject: FuseBoxConfigItem = {
      ...config,
      extraValue
    }
    setConfig((prev) => ({
      ...prev,
      ...configObject
    }))
  }

  useEffect(() => {
    console.log('config[solar]=', config)
  }, [config])

  useEffect(() => {
    if (resetOnReload) {
      resetConfig()
    }
  }, [resetOnReload, resetConfig])

  useEffect(() => {
    if (extraOptions && config.value === options[0].value) {
      setShowExtraOptions(true)
    } else {
      setShowExtraOptions(false)
    }
  }, [options, extraOptions, config, name])

  return (
    <div
      className={`flex w-full flex-col gap-2 ${showExtraOptions ? 'border-r-8 border-r-theme-dark-blue' : ''}`}
    >
      <Select
        selectionMode='single'
        label={label}
        className='max-w-xs'
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={optionChanged}
        selectedKeys={[config.value]}
      >
        {options.map((option) => (
          <SelectItem key={option.value}>{option.label}</SelectItem>
        ))}
      </Select>
      {showExtraOptions && extraOptions && (
        <Select
          selectionMode='single'
          label={extraLabel}
          className='max-w-xs animate-fadeIn'
          classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
          disallowEmptySelection
          onChange={extraOptionChanged}
          selectedKeys={config.extraValue ? [config.extraValue] : undefined}
        >
          {extraOptions.map((option) => (
            <SelectItem key={option.value}>{option.label}</SelectItem>
          ))}
        </Select>
      )}
    </div>
  )
}

export { FuseBoxComponent }
