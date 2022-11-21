import { TaskInterface } from "@ts/interfaces"

export interface TaskFormInterface {
  tasksList: TaskInterface[]
  setTasksList: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}

export interface TaskFormComponentInterface {
  value: string
  isFocused: boolean
  handleFocus: () => void
  handleBlur: () => void
  handleAddTask: () => void
  handleChangeText: (text: string) => void
}
