import { MakeAppointmentButton } from './MakeAppointmentButton'
import { Carousel, CarouselItem } from './Carousel'
import {
  ServiceBeyondOrdinary,
  ServicePersonal,
  ServiceProfessional
} from './services/'

const Services = () => (
  <div className='z-[8] -mt-24 flex w-full flex-col items-center justify-start bg-theme-dark-blue pb-8 @5xl:-mt-48 @5xl:pt-40'>
    <h2 className='my-6 w-[340px] text-center text-4xl font-bold text-white @3xl:w-auto @5xl:mb-14 @5xl:w-full @5xl:pl-12 @5xl:text-left @5xl:text-6xl'>
      Waarom <i>laadpaal.tech</i>?
    </h2>
    <Carousel>
      <CarouselItem>
        <ServicePersonal />
      </CarouselItem>
      <CarouselItem>
        <ServiceProfessional />
      </CarouselItem>
      <CarouselItem>
        <ServiceBeyondOrdinary />
      </CarouselItem>
    </Carousel>
    <div className='mt-8'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </div>
)

export { Services }
