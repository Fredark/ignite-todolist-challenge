import styled from 'styled-components/native'
import { Logo as Icon } from '@icons'


export const Tag = styled.View`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  flex: 1 1 auto;
  padding: 70px 24px;
`
export const Logo = styled(Icon)`
  align-self: center;
  flex: 0 0 auto;
  margin-bottom: 40px;
`