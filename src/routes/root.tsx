import { RecoilRoot } from 'recoil'
import { NextUIProvider } from '@nextui-org/react'
import { Layout } from '~/components/Layout'
import { Chat } from '../components/Chat'
import { NavigationBar } from '../components/navigation/NavigationBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Chat />
        <NavigationBar />
        <Layout>
          <Outlet />
        </Layout>
      </NextUIProvider>
    </RecoilRoot>
  )
}

export { Root }
