import { useRadio, VisuallyHidden, RadioProps, cn } from '@nextui-org/react'
import { ReactNode } from 'react'

interface CustomRadioProps extends RadioProps {
  renderExtraInfo?: (() => ReactNode) | null
}

const CustomRadio = ({ renderExtraInfo, ...props }: CustomRadioProps) => {
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

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex flex-col items-center justify-start hover:bg-theme-very-light-yellow',
        'w-full cursor-pointer gap-4 rounded-lg border-2 border-default p-4',
        'data-[selected=true]:border-primary'
      )}
    >
      <div
        className={cn(
          'group inline-flex flex-row items-center justify-start hover:bg-theme-very-light-yellow',
          `w-full cursor-pointer gap-4 ${renderExtraInfo !== null ? 'border-b-2 border-default' : ''} p-4`,
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
            <span className='text-small text-foreground opacity-70'>
              {description}
            </span>
          )}
        </div>
      </div>
      {renderExtraInfo && renderExtraInfo()}
    </Component>
  )
}

export { CustomRadio }
