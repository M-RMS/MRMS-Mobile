import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width="13" height="17" viewBox="0 0 13 17">
    <G fill="none" fill-rule="evenodd">
        <G fill="#282017" fill-rule="nonzero" stroke="#185D81" stroke-width=".2">
            <G>
                <G>
                    <G>
                        <Path d="M11.583 6.125C11.54 6.048 11.459 6 11.37 6H.241c-.087 0-.168.048-.211.125-.043.078-.04.172.008.246l4.559 7.2v5.735c0 .077.036.148.097.194l1.935 1.452c.073.055.171.063.253.022.082-.04.134-.124.134-.216V13.57l4.56-7.199c.047-.074.05-.168.007-.246zM6.57 13.371c-.025.038-.038.083-.038.129v6.774l-1.451-1.089V13.5c0-.046-.013-.09-.038-.13L.682 6.485h10.25L6.57 13.37z" transform="translate(-39 -111) translate(0 -2) translate(20 101) translate(20 7)"/>
                    </G>
                </G>
            </G>
        </G>
    </G>
</Svg>
  )
}