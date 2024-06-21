import { render, screen } from '@testing-library/react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from '~/routes/App'
import { ErrorPage } from '~/ErrorPage'

import '~/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
])

describe('App', () => {
  it('has proper styling', async () => {
    const { container } = render(<RouterProvider router={router} />)
    expect(container).toMatchSnapshot()
  })

  it('displays welcome text', () => {
    render(<RouterProvider router={router} />)
    expect(screen.getAllByText(/^laadpaal.tech/i).length).toBeGreaterThan(0)
  })
})
