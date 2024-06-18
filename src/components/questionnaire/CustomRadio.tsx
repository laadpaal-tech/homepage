import {
  useRadio,
  VisuallyHidden,
  RadioProps,
  cn,
  Chip
} from '@nextui-org/react'
import { ReactNode, useEffect, useState } from 'react'

interface CustomRadioProps extends RadioProps {
  additionalConfiguration?: ReactNode
  price?: number
  priceMonthly?: number
}

const CustomRadio = ({
  additionalConfiguration,
  price,
  priceMonthly,
  ...props
}: CustomRadioProps) => {
  const [showPrices, setShowPrices] = useState(false)
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps
  } = useRadio(props)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowPrices(true)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  })

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group relative inline-flex flex-col items-center justify-start hover:bg-theme-very-light-yellow',
        'w-full cursor-pointer gap-4 rounded-lg border-2 border-default p-4',
        'data-[selected=true]:border-primary'
      )}
    >
      {showPrices && (
        <div className='absolute right-1 top-1 flex animate-appearance-in flex-col items-end gap-1'>
          {price && (
            <Chip color='primary'>€{price.toString().replace('.', ',')}</Chip>
          )}
          {priceMonthly && (
            <Chip color='warning'>
              €{priceMonthly.toString().replace('.', ',')}
            </Chip>
          )}
        </div>
      )}
      <div
        className={cn(
          'group inline-flex flex-row items-center justify-start hover:bg-theme-very-light-yellow',
          `w-full cursor-pointer gap-4 ${additionalConfiguration ? 'border-b-2 border-default' : ''} p-4`,
          'data-[selected=true]:border-primary'
        )}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
          {description && (
            <span className='text-small text-foreground'>{description}</span>
          )}
        </div>
      </div>
      {additionalConfiguration}
    </Component>
  )
}

export { CustomRadio }
