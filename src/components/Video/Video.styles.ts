import styled from 'styled-components'
import { createMinWidthMediaQuery } from '@cig-platform/ui'

export const StyledContainer = styled.div`
  width: 100%;
  height: 170px;

  ${createMinWidthMediaQuery(`
    width: 690px;
    height: 400px;
    margin: 0 auto;
  `)}

  & > div {
    width: 100% !important;
    height: 100% !important;
  }
`
