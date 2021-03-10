import React, { memo } from 'react'
import { Image as RNImage, ImageProperties, ViewStyle } from 'react-native'
import Animated, { Easing, timing } from 'react-native-reanimated'

import useMemorizedAnimatedValue from '~/hooks/useMemorizedAnimatedValue'
import useTheme from '~/hooks/useTheme'

interface EnhancedImage extends ImageProperties {
  containerStyle?: ViewStyle
}

const Image = ({ containerStyle, ...rest }: EnhancedImage) => {
  const theme = useTheme()

  const opacity = useMemorizedAnimatedValue(0)
  const config = {
    duration: 700,
    toValue: 1,
    easing: Easing.inOut(Easing.ease)
  }

  const handleLoad = () => {
    timing(opacity, config).start()
  }

  return (
    <Animated.View
      style={[
        { flex: 1, borderRadius: theme.borderRadius, overflow: 'hidden' },
        containerStyle,
        { opacity }
      ]}>
      <RNImage onLoad={handleLoad} {...rest} />
    </Animated.View>
  )
}

export default memo(Image)
