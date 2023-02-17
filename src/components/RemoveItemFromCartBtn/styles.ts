import styled from 'styled-components'

export const RemoveItemBtnContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.1rem;
  height: 2.5rem;
  width: 4.5rem;
  font-size: 0.6rem;
  border-radius: 6px;
  color: ${(props) => props.theme['card-btn-insert-hover-color']};
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;

  p {
    margin-left: 0.2rem;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
