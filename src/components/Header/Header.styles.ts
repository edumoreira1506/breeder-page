import styled from 'styled-components'
import { Colors, MAIN_FONT, createMinWidthMediaQuery } from '@cig-platform/ui'

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
  font-size: 1em;
  font-family: ${MAIN_FONT};
  color: ${Colors.Black};
  margin: 10px 0;
  font-weight: bold;
  text-transform: uppercase;

  ${createMinWidthMediaQuery(`
    font-size: 2em;
  `)}
`

export const StyledDescription = styled.p`
  text-align: center;
  font-family: ${MAIN_FONT};
  font-size: 0.8em;
  font-weight: 500;
  color: ${Colors.Black};
  width: 85%;

  ${createMinWidthMediaQuery(`
    width: 600px;
  `)}
`
