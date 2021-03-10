import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" {...props}>
      <Defs></Defs>
      <G
        filter="url(#prefix__a)"
        transform="translate(-300 -13)"
        fill="none"
        fillRule="evenodd"
      >
        <Path
          fill={fill}
          fillRule="nonzero"
          d="M310.199 21.85a5.608 5.608 0 10-9.155-6.481 5.608 5.608 0 007.429 8.07l4.135 4.11a1.174 1.174 0 101.702-1.617l-.042-.042-4.07-4.04zm-4.581.383a3.618 3.618 0 11-.006-7.238 3.618 3.618 0 01.008 7.239h-.002z"
        />
      </G>
    </Svg>
  )
}
