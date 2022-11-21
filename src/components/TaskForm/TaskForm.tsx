import { useState } from 'react'
import { Component } from './Component'
import uuid from 'react-native-uuid'
import { TaskFormInterface } from './types'
import { TaskInterface } from '@ts/interfaces'

export const TaskForm: React.FC<TaskFormInterface>  = ({ tasksList, setTasksList }) => {
  const [ isFocused, setIsFocused ] = useState<boolean>(false)
  const [ taskName, setTaskName ] = useState<string>('')

  const handleAddTask = () => {
    const newTask: TaskInterface = {
      id: `task-${uuid.v4()}`,
      isCompleted: false,
      taskName: taskName
    }

    setTasksList(prevState => [...prevState, newTask])
    setTaskName('')
  }

  return (
    <Component 
      value={taskName}
      isFocused={isFocused}
      handleFocus={() => setIsFocused(true)}
      handleBlur={() => setIsFocused(false)}
      handleAddTask={handleAddTask}
      handleChangeText={setTaskName}
    />
  )
}
