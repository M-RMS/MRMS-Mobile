import * as React from "react"
import { wp, hp } from '~/utils/responsive'
import Svg, { Defs, Path, G, Use, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', stroke = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={wp(20)} height={wp(12)} viewBox="0 0 91 56" {...props}>
      <Defs>
        <Path
          id="prefix__b"
          d="M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0h39c9.941 0 18 8.059 18 18s-8.059 18-18 18H41.495l-4.06 4.18c-.77.792-2.036.81-2.829.041l-.04-.04L30.504 36H18z"
        />
      </Defs>
      <G transform="translate(8 8)" fillRule="nonzero" fill="none">
        <Use fill={fill} filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <Use fill="#FDFEFF" stroke={stroke} xlinkHref="#prefix__b" />
      </G>
    </Svg>
  )
}
