import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    grays: {
      gray100: '#F2F2F2',
      gray200: '#D9D9D9',
      gray300: '#808080',
      gray400: '#333333',
      gray500: '#262626',
      gray600: '#1A1A1A',
      gray700: '#0D0D0D',
    },
    primary: {
      purple: '#8284FA',
      purpleDark: '#5E60CE',
      blue: '#4EA8DE',
      blueDark: '#1E6F9F',
      danger: '#E25858',
    },
    backgroundColor: '#0D0D0D'
  },
  fonts: {
    primary: {
      400: '"Inter_400Regular", "Helvetica Neue", sans-serif',
      700: '"Inter_700Bold", "Helvetica Neue", sans-serif',
    }
  },
  transitions: {
    level1: 'all 150ms ease-in-out',
  },
}
