import styled from 'styled-components'

export const PaymentTypeHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['card-btn-insert-hover-color']};
  div {
    margin-left: 0.4rem;
    margin-bottom: -28px;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};

    p:last-child {
      margin-top: 0.4rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
