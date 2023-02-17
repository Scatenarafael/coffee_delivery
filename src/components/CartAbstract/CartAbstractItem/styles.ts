import styled from 'styled-components'

export const CartAbstractItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  margin: 0.7rem 0;
  img {
    width: 4rem;
  }
  ._pricexquantity {
    text-align: end;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .cart_item_details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin-left: 0.5rem;

    .cart_item_header {
      display: flex;
      justify-content: space-between;
    }

    .cart_item_btns {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;
      margin-top: -30px;
    }
  }
`
