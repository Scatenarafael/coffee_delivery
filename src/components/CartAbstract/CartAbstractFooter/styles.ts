import styled from 'styled-components'

export const CartAbstractFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;
  height: 12rem;

  .footer_line_container {
    height: 5.75rem;
    display: flex;
    flex-direction: column;
    margin: 0;

    .footer_line {
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      p {
        font-size: 0.875rem !important;
      }
    }
    .footer_last_line {
      display: flex;
      justify-content: space-between;
      height: 100%;
      p {
        font-size: 1.25rem !important;
        font-weight: bold;
      }
    }
  }

  .confirmation_btn {
    width: 100%;
    background-color: ${(props) => props.theme['btn-default-color']};
    font-size: 0.875rem;
    height: 2.875rem;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    margin: 0;
    color: ${(props) => props.theme.white};

    &:hover {
      background-color: ${(props) => props.theme['btn-hover-color']};
    }
  }
`
