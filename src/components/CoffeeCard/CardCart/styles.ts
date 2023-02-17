import styled from 'styled-components'

export const CardCartContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${(props) => props.theme['card-btn-insert-color']};
  color: ${(props) => props.theme.white};
  border: none;
  width: 2.5rem;
  border-radius: 8px;
  cursor: pointer;
`
