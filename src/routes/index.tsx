import * as Pages from 'pages'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { LayoutApp } from 'Templates/Layout'

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route
        path="/"
        element={<Pages.Home />}
        handle={{
          crumb: () => 'Home',
        }}
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)
