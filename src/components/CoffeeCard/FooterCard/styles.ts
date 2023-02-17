import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .priceContainer {
    display: flex;
    align-items: flex-end;
    font-size: 0.875rem;

    .priceValue {
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 0.2rem;
      margin-bottom: -0.2rem;
    }
  }

  .cartBtnsContainer {
    display: flex;
  }
`
