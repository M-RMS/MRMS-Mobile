import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect, Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill, ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' {...props}>
      <G fill='none' fill-rule='evenodd'>
        <G>
          <G>
            <G transform='translate(-19 -1007) translate(0 914) translate(19 93)'>
              <Rect width='24' height='24' fill='#51BCDA' rx='12' />
              <Circle cx='12' cy='12' r='4.5' fill='#FFF' />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
