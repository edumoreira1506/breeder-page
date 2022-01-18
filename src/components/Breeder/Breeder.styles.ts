import { Colors, DEFAULT_BORDER_RADIUS } from '@cig-platform/ui'
import styled from 'styled-components'

export const StyledContainer = styled.main`
  width: 100%;
  padding-top: 0.5em;
`

export const StyledItems = styled.ul`
  position: fixed;
  top: 15px;
  right: 85px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const StyledItem = styled.li`
  width: 35px;
  height: 35px;
  background-color: ${Colors.DarkBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  color: ${Colors.White};
  cursor: pointer;
  margin-bottom: 5px;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
  }
`
