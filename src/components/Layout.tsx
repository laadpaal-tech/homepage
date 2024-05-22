import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className='flex w-screen justify-center'>
    <div className='flex w-full flex-col items-center justify-center'>
      {children}
    </div>
  </div>
)

export { Layout }
