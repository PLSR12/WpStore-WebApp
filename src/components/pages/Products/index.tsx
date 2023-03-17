import { Card, Col, Row } from "antd"
import Meta from "antd/es/card/Meta"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "store/context/ProductsContext"

export const Products: React.FC = () => {
  const { products } = useContext(ProductsContext)
  const navigate = useNavigate()
  console.log(products)
  return (
    <Row gutter={16} justify={"center"}>
      {products.map((product: any) => {
        return (
          <Col xs={24} sm={12} md={6}>
            <Card
              style={{ height: "min-content", marginTop: 25, marginBottom: 25 }}
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  style={{
                    width: "100%",
                    height: "45vh",
                  }}
                />
              }
              onClick={() => navigate(`/product/:${product.id}`)}
            >
              <Meta title={product.title} description={product.price} />
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
