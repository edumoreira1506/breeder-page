import styled from 'styled-components'
import { Colors, createMinWidthMediaQuery, DEFAULT_BORDER_RADIUS } from '@cig-platform/ui'

export const StyledContainer = styled.div`
  height: 150px;
  background-color: ${Colors.Black};
  padding: 10px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  width: 85%;
  margin: 0 auto;

  ${createMinWidthMediaQuery(`
    width: 600px;
    height: 400px;
    margin: 0 auto;
  `)}

  & > div {
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    border-radius: ${DEFAULT_BORDER_RADIUS};
  }
`
