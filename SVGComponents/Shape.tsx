import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect, Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill, ...props }: SvgProps) => {
  return (
    <Svg width={10} height={6} viewBox='0 0 10 6' {...props}>
      <Defs></Defs>
      <G fill='none' fill-rule='evenodd'>
        <G fill='#D8D8D8'>
          <G
            filter='url(#3u5pw0l9ma)'
            transform='translate(-1 -258) translate(20 177)'
          >
            <G>
              <Path
                d='M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
                transform='translate(10 106)'
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
