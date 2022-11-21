import { TaskFormComponentInterface } from './types'
import { Tag, TaskInput, Button, AddIcon } from './styles'

export const Component: React.FC<TaskFormComponentInterface> = ({
  value,
  isFocused,
  handleFocus,
  handleBlur,
  handleAddTask,
  handleChangeText
}) => (
  <Tag>
    <TaskInput 
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Add a new task"
      value={value}
      onChangeText={handleChangeText}
    />
    <Button onPress={handleAddTask}>
      <AddIcon />
    </Button>
  </Tag>
)