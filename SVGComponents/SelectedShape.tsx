import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect, Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill, ...props }: SvgProps) => {
  return (
    <Svg width={10} height={6} viewBox='0 0 10 6' {...props}>
      <G fill='none' fill-rule='evenodd'>
        <G fill='#51BCDA'>
          <G>
            <Path
              d='M312.154 21.184l4.573 5.488c.07.085.059.21-.026.282-.036.03-.081.046-.128.046h-9.146c-.11 0-.2-.09-.2-.2 0-.047.016-.092.046-.128l4.573-5.488c.071-.084.197-.096.282-.025.01.008.018.016.026.025z'
              transform='translate(-327 -198) translate(20 177) matrix(1 0 0 -1 0 48)'
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}
