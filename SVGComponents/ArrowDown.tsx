import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { wp } from "~/utils/responsive"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={wp(5)} height={wp(5)}
      viewBox="0 0 240.811 240.811"
      {...props}
      fill={fill}
    >
      <Path d="M220.088 57.667l-99.671 99.695-99.671-99.707a12.147 12.147 0 00-17.191 0c-4.74 4.752-4.74 12.451 0 17.203l108.261 108.297c4.74 4.752 12.439 4.752 17.179 0L237.256 74.859c4.74-4.752 4.74-12.463 0-17.215-4.728-4.729-12.428-4.729-17.168.023z" />
    </Svg>
  )
}
