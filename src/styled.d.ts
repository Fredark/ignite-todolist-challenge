import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grays: {
        gray100: string
        gray200: string
        gray300: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
      }
      primary: {
        purple: string
        purpleDark: string
        blue: string
        blueDark: string
        danger: string
      },
      backgroundColor: string
    }
    fonts: {
      primary: {
        regular: string
        bold: string
      }
    }
    transitions: {
      level1: string
    }
  }
}
