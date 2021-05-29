import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 469.333 469.333"
      {...props}
    >
      <Path d="M21.333 426.667H448v42.667H21.333zM327.253 0L64 263.253V384h120.747L448 120.747 327.253 0zM167.04 341.333h-60.373V280.96L327.253 60.373l60.373 60.373L167.04 341.333z" />
    </Svg>
  )
}
