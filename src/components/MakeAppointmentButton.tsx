import CalendarIcon from '~/assets/calendar-icon.svg?react'
import CalendarIcon2 from '~/assets/calendar-yellow.svg?react'

const MakeAppointmentButton = (
  { variant }: { variant: 'yellow' | 'black' } = { variant: 'yellow' }
) => (
  <a
    href='https://cal.com/laadpaal.tech'
    rel='noreferrer'
    className={`${variant === 'yellow' ? 'bg-theme-yellow' : 'bg-black'} flex items-center rounded-[28px] px-4 py-3 @sm:rounded-[38px]`}
  >
    <div className='w-[40px] @sm:w-[52px]'>
      {variant === 'yellow' ? (
        <CalendarIcon width='100%' />
      ) : (
        <CalendarIcon2 width='100%' />
      )}
    </div>
    <span
      className={`ml-3 inline-block text-[18px] font-bold @sm:text-[22px] ${variant === 'black' ? 'text-theme-yellow' : 'text-black'}`}
    >
      Maak een afspraak
    </span>
  </a>
)

export { MakeAppointmentButton }
