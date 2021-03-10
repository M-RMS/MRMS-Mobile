import { wp, hp } from '~/utils/responsive'
import * as React from "react"
import Svg, { SvgProps, Defs, Path, G, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg
      width={wp(20)}
      height={wp(12)}
      viewBox="0 0 69 53"//TODO şuan isabetli bir şekilde konumu gösteriyor ancak width i uyuşmuyor :/
      {...props}
    >
      <Defs>
        <Path
          id="prefix__b"
          d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0h21c8.837 0 16 7.163 16 16s-7.163 16-16 16h-5.505l-4.06 4.18c-.77.792-2.036.81-2.829.041l-.04-.04L20.504 32H16z"
        />
      </Defs>
      <G transform="translate(8 8)" fillRule="nonzero" fill="none">
        <Use fill={fill} filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <Use fill="#FDFEFF" stroke="#A7C316" xlinkHref="#prefix__b" />
      </G>
    </Svg>
  )
}
