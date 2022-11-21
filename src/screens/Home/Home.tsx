import { Tasks } from '@components';
import { Tag, Logo } from './styles'

export const Home: React.FC = () => {
  return (
    <Tag>
      <Logo />
      <Tasks />
    </Tag>
  );
}
