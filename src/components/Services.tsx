import { MakeAppointmentButton } from './MakeAppointmentButton'
import { Carousel, CarouselItem } from './Carousel'

// // The following triggers an error when building on macOS:
// error during build:
// RollupError: src/components/Services.tsx (6:2): "ServicePersonal" is not exported by "src/components/Services.tsx", imported by "src/components/Services.tsx".
// file: /Users/mczenko/code/open-source/laadpaal-tech/homepage/src/components/Services.tsx:6:2
// 4:   // ServiceBeyondOrdinary,
// 5:   ServiceExperiment,
// 6:   ServicePersonal,
//      ^
// 7:   ServiceProfessional
// 8: } from './services/'
//     at getRollupError (file:///Users/mczenko/code/open-source/laadpaal-tech/homepage/node_modules/rollup/dist/es/shared/parseAst.js:394:41)
// Works find on github action (ubuntu).
// WORKAROUND:
// changing the import path from: './services' to '~/components/services/' fixes the issue.
import {
  AlwaysNearby,
  ServiceBeyondOrdinary,
  ServiceExperiment,
  ServicePersonal,
  ServiceProfessional
} from '~/components/services/'

// import { ServicePersonal } from './services/ServicePersonal'
// import { ServiceExperiment } from './services/ServiceExperiment'
// import { ServiceProfessional } from './services/ServiceProfessional'

const Services = () => (
  <div className='z-[8] -mt-24 flex w-full flex-col items-center justify-start bg-theme-dark-blue pb-8 @5xl:-mt-48 @5xl:pt-40'>
    {/* <div className='z-[8] flex w-full flex-col items-center justify-start bg-theme-dark-blue pb-8'> */}
    <div className='flex w-full max-w-5xl flex-col items-center justify-start'>
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
          <AlwaysNearby />
        </CarouselItem>
        <CarouselItem>
          <ServiceBeyondOrdinary />
        </CarouselItem>
        <CarouselItem>
          <ServiceExperiment />
        </CarouselItem>
      </Carousel>
      <div className='mt-8'>
        <MakeAppointmentButton variant='yellow' />
      </div>
    </div>
  </div>
)

export { Services }
