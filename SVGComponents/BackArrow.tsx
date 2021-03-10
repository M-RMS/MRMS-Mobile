import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export default ({ opacity = 1, fill = 'white', ...props }: SvgProps) => {
  return (
    <Svg width={10} height={15} viewBox="0 0 10 15" {...props}>
      <Path
        d="M7.5 0l1.75 1.75L3.5 7.5l5.75 5.75L7.5 15 0 7.5z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  )
}
