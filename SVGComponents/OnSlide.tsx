import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({
  opacity = 1,
  fill = 'white',
  width,
  height,
  ...props
}: SvgProps) => {
  return (
    <Svg width={18} height={8} viewBox='0 0 18 8' {...props}>
      <G fill='none' fill-rule='evenodd'>
        <G fill='#FFF'>
          <G transform='translate(-156 -62) translate(156 62)'>
            <Rect width='18' height='8' rx='4' />
          </G>
        </G>
      </G>
    </Svg>
  )
}
