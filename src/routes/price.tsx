// import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { HowMuchDoesItCostDetails } from '~/components/HowMuchDoesItCostDetails'
// import { PageViews } from '@piwikpro/react-piwik-pro'

const Price = () => {
  // useEffect(() => {
  //   PageViews.trackPageView('Price')
  // }, [])
  return (
    <>
      <Helmet>
        <title>laadpaal.tech - Kosten</title>
        <meta
          name='description'
          content='Laadpaal installatie en advies - installatiekosten'
        ></meta>
      </Helmet>
      <HowMuchDoesItCostDetails />
    </>
  )
}

export { Price }
