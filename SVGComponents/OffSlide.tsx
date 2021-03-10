import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect, Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({
  opacity = 1,
  fill = 'white',
  width,
  height,
  ...props
}: SvgProps) => {
  return (
    <Svg width={8} height={8} viewBox='0 0 8 8' {...props}>
      <G fill='none' fill-rule='evenodd' opacity='.5'>
        <G fill='#FFF'>
          <G transform='translate(-181 -62) translate(156 62)'>
            <Circle cx='29' cy='4' r='4' />
          </G>
        </G>
      </G>
    </Svg>
  )
}
