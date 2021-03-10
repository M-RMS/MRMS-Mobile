import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={17} height={22} viewBox="0 0 17 22" {...props}>
      <Path
        d="M16.444 1.167A.323.323 0 0016.161 1H1.323a.323.323 0 00-.273.495l6.079 9.599v7.648c0 .101.048.197.13.258l2.58 1.935a.318.318 0 00.338.03.32.32 0 00.178-.288v-9.583l6.079-9.599a.322.322 0 00.01-.328zm-6.684 9.66a.322.322 0 00-.05.173v9.032l-1.936-1.451V11a.322.322 0 00-.05-.173L1.909 1.645h13.666L9.76 10.827z"
        fillRule="nonzero"
        stroke="#51BCDA"
        fill={fill}
      />
    </Svg>
  )
}
