import { MakeAppointmentButton } from './MakeAppointmentButton'
import { Carousel } from './Carousel'

const Services = () => (
  <div className='z-10 flex h-[500px] w-full flex-col items-center justify-start bg-theme-dark-blue pb-8'>
    <h2 className='mt-6 w-[340px] text-center text-4xl font-bold text-white @3xl:w-auto'>
      Waarom laadpaal.tech?
    </h2>
    <Carousel />
    <div className='mt-8'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </div>
)

export { Services }
