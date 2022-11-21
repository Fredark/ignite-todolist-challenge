import styled from 'styled-components/native'
import { Plus as Icon } from '@icons'

export const Tag = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 32px;
`

export const TaskInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.grays.gray300
}))`
  background-color: ${(props) => props.theme.colors.grays.gray500};
  border: 1px solid ${(props) => props.isFocused ? props.theme.colors.primary.purple : 'transparent'};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.grays.gray100};
  flex: 1 1 auto;
  font-size: 16px;
  font-weight: 400;
  height: 54px;
  line-height: 22px;
  padding: 16px;
  transition: ${(props) => props.theme.transitions.level1};
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.blueDark};
  border-radius: 6px;
  flex: 0 0 auto;
  height: 52px;
  justify-content: center;
  margin-left: 4px;
  width: 52px;
`

export const AddIcon = styled(Icon).attrs(props => ({
  fill: props.theme.colors.grays.gray100,
  height: 16,
  width: 16
}))``
