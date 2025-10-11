export interface ITheme {
  palette: {
    background: string
    text: string
    error: string
    win: string
    lose: string
  }
}

export const theme: ITheme = {
  palette: {
    background: '#222222',
    text: '#ffffff',
    error: '#fd5859',
    win: '#269e50',
    lose: '#fd5859',
  },
}
