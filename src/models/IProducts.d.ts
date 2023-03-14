interface IProductsContext {
  loadAllProducts: () => void
  products: any[]
  isLoading: boolean
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

export { IProductsContext, IProducts }
