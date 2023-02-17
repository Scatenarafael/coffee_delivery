import styled from 'styled-components'

const BaseDisplay = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderContainer = styled(BaseDisplay)`
  justify-content: space-between;
`
export const HeaderCartBadgeTagContainer = styled(BaseDisplay)``

export const HeaderBadge = styled(BaseDisplay)`
  min-height: 2.5rem;
  margin: 0.3rem 1rem;
  padding: 0 0.8rem;
  border-radius: 8px;
  background: ${(props) => props.theme['payment-selected-btn-color']};
  color: ${(props) => props.theme['card-btn-insert-hover-color']};

  p {
    font-size: 0.875rem;
    font-weight: bold;
    margin: 0 0 0 0.5rem;
  }
`

export const CartBtn = styled.button`
  border: none;
  max-height: 2.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  background: ${(props) => props.theme['cart-color-btn']};
  color: ${(props) => props.theme['btn-default-color']};
  cursor: pointer;

  ._number_of_items_in_cart {
    position: relative;
    top: -38px;
    left: 20px;
    width: 25px;
    height: 25px;
    font-size: 1rem;
    font-weight: bold;
    background-color: ${(props) => props.theme['btn-default-color']};
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
