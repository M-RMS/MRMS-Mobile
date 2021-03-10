import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#185D81', ...props }: SvgProps) => {
  return (
    <Svg width={15} height={20} viewBox="0 0 15 20" {...props}>
      <Defs></Defs>
      <G filter="url(#prefix__a)" fill="none" fillRule="evenodd">
        <Path
          fill={fill}
          fillRule="nonzero"
          d="M7.11 0C3.203 0 .025 3.178.025 7.083c0 3.779 6.476 12.387 6.752 12.752.077.104.201.165.331.165s.255-.06.332-.165c.276-.365 6.752-8.973 6.752-12.752C14.193 3.178 11.015 0 7.109 0zm0 10.833a3.754 3.754 0 01-3.75-3.75 3.755 3.755 0 013.75-3.75 3.755 3.755 0 013.75 3.75 3.755 3.755 0 01-3.75 3.75z"
        />
      </G>
    </Svg>
  )
}
