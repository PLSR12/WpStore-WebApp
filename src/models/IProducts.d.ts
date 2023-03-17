interface IProductsContext {
  products: IProducts[]
  isLoading: boolean
}

interface IProductContext {
  product?: IProducts
  isLoading?: boolean
}

interface IProducts {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export { IProductsContext, IProducts, IProductContext }
