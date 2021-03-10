import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, redTheme } from '~/constants/palette'

type ContextProps = {
  theme: 'default' | 'red'
  setTheme: any
}

const themeMapper = {
  default: defaultTheme,
  red: redTheme
}

export const ManageThemeContext = React.createContext<Partial<ContextProps>>({
  theme: 'default'
})

export const useTheme = () => React.useContext(ManageThemeContext)

export const ThemeManager = ({ children }: any) => {
  const [theme, setTheme] = React.useState<'default' | 'red'>('default')

  return (
    <ManageThemeContext.Provider
      value={{
        theme,
        setTheme
      }}>
      <ThemeProvider theme={themeMapper[theme]}>{children}</ThemeProvider>
    </ManageThemeContext.Provider>
  )
}
