import { ThemeProvider } from 'styled-components'
import { ComponentWithChildren } from '@ts/interfaces'
import { theme } from './theme'

export const Layout: React.FC<ComponentWithChildren> = ({ children }: ComponentWithChildren) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
