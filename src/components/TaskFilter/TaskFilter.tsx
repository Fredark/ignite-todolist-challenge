import { Component } from './Component'
import { TaskFilterInterface } from './types'

export const TaskFilter: React.FC<TaskFilterInterface> = ({ tasksList, filter, setFilter }) => {
  const completedTasks = tasksList.filter(task => task.isCompleted).length
  const totalTasks = tasksList.length

  return (
    <Component completedTasks={completedTasks} totalTasks={totalTasks} setFilter={setFilter} />
  )
}