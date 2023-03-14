import * as Pages from "components/pages"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { ProductsProvider } from "store/context"
import { LayoutApp } from "Templates/Layout"

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route
        path="/"
        element={<Pages.Home />}
        handle={{
          crumb: () => "Home",
        }}
      />
      <Route
        path="/products"
        element={<ProductsProvider />}
        handle={{
          crumb: () => "Produtos",
        }}
      />

      <Route
        path="/productse"
        element={<Pages.Product />}
        handle={{
          crumb: () => "Produto",
        }}
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)
