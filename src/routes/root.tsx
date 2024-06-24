import { RecoilRoot } from 'recoil'
import { NextUIProvider } from '@nextui-org/react'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '~/components/Layout'
import { Chat } from '../components/Chat'
import { NavigationBar } from '../components/navigation/NavigationBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '~/components/Footer'
import { useEffect } from 'react'

const Root = () => {
  const navigate = useNavigate()

  const initTracking = async () => {
    console.log('PIWIK_CONTAINER_ID=', import.meta.env.VITE_PIWIK_CONTAINER_ID)
    console.log(
      'PIWIK_CONTAINER_URL=',
      import.meta.env.VITE_PIWIK_CONTAINER_URL
    )
    if (import.meta.env.PROD) {
      console.log(
        'PIWIK_CONTAINER_ID[PROD]=',
        import.meta.env.VITE_PIWIK_CONTAINER_ID
      )
      console.log(
        'PIWIK_CONTAINER_URL[PROD]=',
        import.meta.env.VITE_PIWIK_CONTAINER_URL
      )
      const PiwikPro = (await import('@piwikpro/react-piwik-pro')).default
      PiwikPro.initialize(
        import.meta.env.VITE_PIWIK_CONTAINER_ID,
        import.meta.env.VITE_PIWIK_CONTAINER_URL
      )
    }
  }

  useEffect(() => {
    initTracking()
  }, [])

  return (
    <RecoilRoot>
      <HelmetProvider>
        <NextUIProvider navigate={navigate}>
          <Chat />
          <NavigationBar />
          <Layout>
            <Outlet />
            <Footer />
          </Layout>
        </NextUIProvider>
      </HelmetProvider>
    </RecoilRoot>
  )
}

export { Root }
