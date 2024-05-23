import CalendarIcon from '~/assets/calendar-icon.svg?react'
import CalendarIcon2 from '~/assets/calendar-yellow.svg?react'

const MakeAppointmentButton = (
  { variant }: { variant: 'yellow' | 'black' } = { variant: 'yellow' }
) => (
  <button
    className={`${variant === 'yellow' ? 'bg-theme-yellow' : 'bg-black'} @sm:rounded-[38px] flex items-center rounded-[28px] px-4 py-3`}
  >
    <div className='@sm:w-[52px] w-[40px]'>
      {variant === 'yellow' ? (
        <CalendarIcon width='100%' />
      ) : (
        <CalendarIcon2 width='100%' />
      )}
    </div>
    <span
      className={`@sm:text-[22px] ml-3 inline-block text-[18px] font-bold ${variant === 'black' ? 'text-theme-yellow' : 'text-black'}`}
    >
      Maak een afspraak
    </span>
  </button>
)

export { MakeAppointmentButton }
