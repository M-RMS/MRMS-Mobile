import { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'

export default () => {
  const theme = useContext(ThemeContext)

  return theme
}
