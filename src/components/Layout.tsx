import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className='@container flex w-full justify-center'>
    <div className='relative flex w-full max-w-5xl flex-col items-center justify-center'>
      {children}
    </div>
  </div>
)

export { Layout }
