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
      <Helmet>
        <title>laadpaal.tech - Stap-voor-Stap</title>
      </Helmet>
      <StepByStep />
    </>
  )
}

export { DIY }
