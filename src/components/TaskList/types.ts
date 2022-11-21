import { TaskInterface } from "@ts/interfaces"

export interface TasksListInterface {
  filter: string
  tasksList: TaskInterface[]
  setTasksList: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}

export interface TaskListComponentInterface {
  filter: string
  tasksList: TaskInterface[]
  handleCompleteToggle: (taskId: string) => void
  handleTaskDeletion: (taskId: string) => void
}

export interface TaskItemComponentInterface extends TaskInterface {
  filter: string
  handleCompleteToggle: (taskId: string) => void
  handleTaskDeletion: (taskId: string) => void
}