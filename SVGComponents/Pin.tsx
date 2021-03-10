import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path, SvgProps } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={17} height={20} viewBox="0 0 17 20" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1="14.724%"
          x2="85.276%"
          y1="0%"
          y2="100%"
        >
          <Stop offset="0%" stopColor="#FF890B" />
          <Stop offset="100%" stopColor="#E56718" />
        </LinearGradient>
      </Defs>
      <Path
        d="M2.44 2.44a8.335 8.335 0 0111.786 11.786l-5.42 5.42a.666.666 0 01-.945 0l-5.42-5.42a8.332 8.332 0 010-11.785zm5.893 1.893a4 4 0 100 8 4 4 0 000-8z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  )
}
