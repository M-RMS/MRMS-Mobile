import { LinearGradient } from 'expo-linear-gradient'
import React, { memo } from 'react'
import { View } from 'react-native'
import Animated, { Easing, multiply } from 'react-native-reanimated'

import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  timing,
  stopClock,
  block
} = Animated

const loop = ({
  duration,
  toValue,
  easing
}: {
  duration: number
  toValue?: number
  easing?: Animated.EasingFunction
}) => {
  const clock = new Clock()

  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  }

  const config = {
    duration: new Value(duration),
    toValue: new Value(toValue || 1),
    easing: easing || Easing.inOut(Easing.linear)
  }

  return block([
    startClock(clock),
    timing(clock, state, config),
    cond(state.finished, [
      stopClock(clock),
      set(state.finished, 0),
      set(state.position, -50),
      set(state.time, 0),
      set(state.frameTime, 0),
      startClock(clock)
    ]),
    state.position
  ])
}

const Skeleton = ({ height }: { height?: number }) => {
  const theme = useTheme()

  const transX = loop({
    duration: 1000,
    toValue: 100,
    easing: Easing.sin
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eaeaea',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: theme.borderRadius ?? 0,
        height: height ?? 'auto'
      }}>
      <Animated.View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          transform: [
            {
              translateX: multiply(transX, wp(1))
            }
          ]
        }}>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          locations={[0, 0.5, 1]}
          end={{ x: 1, y: 0.5 }}
          colors={['transparent', 'rgba(150,150,150,0.1)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
        />
      </Animated.View>
    </View>
  )
}

export default memo(Skeleton)
