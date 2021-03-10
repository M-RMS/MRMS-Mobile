import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 15 20' {...props}>
      <Defs></Defs>
      <G fill='none' fill-rule='evenodd'>
        <G>
          <G
            filter='url(#if6v94pxja)'
            transform='translate(-20 -549) translate(20 549)'
          >
            <Path
              fill={fill}
              fill-rule='nonzero'
              d='M7.11 0C3.203 0 .025 3.178.025 7.083c0 3.779 6.476 12.387 6.752 12.752.077.104.201.165.331.165s.255-.06.332-.165c.276-.365 6.752-8.973 6.752-12.752C14.193 3.178 11.015 0 7.109 0zm0 10.833c-2.068 0-3.75-1.682-3.75-3.75 0-2.067 1.682-3.75 3.75-3.75 2.067 0 3.75 1.683 3.75 3.75 0 2.068-1.683 3.75-3.75 3.75z'
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}
