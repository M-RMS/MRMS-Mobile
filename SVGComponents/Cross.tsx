import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export default ({ opacity = 1, fill = '#AEAEAE', ...props }: SvgProps) => {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" {...props}>
      <Path
        d="M7.414 6l4.293-4.293A.999.999 0 1010.293.293L6 4.586 1.707.293A1 1 0 00.293 1.707L4.586 6 .293 10.293a1 1 0 001.414 1.414L6 7.414l4.293 4.293a.997.997 0 001.414 0 .999.999 0 000-1.414L7.414 6z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  )
}
