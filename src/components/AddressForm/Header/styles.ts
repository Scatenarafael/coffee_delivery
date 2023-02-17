import styled from 'styled-components'

export const AddressFormTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif !important;
  font-size: 1.125rem;
  margin: 3rem 0 2rem 0;
`

export const AddressFormHeader = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['btn-default-color']};
  margin: 2.5rem 2.5rem 2rem 4.375rem;
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
