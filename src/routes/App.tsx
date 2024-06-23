import { RecoilRoot } from 'recoil'
import { NextUIProvider } from '@nextui-org/react'
import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Steps } from '~/components/Steps'
import { Services } from '../components/Services'
import { AboutMe } from '../components/AboutMe'
import { Footer } from '../components/Footer'
import { MeerWeten } from '../components/MeerWeten'
import { StepByStep } from '../components/StepByStep'
// import { Price } from './components/price'
import { Chat } from '../components/Chat'
import { HowMuchDoesItCost } from '../components/HowMuchDoesItCost'
import { NavigationBar } from '../components/navigation/NavigationBar'

const App = () => {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Chat />
        <NavigationBar />
        <Layout>
          <div className='absolute -top-10 left-0 z-0 flex w-full items-center justify-center'>
            <div className=''>
              {/* <div className='max-w-5xl'> */}
              <img className='@md:hidden' src='/img/background-mobile.jpg' />
              <img
                className='hidden @md:block @lg:hidden'
                src='/img/background-desktop.jpg'
              />
              <img
                className='hidden @lg:block @3xl:hidden'
                src='/img/background-desktop-lg.jpg'
              />
              <img
                className='hidden @3xl:block'
                src='/img/background-desktop-xl.jpg'
              />
            </div>
            {/* <div className='@md:bg-[url("/img/background-desktop.jpg")] @lg:bg-[url("/img/background-desktop-lg.jpg")] @3xl:bg-[url("/img/background-desktop-xl.jpg")] absolute left-0 top-0 w-full max-w-5xl bg-[url("/img/background-mobile.jpg")] bg-cover bg-no-repeat'> */}
          </div>
          <div className='relative flex w-full flex-col items-center justify-center'>
            {/* <NavigationBar /> */}
            <Header />
            <Steps />
            <Services />
            <HowMuchDoesItCost />
            <AboutMe />
            {/* <Price /> */}
            <MeerWeten />
            <StepByStep />
            <Footer />
          </div>
        </Layout>
      </NextUIProvider>
    </RecoilRoot>
  )
}

export { App }
