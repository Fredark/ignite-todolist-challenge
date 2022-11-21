import { TaskFilterComponentInterface } from './types'
import { Tag, FilterButton, CreatedLabel, CompletedLabel, Value} from './styles'

export const Component: React.FC<TaskFilterComponentInterface> = ({ completedTasks, totalTasks, setFilter }) => (
  <Tag>
    <FilterButton onPress={() => setFilter('')}>
      <CreatedLabel>Created</CreatedLabel>
      <Value>{totalTasks}</Value>
    </FilterButton>
    <FilterButton onPress={() => setFilter('completed')}>
      <CompletedLabel>Completed</CompletedLabel>
      <Value>{completedTasks}</Value>
    </FilterButton>
  </Tag>
)
