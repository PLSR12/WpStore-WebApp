import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  width: 100%;

  div {
    border: ${(props) => props.theme.borderWidth.thick} solid ${(props) => props.theme.color.red};
  }

  h1 {
    color: ${(props) => props.theme.color.black};
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.large};
  }
`
