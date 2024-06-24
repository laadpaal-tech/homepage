import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Root } from '~/routes/root'
import { Index } from '~/routes/index'
import { ErrorPage } from './ErrorPage'

import '~/index.css'
import { Price } from './routes/price'
import { About } from './routes/about'
import { DIY } from './routes/diy'
import { Partner } from './routes/partner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: '/price', element: <Price /> },
      { path: '/about', element: <About /> },
      { path: '/step-by-step', element: <DIY /> },
      { path: '/partner', element: <Partner /> }
    ]
  }
])

const rootEl = document.getElementById('root')

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
