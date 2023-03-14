import { Products } from "components/pages"
import { IProducts, IProductsContext } from "models/IProducts"
import { createContext, ReactNode, useEffect, useState } from "react"
import { ProductsService } from "store/services"

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
)

interface ProductsContextProps {
  children: ReactNode
}

export const ProductsProvider = () => {
  const [products, setProducts] = useState<IProducts[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const loadAllProducts = async () => {
    setIsLoading(true)
    try {
      const allProducts: any = await ProductsService.getAll()
      setProducts(allProducts)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadAllProducts()
  }, [])

  return (
    <>
      <ProductsContext.Provider
        value={{
          loadAllProducts,
          products,
          isLoading,
        }}
      >
        <Products />
      </ProductsContext.Provider>
    </>
  )
}
