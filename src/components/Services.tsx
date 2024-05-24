import { MakeAppointmentButton } from './MakeAppointmentButton'
import { Carousel, CarouselItem } from './Carousel'

const Services = () => (
  <div className='z-10 flex h-[500px] w-full flex-col items-center justify-start bg-theme-dark-blue pb-8'>
    <h2 className='mt-6 w-[340px] text-center text-4xl font-bold text-white @3xl:w-auto'>
      Waarom laadpaal.tech?
    </h2>
    <Carousel>
      <CarouselItem>
        <div className='flex h-full w-full items-center justify-center bg-lime-700'>
          Item 1
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='flex h-full w-full items-center justify-center bg-slate-500'>
          Item 2
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='flex h-full w-full items-center justify-center bg-orange-600'>
          Item 3
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='flex h-full w-full items-center justify-center bg-cyan-900'>
          Item 4
        </div>
      </CarouselItem>
    </Carousel>
    <div className='mt-8'>
      <MakeAppointmentButton variant='yellow' />
    </div>
  </div>
)

export { Services }
