import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 100vh;
  margin: 1rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['background-main']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
