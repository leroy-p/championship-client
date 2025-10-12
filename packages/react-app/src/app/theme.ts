export interface ITheme {
  palette: {
    dark: string
    primary: string
    secondary: string
    text: string
    error: string
    win: string
    lose: string
  }
}

export const theme: ITheme = {
  palette: {
    dark: '#161617',
    primary: '#212122',
    secondary: '#40ffff',
    text: '#ffffff',
    error: '#e2393c',
    win: '#40ffff',
    lose: '#e2393c',
  },
}
