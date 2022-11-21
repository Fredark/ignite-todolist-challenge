import { TaskInterface } from "@ts/interfaces"

export interface TaskFilterInterface {
  tasksList: TaskInterface[]
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export interface TaskFilterComponentInterface {
  completedTasks: number
  totalTasks: number
  setFilter: React.Dispatch<React.SetStateAction<string>>
}