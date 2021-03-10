import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <Defs></Defs>
      <G
        filter="url(#prefix__a)"
        transform="translate(-116)"
        fill="none"
        fillRule="evenodd"
      >
        <G fill={fill} fillRule="nonzero">
          <Path d="M135.531 0a5.474 5.474 0 00-5.468 5.469c0 2.806 4.387 7.776 4.887 8.334.148.164.36.26.581.26a.788.788 0 00.582-.26c.5-.558 4.887-5.528 4.887-8.334A5.475 5.475 0 00135.531 0zm0 7.813a2.344 2.344 0 11.003-4.687 2.344 2.344 0 01-.003 4.686zM116.49 9.178a.784.784 0 00-.49.727v14.314a.784.784 0 001.071.725l6.741-2.697V6.25l-7.32 2.928z" />
          <Path d="M137.275 14.847a2.346 2.346 0 01-3.487 0c-.16-.177-.365-.41-.6-.686V25l7.321-2.928a.779.779 0 00.491-.725V9.86c-1.28 2.167-2.99 4.167-3.725 4.986zm-8.283-7.15l-3.617-1.447v15.997l6.25 2.5V12.2c-.998-1.345-2.04-2.966-2.633-4.503z" />
        </G>
      </G>
    </Svg>
  )
}
