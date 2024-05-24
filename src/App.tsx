import { Layout } from '~/components/Layout'
import { Header } from '~/components/Header'
import { Steps } from '~/components/Steps'
import { Services } from './components/Services'
import { AboutMe } from './components/AboutMe'

const App = () => {
  return (
    <Layout>
      <div className='absolute left-0 top-0 z-0 flex w-full items-center justify-center'>
        <div className='max-w-5xl'>
          <img className='@md:hidden' src='/img/background-mobile.jpg' />
          <img
            className='@md:block @lg:hidden hidden'
            src='/img/background-desktop.jpg'
          />
          <img
            className='@lg:block @3xl:hidden hidden'
            src='/img/background-desktop-lg.jpg'
          />
          <img
            className='@3xl:block hidden'
            src='/img/background-desktop-xl.jpg'
          />
        </div>
        {/* <div className='@md:bg-[url("/img/background-desktop.jpg")] @lg:bg-[url("/img/background-desktop-lg.jpg")] @3xl:bg-[url("/img/background-desktop-xl.jpg")] absolute left-0 top-0 w-full max-w-5xl bg-[url("/img/background-mobile.jpg")] bg-cover bg-no-repeat'> */}
      </div>
      <Header />
      <Steps />
      <Services />
      <AboutMe />
    </Layout>
  )
}

export default App
