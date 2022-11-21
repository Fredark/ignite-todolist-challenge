import styled from 'styled-components/native'

export const Tag = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const FilterButton = styled.TouchableOpacity`
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
`

export const CreatedLabel = styled.Text`
  color: ${(props) => props.theme.colors.primary.blue};
  font: 700 14px/17px ${(props) => props.theme.fonts.primary.bold};
  flex: 0 0 auto;
`

export const Value = styled.Text`
  background-color: ${(props) => props.theme.colors.grays.gray400};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.grays.gray200};
  flex: 0 0 auto;
  font: 700 12px/19px ${(props) => props.theme.fonts.primary.bold};
  margin-left: 8px;
  padding: 0 8px;
`

export const CompletedLabel = styled(CreatedLabel)`
  color: ${(props) => props.theme.colors.primary.purple};
`
