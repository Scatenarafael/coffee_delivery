import styled from 'styled-components'

interface IBtnContainerProps {
  entity: 'card' | 'abstract'
}

export const BtnContainer = styled.div<IBtnContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => {
    return props.entity === 'card' ? '3rem' : '2.5rem'
  }};
  width: ${(props) => {
    return props.entity === 'card' ? '5rem' : '4.5rem'
  }};
  margin: 0 0.5rem 0 0;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  div {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    height: 100%;
    width: 40%;
    color: ${(props) => props.theme['card-btn-insert-hover-color']};
    background: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
      border-radius: 6px;
    }
  }
`
