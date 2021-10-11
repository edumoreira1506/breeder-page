import styled from 'styled-components'
import { Colors, MAIN_FONT } from '@cig-platform/ui'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const StyledImageContainer = styled.div`
  width: 100px;
`

export const StyledName = styled.p`
  font-size: 1.5em;
  font-family: ${MAIN_FONT};
  color: ${Colors.DarkGrey};
  margin: 10px 0;
  font-weight: bold;
`

export const StyledDescription = styled.p`
  text-align: left;
  font-family: ${MAIN_FONT};
  font-size: 0.8em;
  font-style: italic;
  font-weight: lighter;
  color: ${Colors.DarkGrey};
  border-left: solid 10px ${Colors.DarkGrey};
  padding-left: 10px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`
