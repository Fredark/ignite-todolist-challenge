import { Text } from 'react-native'
import { Tag, Logo } from './styles'

export const Home: React.FC = () => {
  return (
    <Tag>
      <Logo height={32} width={110}/>
      <Text>
        Hello World!
      </Text>
    </Tag>
  );
}
