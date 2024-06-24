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
    if (import.meta.env.PROD) {
      const PiwikPro = (await import('@piwikpro/react-piwik-pro')).default
      PiwikPro.initialize('', '')
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
