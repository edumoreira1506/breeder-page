import styled from 'styled-components'
import { Colors, createMinWidthMediaQuery, MAIN_FONT } from '@cig-platform/ui'

export const StyledContainer = styled.div`
  font-family: ${MAIN_FONT};
  margin-top: 35px;

  ${createMinWidthMediaQuery(`
    max-width: 1020px;
    padding-top: 35px;
    margin: 0 auto;
  `)}
`

export const StyledTitle = styled.h4`
  margin: 0;
  font-size: 1em;
  color: ${Colors.DarkGrey};
  font-weight: lighter;
`

export const StyledMap = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 20px;
`

export const StyledAddressFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  font-size: 1.2em;
  color: ${Colors.DarkGrey}
`

export const StyledAddressFieldKey = styled.div`
  width: 40%;
  font-weight: bold;
`

export const StyledAddressFieldValue = styled.div`
  width: 60%;
`
