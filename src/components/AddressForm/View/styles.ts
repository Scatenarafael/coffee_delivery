import styled from 'styled-components'

export const AddressFormInputsContainer = styled.div`
  margin: 2.5rem 2.5rem 2rem 4.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 7rem 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    'CEP . .'
    'STREET STREET STREET'
    'NUMBER COMPLEMENT COMPLEMENT'
    'DISTRICT CITY STATE';
  gap: 0.5rem;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 2px solid ${(props) => props.theme['base-button']};
  /* font-weight: bold; */
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-text']};
  border-radius: 8px;

  &:focus {
    border: 2px solid ${(props) => props.theme['btn-default-color']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CEPInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: CEP;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const StreetInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: STREET;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const NInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: NUMBER;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const ComplementInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: COMPLEMENT;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const DistrictInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: DISTRICT;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const CityInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: CITY;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const StateInput = styled(BaseInput)`
  /* flex: 1; */
  grid-area: STATE;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
