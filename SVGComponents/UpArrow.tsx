import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { wp } from "~/utils/responsive"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={wp(5)} height={wp(5)}

      viewBox="0 0 240.835 240.835"
      {...props}
      fill={fill}
    >
      <Path d="M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418c4.752 4.74 12.439 4.74 17.191 0 4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z" />
    </Svg>
  )
}
