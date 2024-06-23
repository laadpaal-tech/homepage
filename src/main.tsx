import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Root } from '~/routes/root'
import { Index } from '~/routes/index'
import { ErrorPage } from './ErrorPage'

import '~/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Index /> }]
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
