// import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { AboutMe } from '~/components/AboutMe'
import { MakeAppointmentButton } from '~/components/MakeAppointmentButton'
// import { PageViews } from '@piwikpro/react-piwik-pro'

const About = () => {
  // useEffect(() => {
  //   PageViews.trackPageView('About')
  // }, [])
  return (
    <>
      <Helmet>
        <title>laadpaal.tech - Over mij</title>
      </Helmet>
      <AboutMe />
      <div className='mt-6 flex w-full items-center justify-center'>
        <MakeAppointmentButton variant='yellow' sourceId='About' />
      </div>
    </>
  )
}

export { About }
