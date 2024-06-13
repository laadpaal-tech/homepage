import { ChangeEvent, useState } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { configurationOptionsNL, defaultConfiguration } from './configuration'
import type { Configuration } from './configuration'

const QuestionnaireStep = ({ onChange, options }) => {
  return (
    <>
      <h3 className='text-2xl @5xl:text-4xl'>
        Wat is jouw huidige aansluiting?
      </h3>
      <Select
        selectionMode='single'
        label='huidige aansluiting'
        name='connection'
        className='max-w-xs '
        classNames={{ value: 'text-xl', trigger: 'min-h-16 text-xl' }}
        disallowEmptySelection
        onChange={onChange}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>{option.value}</SelectItem>
        ))}
      </Select>
    </>
  )
}

const Price = () => {
  const [configuration, setConfiguration] =
    useState<Configuration>(defaultConfiguration)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(configuration)
    const configOptionName = e.target.name
    const configOptionValue = e.target.value
    setConfiguration((prev) => {
      return {
        ...prev,
        [configOptionName]: configOptionValue
      }
    })
  }

  return (
    <div className='flex h-[400px] w-full flex-col items-start justify-start gap-4 p-6 text-black'>
      <h2 className='w-[340px] text-center text-4xl font-bold @3xl:w-auto @5xl:mb-14  @5xl:text-6xl'>
        Wat kost een laadpaal?
      </h2>
      <QuestionnaireStep
        options={configurationOptionsNL.connection}
        onChange={onChange}
      />
    </div>
  )
}

export { Price }
