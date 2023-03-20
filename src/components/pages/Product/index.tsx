import { Col, Divider, Row } from "antd"
import { useContext } from "react"
import { ProductContext } from "store/context/ProductContext"

export const Product: React.FC = () => {
  const { product } = useContext(ProductContext)

  console.log(product)
  return (
    <Row>
      <Row gutter={6} align="middle">
        <Col span={24}>
          <div style={{ justifyContent: "center", padding: 50 }}>
            <img
              src={product?.image}
              alt={product?.title}
              style={{ width: "40%", height: "20%" }}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={3}>
        <Col span={24}>
          <Divider type="vertical" style={{ height: "100%", backgroundColor: "#bbbbbb" }} />
        </Col>
      </Row>

      <Row gutter={6}>
        <Row gutter={1} justify={"center"}>
          <Col span={24} offset={12}>
            <h1>{product?.title}</h1>
          </Col>
        </Row>

        <Row gutter={6} wrap>
          <Col span={24} offset={12}>
            <p>{product?.description}</p>
          </Col>
        </Row>
      </Row>
    </Row>
  )
}
