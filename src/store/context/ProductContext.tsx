import { Product } from "components/pages"
import { IProductContext, IProducts } from "models/IProducts"
import { createContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsService } from "store/services"

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductProvider = () => {
  const [product, setProduct] = useState<IProducts | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { id } = useParams<{ id: string }>()

  const loadOneProduct = async () => {
    const splitedId = id?.split(":")[1]

    setIsLoading(true)
    try {
      const oneProduct: any = await ProductsService.getById(splitedId)
      setProduct(oneProduct)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadOneProduct()
  }, [id])

  return (
    <>
      <ProductContext.Provider
        value={{
          product,
          isLoading,
        }}
      >
        <Product />
      </ProductContext.Provider>
    </>
  )
}
