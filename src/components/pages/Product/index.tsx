import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Col, message, Rate, Row } from "antd"
import { maskCurrency } from "common/utils/maskCurrency"
import { useContext } from "react"
import { ProductContext } from "store/context/ProductContext"
import * as S from "./styles"

export const Product: React.FC = () => {
  const { product } = useContext(ProductContext)
  const rateProduct = product?.rating?.rate ?? 0

  const addToCart = () => {
    message.success("Adicionado ao Carrinho")
  }

  console.log(product)
  return (
    <S.Container>
      <Row gutter={16} justify={"center"}>
        <Col span={8}>
          <img className="product-image" src={product?.image} alt={product?.title} />
        </Col>
      </Row>

      <Row gutter={16} justify={"center"}>
        <Col span={24}>
          <h1>{product?.title}</h1>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 5 }}>
        <Col span={24}>
          <Rate disabled value={Math.round(rateProduct)} /> ({product?.rating?.count})
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <p>{product?.description}</p>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <h2>{maskCurrency(product?.price)}</h2>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Button
            type={"primary"}
            size={"large"}
            icon={<ShoppingCartOutlined />}
            onClick={() => addToCart()}
          >
            Comprar{" "}
          </Button>
        </Col>
      </Row>
    </S.Container>
  )
}
