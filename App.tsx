import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Layout } from './src/designSystem/Layout'
import { Home } from '@screens'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <Layout>
      <Home />
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent />
    </Layout>
  )
}
