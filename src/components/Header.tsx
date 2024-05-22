import Logo from '~/assets/logo-white.svg?react'
import MenuIcon from '~/assets/menu-icon.svg?react'
import CalendarIcon from '~/assets/calendar-icon.svg?react'
// import Arrow from '~/assets/arrow-1.svg?react'
import ReadMoreIcon from '~/assets/read-more-icon.svg?react'

const MenuButton = () => (
  <div className='absolute left-0 top-0 bg-slate-100'>
    <button className='m-0 block p-0' onClick={() => console.log('hello')}>
      <MenuIcon width='52px' height='52px' />
    </button>
  </div>
)

const MakeAppointmentButton = () => (
  <button className='bg-theme-yellow @[400px]:rounded-[38px] flex items-center rounded-[28px] px-4 py-3'>
    <div className='@[400px]:w-[52px] w-[40px]'>
      <CalendarIcon width='100%' />
    </div>
    <span className='@[400px]:text-[22px] ml-3 inline-block text-[18px] font-bold'>
      Maak een afspraak
    </span>
  </button>
)

const ReadMoreButton = () => (
  <button className='mt-6 flex flex-col items-center font-roboto-mono text-xl text-white opacity-60'>
    <div>LEES MEER</div>
    <ReadMoreIcon width={132} />
  </button>
)

const Header = () => (
  <div className='@container relative flex h-screen w-full flex-col items-center justify-start bg-[url("/img/background-mobile.jpg")] bg-cover bg-no-repeat'>
    <MenuButton />
    <div className='mt-16'>
      <Logo width='120px' />
    </div>
    <div className='flex w-full items-center justify-center'>
      <div className='flex flex-col'>
        <h1 className='@[400px]:text-5xl my-6 font-roboto-mono text-4xl font-bold text-white'>
          laadpaal.tech
        </h1>
        <h2 className='@[400px]:text-3xl text-2xl text-white'>
          uw eigen laadpaal thuis
        </h2>
        <h2 className='@[400px]:text-3xl text-theme-yellow my-2 text-2xl'>
          advies en installatie
        </h2>
      </div>
    </div>
    {/* <div className='@[400px]:w-[100px] @[400px]:my-0 -mb-8 -mt-10 w-[80px]'>
      <Arrow width='100%' />
    </div> */}
    <div className='@[400px]:h-24 h-8' />
    <MakeAppointmentButton />
    <div className='@[400px]:h-12 h-8' />
    <ReadMoreButton />
  </div>
)

export { Header }
