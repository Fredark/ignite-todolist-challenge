import { useState } from 'react'
import { TaskInterface } from '@ts/interfaces'
import { TaskForm } from '../TaskForm'
import { TaskFilter } from '../TaskFilter'
import { TaskList } from '../TaskList'

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  const [filter, setFilter] = useState<string>('')

  return (
    <>
      <TaskForm tasksList={tasks} setTasksList={setTasks} />
      <TaskFilter tasksList={tasks} filter={filter} setFilter={setFilter} />
      <TaskList tasksList={tasks} setTasksList={setTasks} filter={filter} />
    </>
  )
}
