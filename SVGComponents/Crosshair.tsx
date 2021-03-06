import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={35} height={35} viewBox="0 0 35 35" {...props}>
      <Defs></Defs>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h35v35H0z" />
        <G filter="url(#prefix__a)">
          <G fill={fill} fillRule="nonzero">
            <Path d="M17.5 27.465c-5.495 0-9.966-4.47-9.966-9.965s4.47-9.967 9.966-9.967c5.495 0 9.965 4.47 9.965 9.966 0 5.495-4.47 9.965-9.965 9.965zm0-17.986c-4.423 0-8.021 3.598-8.021 8.02 0 4.423 3.598 8.021 8.02 8.021 4.423 0 8.021-3.598 8.021-8.02 0-4.423-3.598-8.021-8.02-8.021z" />
            <Path d="M17.5 11.18a.973.973 0 01-.973-.972V6.805a.973.973 0 011.945 0v3.403a.972.972 0 01-.972.972zm10.694 7.292h-3.403a.973.973 0 010-1.945h3.403a.973.973 0 010 1.945zM17.5 29.166a.973.973 0 01-.973-.972v-3.403a.973.973 0 011.945 0v3.403a.972.972 0 01-.972.972zm-7.292-10.694H6.805a.973.973 0 010-1.945h3.403a.973.973 0 010 1.945zm7.292 1.944a2.92 2.92 0 01-2.917-2.916 2.92 2.92 0 012.917-2.917 2.92 2.92 0 012.916 2.917 2.92 2.92 0 01-2.916 2.916zm0-3.889a.975.975 0 00-.973.973c0 .535.437.972.973.972a.974.974 0 00.972-.972.975.975 0 00-.972-.973z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}
