import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
import { wp } from "~/utils/responsive"


export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={wp(10)} height={wp(15)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.453 18.453"
      {...props}
    >
      <G fill={fill}>
        <Path d="M2.711 4.058h8.23v1.334h-8.23zM14.972 14.088a2.915 2.915 0 00-.475-3.49 2.89 2.89 0 00-2.058-.852c-.779 0-1.51.303-2.059.852s-.852 1.279-.852 2.059a2.9 2.9 0 00.852 2.059c.549.547 1.279.85 2.057.85a2.91 2.91 0 001.434-.375l3.262 3.262 1.101-1.102-3.262-3.263zm-1.308-.207c-.652.652-1.796.652-2.448 0a1.734 1.734 0 010-2.449c.326-.326.762-.506 1.225-.506s.897.18 1.224.506.507.762.507 1.225-.181.897-.508 1.224z" />
        <Path d="M13.332 16.3H1.857a.329.329 0 01-.329-.328V1.638c0-.182.147-.329.329-.329h11.475c.182 0 .328.147.328.329V8.95a3.43 3.43 0 011.31.597V1.638A1.64 1.64 0 0013.332 0H1.857A1.64 1.64 0 00.219 1.638v14.334a1.64 1.64 0 001.638 1.637h11.475c.685 0 1.009-.162 1.253-.76l-.594-.594c-.219.092-.565.045-.659.045z" />
        <Path d="M2.711 7.818h8.23v1.334h-8.23z" />
      </G>
    </Svg>
  )
}