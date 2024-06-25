// import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { Header } from '~/components/Header'
import { Steps } from '~/components/Steps'
import { Services } from '../components/Services'
import { LearnMore } from '../components/LearnMore'
import { HowMuchDoesItCost } from '../components/HowMuchDoesItCost'
// import { PageViews } from '@piwikpro/react-piwik-pro'

const Index = () => {
  // useEffect(() => {
  //   PageViews.trackPageView('HomePage')
  // }, [])

  return (
    <>
      <Helmet>
        <title>laadpaal.tech</title>
        <meta
          name='description'
          content='Laadpaal installatie en advies.'
        ></meta>
      </Helmet>
      <div className='absolute -top-10 left-0 z-0 flex w-full items-center justify-center'>
        <div>
          {/* <div className='max-w-5xl'> */}
          <img
            alt='background image of a distribution box'
            className='@md:hidden'
            src='/img/background-mobile.jpg'
          />
          <img
            alt='background image of a distribution box'
            className='hidden @md:block @lg:hidden'
            src='/img/background-desktop.jpg'
          />
          <img
            alt='background image of a distribution box'
            className='hidden @lg:block @3xl:hidden'
            src='/img/background-desktop-lg.jpg'
          />
          <img
            alt='background image of a distribution box'
            className='hidden @3xl:block'
            src='/img/background-desktop-xl.jpg'
          />
        </div>
      </div>
      <div className='relative flex w-full flex-col items-center justify-center'>
        <Header />
        <Steps />
        <Services />
        <HowMuchDoesItCost />
        <LearnMore />
      </div>
    </>
  )
}

export { Index }
