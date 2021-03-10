import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={6} height={18} viewBox="0 0 4 18" {...props}>
      <Defs></Defs>
      <G
        filter="url(#prefix__a)"
        transform="translate(-331 -5)"
        fill="none"
        fillRule="evenodd"
      >
        <Path
          fill={fill}
          fillRule="nonzero"
          d="M333 18.108c1.105 0 2 .951 2 2.124 0 1.172-.895 2.123-2 2.123s-2-.95-2-2.123c0-1.173.895-2.124 2-2.124zm0-6.368c1.105 0 2 .95 2 2.123 0 1.173-.895 2.123-2 2.123s-2-.95-2-2.123c0-1.173.895-2.123 2-2.123zm0-6.37c1.105 0 2 .95 2 2.123 0 1.173-.895 2.123-2 2.123s-2-.95-2-2.123c0-1.172.895-2.123 2-2.123z"
        />
      </G>
    </Svg>
  )
}
