import styled from 'styled-components'
import { Colors, MAIN_FONT } from '@cig-platform/ui'

export const StyledContainer = styled.div`
  margin-top: 40px;

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
