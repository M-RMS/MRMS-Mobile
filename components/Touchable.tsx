import React, { ReactNode } from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Platform
} from 'react-native'

import useTheme from '~/hooks/useTheme'

export interface EnhancedTouchable extends ViewStyle, TouchableOpacityProps {
  withShadow?: boolean
  withBorderRadius?: boolean
  children?: ReactNode
}

const Touchable = ({
  withShadow,
  withBorderRadius,
  children,
  style,
  onLongPress,
  onPress,
  ...rest
}: EnhancedTouchable) => {
  const theme = useTheme()

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        withShadow ? Platform.select(theme.shadow as any) : {},
        withBorderRadius ? { borderRadius: theme.borderRadius } : {},
        rest,
        style
      ]}
      onPress={onPress}>
      <>{children}</>
    </TouchableOpacity>
  )
}

export default Touchable
