import styled from 'styled-components'

export const PaymentTypeBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto;
  width: 95%;
  padding: 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11.17rem;
    height: 3.19rem;
    color: ${(props) => props.theme['card-btn-insert-color']};
    background-color: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 8px;
    font-size: 0.75rem;
    margin: 0;
    margin-left: -1rem;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    &.active {
      background-color: ${(props) => props.theme['payment-selected-btn-color']};
      border: 2px solid ${(props) => props.theme['payment-selected-btn-color']};
      box-shadow: 0 0 0 1px
        ${(props) => props.theme['card-btn-insert-hover-color']};
    }

    span {
      margin-left: 0.3rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
