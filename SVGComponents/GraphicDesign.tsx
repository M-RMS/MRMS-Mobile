import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={21} height={25} viewBox="0 0 21 25" {...props}>
      <Defs></Defs>
      <G
        transform="translate(-174)"
        fill="none"
        fillRule="evenodd"
      >
        <G fill={fill} fillRule="nonzero">
          <Path d="M188.737 23.486h-2.104l-.302-3.997h-3.938l-.302 3.997h-2.103a.74.74 0 100 1.48h8.749a.74.74 0 000-1.48zm5.2-17.991h-1.785L186.83 10.8a3.883 3.883 0 01-1.11 3.182c-1.202 1.202-4.965 1.792-6.657 1.982a.74.74 0 01-.815-.815c.189-1.665.774-5.448 1.982-6.656a3.875 3.875 0 013.183-1.11l1.88-1.888h-10.506a.756.756 0 00-.755.756v11.004c0 .416.339.755.755.755h19.15a.756.756 0 00.756-.755V6.25a.757.757 0 00-.756-.756z" />
          <Path d="M186.3 9.238l7.651-7.624a.962.962 0 00-.018-1.335.962.962 0 00-1.336-.019l-7.624 7.65c.524.314.992.768 1.328 1.328zm-1.628.302a2.403 2.403 0 00-3.397 0c-.611.61-1.155 2.94-1.435 4.832 1.083-.16 4.13-.692 4.885-1.49a2.406 2.406 0 00-.053-3.343z" />
        </G>
      </G>
    </Svg>
  )
}
