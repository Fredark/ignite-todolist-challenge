import { Alert } from "react-native"
import { List } from "./Components"
import { TasksListInterface } from "./types"

export const TaskList: React.FC<TasksListInterface> = ({ tasksList, setTasksList, filter }: TasksListInterface) => {
  const handleCompleteToggle = (taskId: string) => {
    const updatedTasksList = tasksList.map(task => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }

      return task
    })

    setTasksList(updatedTasksList)
  }

  const handleTaskDeletion = (taskId: string) => {
    Alert.alert('Delete task', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Delete',
        onPress: () => setTasksList(tasksList.filter(({ id }) => id !== taskId)),
        style: 'destructive'
      }
    ])
  }
  
  return (
    <List tasksList={tasksList} handleCompleteToggle={handleCompleteToggle} handleTaskDeletion={handleTaskDeletion} filter={filter} />
  )
}
