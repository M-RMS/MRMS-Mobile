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
    <Svg width={width} height={height} viewBox='0 0 10 20' {...props}>
      <G stroke='#8898AA'>
        <G>
          <G>
            <G transform='translate(-20 -408) translate(20 328) translate(0 45) translate(0 35)'>
              <Rect width='19' height='19' x='.5' y='.5' rx='5' />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
