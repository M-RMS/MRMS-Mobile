import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#185D81', ...props }: SvgProps) => {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" {...props}>
      <Defs></Defs>
      <G fill={fill} fillRule="nonzero" filter="url(#prefix__a)">
        <Path d="M2.723 6.128a4.317 4.317 0 014.312-4.312h8.291A2.489 2.489 0 0012.936 0H2.496A2.5 2.5 0 000 2.496v14.071a2.499 2.499 0 002.496 2.497h.227V6.128z" />
        <Path d="M17.475 3.631H7.035a2.499 2.499 0 00-2.496 2.497V19.29a2.499 2.499 0 002.496 2.496h10.44a2.5 2.5 0 002.497-2.496V6.128a2.5 2.5 0 00-2.497-2.497zM15.66 19.064H8.85a.68.68 0 010-1.361h6.809a.68.68 0 010 1.36zm0-3.631H8.85a.68.68 0 010-1.362h6.809a.68.68 0 010 1.362zm0-3.178H8.85a.68.68 0 010-1.361h6.809a.68.68 0 010 1.361zm0-3.63H8.85a.681.681 0 010-1.362h6.809a.68.68 0 010 1.361z" />
      </G>
    </Svg>
  )
}
