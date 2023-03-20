import { Card, Col, Rate, Row } from "antd"
import Meta from "antd/es/card/Meta"
import { maskCurrency } from "common/utils/maskCurrency"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "store/context/ProductsContext"

export const Products: React.FC = () => {
  const { products, isLoading } = useContext(ProductsContext)
  const navigate = useNavigate()
  console.log(products)

  return (
    <Row gutter={24} justify={"center"}>
      {products.map((product: any) => {
        return (
          <Col xs={24} sm={12} md={6}>
            <Card
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 35,
              }}
              loading={isLoading}
              hoverable
              bordered
              extra={
                <>
                  <Rate disabled value={Math.round(product.rating.rate)} />
                </>
              }
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    paddingLeft: 40,
                    maxWidth: "80%",
                    height: "230px",
                  }}
                />
              }
              onClick={() => navigate(`/product/:${product.id}`)}
            >
              <Meta
                title={product.title}
                description={<strong>{maskCurrency(product.price)}</strong>}
              />
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
