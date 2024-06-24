import { AboutMe } from '~/components/AboutMe'
import { MakeAppointmentButton } from '~/components/MakeAppointmentButton'

const About = () => (
  <>
    <AboutMe />
    <div className='mt-6 flex w-full items-center justify-center'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </>
)

export { About }
