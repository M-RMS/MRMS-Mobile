import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg
      height='25'
      viewBox='0 -52 512 512'
      width='25'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path d='M0 0h113.293v113.293H0zm0 0M149.297 0H512v113.293H149.297zm0 0M0 147.008h113.293V260.3H0zm0 0M149.297 147.008H512V260.3H149.297zm0 0M0 294.012h113.293v113.297H0zm0 0M149.297 294.012H512v113.297H149.297zm0 0' />
    </Svg>
  )
}
