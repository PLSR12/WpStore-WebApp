import * as Pages from "components/pages"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom"
import { ProductProvider } from "store/context/ProductContext"
import { ProductsProvider } from "store/context/ProductsContext"
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
        path="/product"
        element={<Outlet />}
        handle={{
          crumb: () => "Produto",
        }}
      >
        <Route
          path=":id"
          element={<ProductProvider />}
          handle={{
            crumb: () => "",
          }}
        />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)
