import { RecoilRoot } from 'recoil'
import { NextUIProvider } from '@nextui-org/react'
import { Layout } from '~/components/Layout'
import { Chat } from '../components/Chat'
import { NavigationBar } from '../components/navigation/NavigationBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '~/components/Footer'

const Root = () => {
  const navigate = useNavigate()

  return (
    <RecoilRoot>
      <NextUIProvider navigate={navigate}>
        <Chat />
        <NavigationBar />
        <Layout>
          <Outlet />
          <Footer />
        </Layout>
      </NextUIProvider>
    </RecoilRoot>
  )
}

export { Root }
