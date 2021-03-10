import React from 'react'
import { ActivityIndicator } from 'react-native'

import useTheme from '~/hooks/useTheme'

export default () => {
  const theme = useTheme()

  return <ActivityIndicator color={theme.colors.primary} />
}
