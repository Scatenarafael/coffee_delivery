import styled from 'styled-components'

export const BodyContainer = styled.div`
  text-align: center;
  line-height: 1.3;
  .title_card {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
  }
  .description_card {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    margin: 0.5rem 0;
  }
`
