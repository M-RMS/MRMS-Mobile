import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={22} height={18} viewBox="0 0 22 18" {...props}>
      <Path
        d="M20.677 1H1.323A.325.325 0 001 1.327v11.128c0 .18.144.327.323.327h4.193v3.927h-2.58a.325.325 0 00-.323.327c0 .181.144.328.322.328h14.84a.326.326 0 00.322-.328.326.326 0 00-.323-.327h-1.29v-3.927h4.193a.325.325 0 00.323-.327V1.327A.325.325 0 0020.677 1zM6.807 16.71H6.16v-3.928h.645v3.927zm7.741 0H7.452v-3.928h7.096v3.927zm1.29-3.928v3.927h-.644v-3.927h.645z"
        fill={fill}
        fillRule="nonzero"
        stroke="#185D81"
        strokeWidth={0.2}
      />
    </Svg>
  )
}
