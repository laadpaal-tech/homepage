import { useRouteError } from 'react-router-dom'

type Error = {
  statusText: string
  message: string
}

const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <div
      id='error-page'
      className='flex h-screen w-screen flex-col items-center justify-center'
    >
      <h1 className='text-5xl font-bold'>Oops!</h1>
      <p className='my-10 text-lg'>Sorry, an unexpected error has occurred.</p>
      <p className=''>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export { ErrorPage }
