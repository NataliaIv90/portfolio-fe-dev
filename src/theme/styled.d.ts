// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string
  accent: string
  light: string
  medium: string
  dark: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}