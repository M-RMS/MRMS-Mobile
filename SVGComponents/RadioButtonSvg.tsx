import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill, ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' {...props}>
      <G fill='none' fill-rule='evenodd'>
        <G fill='#F2F3FA'>
          <G>
            <G transform='translate(-20 -1051) translate(0 914) translate(20 137)'>
              <Rect width='24' height='24' rx='12' />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
