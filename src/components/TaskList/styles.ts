import styled, { css } from 'styled-components/native'
import { Clipboard, Check, Trash } from '@icons'

export const TagEmpty = styled.View`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${(props) => props.theme.colors.grays.gray400};
  padding: 48px 20px;
`

export const EmptyIcon = styled(Clipboard).attrs({
  height: 56,
  width: 56
})`
  align-self: center;
  margin-bottom: 16px;
`

export const EmptyTitle = styled.Text`
  color: ${(props) => props.theme.colors.grays.gray300};
  font: 700 14px/20px ${(props) => props.theme.fonts.primary.regular};
  text-align: center;
`

export const EmptyDescription = styled(EmptyTitle)`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  font-weight: 400;
`

export const TagList = styled.View`
  flex-direction: column;
`

export const Item = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.colors.grays.gray500};
  border: 1px solid ${(props) => props.isCompleted ? 'transparent' : props.theme.colors.grays.gray300 };
  border-radius: 8px;
  flex: 0 0 auto;
  flex-direction: row;
  margin-bottom: 8px;
  min-height: 64px;
  padding: 12px;
  width: 100%;
`
export const CheckboxIcon = styled(Check).attrs(props => ({
  fill: props.theme.colors.grays.gray100,
  height: 11,
  width: 11
}))`
  opacity: ${(props) => props.isCompleted ? 1 : 0};
`

export const Checkbox = styled.TouchableOpacity`
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
  height: 24px;
  justify-content: center;
  width: 24px;
`

export const CheckboxEnv = styled.View`
  align-items: center;
  background-color: ${(props) => props.isCompleted ? props.theme.colors.primary.purple : 'transparent'};
  border: 2px solid ${(props) => props.isCompleted ? props.theme.colors.primary.purple : props.theme.colors.primary.blue};
  border-radius: 9px;
  flex: 0 0 auto;
  height: 18px;
  justify-content: center;
  width: 18px;
`

export const TaskNameEnv = styled.TouchableOpacity`
  align-items: center;
  flex: 1 1 auto;
  flex-direction: row;
`

export const TaskName = styled.Text`
  color: ${(props) => props.isCompleted ? props.theme.colors.grays.gray300 : props.theme.colors.grays.gray100};
  flex: 1 1 auto;
  font: 400 14px/20px ${(props) => props.theme.fonts.primary.regular};
  margin: 0 8px;
  text-decoration: ${(props) => props.isCompleted ? 'line-through' : 'none'};
  white-space: normal;
  word-break: break-all;
`

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  height: 32px;
  justify-content: center;
  width: 32px;
`

export const DeleteIcon = styled(Trash).attrs(props => ({
  fill: props.theme.colors.grays.gray300,
  height: 15,
  width: 15
}))``
