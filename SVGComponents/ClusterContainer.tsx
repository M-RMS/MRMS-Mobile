import * as React from "react"
import Svg, { SvgProps, Defs, Path, G, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={73}
      height={56}
      viewBox="0 0 73 56"
      {...props}
    >
      <Defs>
        <Path
          id="prefix__b"
          d="M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0h21c9.941 0 18 8.059 18 18s-8.059 18-18 18h-4.407l-4.17 4.219a2.003 2.003 0 01-2.83.016l-.015-.016L23.407 36H18z"
        />
      </Defs>
      <G transform="translate(8 8)" fillRule="nonzero" fill="none">
        <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <Use fill="#FDFEFF" xlinkHref="#prefix__b" />
      </G>
    </Svg>
  )
}
