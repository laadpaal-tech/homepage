import Logo from '~/assets/logo-white.svg?react'
import MenuIcon from '~/assets/menu-icon.svg?react'
import Arrow from '~/assets/arrow-2.svg?react'
import ReadMoreIcon from '~/assets/read-more-icon.svg?react'

import { MakeAppointmentButton } from './MakeAppointmentButton'

const MenuButton = () => (
  <div className='absolute left-0 top-0 bg-slate-100'>
    <button className='m-0 block p-0' onClick={() => console.log('hello')}>
      <MenuIcon width='52px' height='52px' />
    </button>
  </div>
)

const ReadMoreButton = () => (
  <button className='flex flex-col items-center font-roboto-mono text-xl text-white opacity-60'>
    <div>LEES MEER</div>
    <ReadMoreIcon width={132} />
  </button>
)

const Header = () => (
  <div className='z-10 flex w-full flex-col items-center justify-start'>
    {/* <div className='@md:bg-[url("/img/background-desktop.jpg")] @lg:bg-[url("/img/background-desktop-lg.jpg")] @3xl:bg-[url("/img/background-desktop-xl.jpg")] @lg:min-h-[800px] relative flex min-h-screen w-full max-w-5xl flex-col items-center justify-start bg-[url("/img/background-mobile.jpg")] bg-cover bg-no-repeat'> */}
    <MenuButton />
    <div className='mt-16 @3xl:hidden'>
      <Logo width='120px' />
    </div>
    <div className='flex w-full items-center justify-center @3xl:items-start @3xl:justify-start'>
      <div className='mr-4 hidden @3xl:ml-16 @3xl:mt-[180px] @3xl:block'>
        <Logo width='110px' />
      </div>
      <div className='flex flex-col @3xl:mt-[180px]'>
        <h1 className='my-6 font-roboto-mono text-4xl font-bold text-white @sm:text-5xl @3xl:mt-0 @3xl:text-7xl'>
          laadpaal.tech
        </h1>
        <h2 className='text-2xl text-white @sm:text-3xl @3xl:text-5xl'>
          uw eigen laadpaal thuis
        </h2>
        <h2 className='my-2 text-2xl text-theme-yellow @sm:text-3xl @3xl:text-5xl'>
          advies en installatie
        </h2>
      </div>
    </div>
    <div className='h-8 @sm:h-24 @5xl:-mt-8 @5xl:mb-8 @5xl:mr-48 @5xl:h-auto @5xl:self-end'>
      <Arrow className='hidden @5xl:block' width='160px' />
    </div>
    <div className='@5xl:mr-16 @5xl:self-end'>
      <MakeAppointmentButton variant='yellow' />
    </div>
    <div className='h-16 @5xl:h-0' />
    <div className='mb-8'>
      <ReadMoreButton />
    </div>
  </div>
)

export { Header }