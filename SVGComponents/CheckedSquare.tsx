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
      <G fill='none' fill-rule='evenodd'>
        <G transform='translate(-20 -373) translate(20 328) translate(0 45)'>
          <Rect width='20' height='20' fill='#51BCDA' rx='5' />
          <G fill={fill} fillRule='nonzero'>
            <Path
              d='M4.579 10.91c-.258 0-.517-.118-.714-.353L.295 6.305c-.394-.47-.394-1.231 0-1.7.395-.47 1.034-.47 1.428 0l2.856 3.4L11.004.353c.394-.47 1.033-.47 1.427 0 .395.47.395 1.231 0 1.701l-7.138 8.504c-.197.235-.456.352-.714.352z'
              transform='translate(4 5)'
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}
