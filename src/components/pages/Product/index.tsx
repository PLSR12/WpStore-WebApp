import { useContext } from "react"
import { ProductContext } from "store/context/ProductContext"

export const Product: React.FC = () => {
  const { product } = useContext(ProductContext)

  console.log(product)
  return <div> Product</div>
}
