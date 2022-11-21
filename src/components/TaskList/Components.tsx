import { FlatList } from 'react-native'
import { TagEmpty, EmptyIcon, EmptyTitle, EmptyDescription, Item, Checkbox, TaskNameEnv, TaskName, DeleteButton, DeleteIcon, CheckboxEnv, CheckboxIcon } from './styles'
import { TaskListComponentInterface, TaskItemComponentInterface } from './types'

const EmptyList: React.FC = () => (
  <TagEmpty>
    <EmptyIcon />
    <EmptyTitle>No items were added yet.</EmptyTitle>
    <EmptyDescription>Create tasks and organize your to-do list.</EmptyDescription>
  </TagEmpty>
)

export const List: React.FC<TaskListComponentInterface> = ({ tasksList, filter, handleCompleteToggle, handleTaskDeletion }) => (
  <FlatList 
    data={tasksList}
    keyExtractor={({ id }) => id}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={<EmptyList />}
    renderItem={({ item }) => (
      <TaskItem key={item.id} id={item.id} isCompleted={item.isCompleted} taskName={item.taskName} filter={filter} handleCompleteToggle={handleCompleteToggle} handleTaskDeletion={handleTaskDeletion} />
    )}
  />
)

const TaskItem: React.FC<TaskItemComponentInterface> = ({ id, isCompleted, taskName, filter, handleCompleteToggle, handleTaskDeletion }) => {
  if(filter === 'completed' && !isCompleted) return null

  return (
    <Item isCompleted={isCompleted}>
      <Checkbox onPress={() => handleCompleteToggle(id)}>
        <CheckboxEnv isCompleted={isCompleted}> 
          <CheckboxIcon isCompleted={isCompleted} />
        </CheckboxEnv>
      </Checkbox>
      <TaskNameEnv onPress={() => handleCompleteToggle(id)}>
        <TaskName isCompleted={isCompleted}>{taskName}</TaskName>
      </TaskNameEnv>
      <DeleteButton onPress={() => handleTaskDeletion(id)}>
        <DeleteIcon />
      </DeleteButton>
    </Item>
  )
  
} 