import React, { ReactNode } from 'react'
import { View, ViewStyle, Platform } from 'react-native'

import useTheme from '~/hooks/useTheme'

export interface EnhancedView extends ViewStyle {
  withShadow?: boolean
  withBorderRadius?: boolean
  children?: ReactNode
}

const Division = ({
  withShadow,
  withBorderRadius,
  children,
  ...rest
}: EnhancedView) => {
  const theme = useTheme()
  return (
    <View
      style={[
        withShadow ? Platform.select(theme.shadow as any) : {},
        withBorderRadius ? { borderRadius: theme.borderRadius } : {},
        rest
      ]}>
      {children}
    </View>
  )
}

export default Division
