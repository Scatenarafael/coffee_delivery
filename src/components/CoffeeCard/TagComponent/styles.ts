import styled from 'styled-components'

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  div {
    background-color: ${(props) => props.theme['cart-color-btn']};
    color: ${(props) => props.theme['btn-hover-color']};
    text-align: center;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.825rem;
    margin: 0 0.2rem;
  }
`
