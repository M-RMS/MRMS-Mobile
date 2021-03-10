import * as React from "react"
import Svg, { Defs, G, Path, SvgProps,Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15">
    <Defs>
        
    </Defs>
    <G fill="none" fill-rule="evenodd" stroke="#185D81" stroke-width=".2">
        <G>
            <G>
                <G>
                    <G  transform="translate(-155 -112) translate(0 -2) translate(20 101) translate(135 7)">
                        <G>
                            <Path fill="#000" fill-rule="nonzero" d="M14.964 9.959c-.056-.109-.168-.177-.29-.177h-1.63V.652c0-.36-.293-.652-.653-.652h-1.956c-.36 0-.653.292-.653.652v9.13h-1.63c-.122 0-.234.068-.29.177-.056.109-.047.24.025.339l3.261 4.565c.061.086.16.137.265.137.105 0 .204-.05.265-.137l3.261-4.565c.071-.1.08-.23.025-.339zm-3.55 4.154l-2.628-3.679h1.323c.18 0 .326-.146.326-.326V.652h1.956v9.456c0 .18.146.326.327.326h1.322l-2.627 3.679zM3.853.137c-.123-.172-.409-.172-.531 0L.06 4.702c-.071.1-.08.23-.025.339.056.109.168.177.29.177h1.63v9.13c0 .36.293.652.653.652h1.956c.36 0 .653-.293.653-.652v-9.13h1.63c.122 0 .234-.068.29-.177.056-.109.046-.24-.025-.339L3.853.137zM4.89 4.566c-.18 0-.326.146-.326.326v9.456H2.61V4.892c0-.18-.146-.326-.326-.326H.96L3.587.887l2.627 3.679H4.891z" transform="translate(0 6)"/>
                            
                        </G>
                    </G>
                </G>
            </G>
        </G>
    </G>
</Svg>
  )
}