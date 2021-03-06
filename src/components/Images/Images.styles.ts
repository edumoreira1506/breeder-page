import styled from 'styled-components'
import { Colors, createMinWidthMediaQuery, MAIN_FONT } from '@cig-platform/ui'

export const StyledContainer = styled.div`
  margin-top: 40px;

  ${createMinWidthMediaQuery(`
    max-width: 1020px;
    margin: 0 auto;
    padding-top: 40px;
  `)}

  & > div {
    height: 160px;
  }
`

export const StyledTitle = styled.h4`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  color: ${Colors.DarkGrey};
  font-family: ${MAIN_FONT};
  margin-bottom: 20px;
`
