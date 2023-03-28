import styled from "styled-components"

export const Container = styled.div`
  .product-image {
    width: 200px;
    height: 290px;
    margin: 20px;

    @media (max-width: 400px) {
      margin-left: -30px;
      width: 250%;
      height: 310px;
    }
  }
`
