import styled from 'styled-components'

export const OrderConfirmationPageContainer = styled.div`
  margin: 5rem 15rem 27.25rem 0rem;
  height: 40rem;
  width: 100%;
  display: flex;

  .left_side_container {
    .page_title {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
      color: ${(props) => props.theme['btn-hover-color']};
    }

    .page_subtitle {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
  img {
    margin: 6rem 1rem 0 10rem;
    width: 30.75rem;
    height: 18.3125rem;
  }
`
