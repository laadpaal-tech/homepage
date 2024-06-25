// import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { StepByStep } from '~/components/StepByStep'
// import { PageViews } from '@piwikpro/react-piwik-pro'

const DIY = () => {
  // useEffect(() => {
  //   PageViews.trackPageView('StepByStep')
  // }, [])
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>laadpaal.tech - Stap-voor-Stap</title>
        <meta
          name='description'
          content='Laadpaal installatie en advies - stap-voor-stap installatie.'
        />
      </Helmet>
      <StepByStep />
    </>
  )
}

export { DIY }
