import { useRef } from 'react'
import Animated from 'react-native-reanimated'

export default (value: number) => {
  const ref = useRef<Animated.Value<number>>()
  if (ref.current === undefined) {
    ref.current = new Animated.Value(value)
  }
  return ref.current
}
