import styled from 'styled-components'

export const HomeIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
  padding: 0;
  .left_container {
    width: 57%;
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 1.3;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
      line-height: 1.3;
    }

    .grid_component {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin: 2rem 2rem 2rem 0;

      div {
        display: flex;
        align-items: center;

        img {
          margin-right: 0.5rem;
        }

        p {
          font-size: 1rem !important;
        }
      }
    }
  }
  .right_image {
    width: 22.5rem;
  }
`

export const HomeSubtitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
`
