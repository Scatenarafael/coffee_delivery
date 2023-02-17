import styled from 'styled-components'

export const OrderConfirmationAbstractContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 16.875rem;
  width: 27.125rem;
  padding: 2rem;
  margin: 2rem 0 0 3.5rem;
  /* border-image: linear-gradient(#dbac2c, #8047f8) 30;
  border-width: 2px;
  border-style: solid;
  border-radius: 6px 36px; */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px 60px;
    padding: 3px;
    background: linear-gradient(90deg, #dbac2c, #8047f8);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  div {
    &:first-child {
      position: absolute;
      top: 30px;
      left: 80px;
      height: 1.3rem;
      width: 320px;
      img {
        position: absolute;
        top: -225px;
        left: -200px;
        width: 2rem;
      }
      p {
        position: absolute;
        top: 0;
        span {
          font-weight: bold;
        }
      }
    }

    &:last-child {
      position: absolute;
      top: 180px;
      left: 80px;
      height: 1.3rem;
      width: 320px;
      img {
        position: absolute;
        top: -225px;
        left: -200px;
        width: 2rem;
      }
      p {
        position: absolute;
        top: 0;
      }
      span {
        font-weight: bold;
      }
    }
  }
  .delivery_confirmation {
    position: absolute;
    top: 110px;
    left: 80px;
    height: 1.3rem;
    width: 320px;
    img {
      position: absolute;
      top: -225px;
      left: -198px;
      width: 2rem;
    }
    p {
      position: absolute;
      top: 0;
    }
    span {
      font-weight: bold;
    }
  }
`
