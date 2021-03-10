import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={15} height={10} viewBox='0 0 15 10' {...props}>
      <Path
        d='M6.757.636l-6.45 6.79c-.41.43-.41 1.131 0 1.563a1.016 1.016 0 001.486 0L7.5 2.982l5.707 6.007c.41.431 1.075.431 1.485 0 .41-.432.41-1.132 0-1.564L8.242.636a1.018 1.018 0 00-1.485 0z'
        fill={fill}
        fillRule='nonzero'
      />
    </Svg>
  )
}
