import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      height={height}
      viewBox="0 0 360.186 360.186"
      {...props}
    >
      <Path d="M230.902 167.822c0-5.44.276-11.013.709-16.876h-.564c-2.942 5.864-5.297 11.151-8.371 16.876l-12.13 19.804v.275h20.356v-20.079z" />
      <Path d="M180.102 0C80.81 0 .006 80.797.006 180.09c0 99.289 80.798 180.096 180.096 180.096 99.296 0 180.078-80.795 180.078-180.09C360.18 80.803 279.397 0 180.102 0zm142.962 187.938a13.191 13.191 0 01-9.05 4.54c-.318.023-.643.048-.961.048-.078 0-.149-.048-.216-.048-.246.012-.475.072-.727.072-4.744 0-8.869-2.517-11.205-6.281l-24.02-20.741a13.24 13.24 0 01-3.915-14.166 13.26 13.26 0 0111.596-9.034l8.353-.606c-15.913-49.101-62.029-84.728-116.364-84.728-67.455 0-122.333 54.878-122.333 122.339 0 67.452 54.877 122.336 122.333 122.336 39.046 0 76.083-18.903 99.07-50.549 4.288-5.896 12.556-7.229 18.471-2.93 5.909 4.287 7.218 12.562 2.931 18.471-27.946 38.484-72.982 61.453-120.471 61.453-82.041 0-148.787-66.738-148.787-148.781S94.516 30.549 176.556 30.549c68.307 0 125.887 46.342 143.278 109.204l16.026-1.168c5.267-.454 10.382 2.459 12.778 7.25 2.42 4.777 1.688 10.545-1.808 14.586l-23.766 27.517zM190.742 203.79v-13.787l34.3-55.231h25.935v53.143h10.887v15.889h-10.887v21.623h-20.086v-21.623h-40.148v-.014zm-48.302-53.541c-7.81 0-14.634 3.903-19.375 7.539l-6.002-15.208c6.839-5.146 17.438-9.353 29.706-9.353 20.5 0 31.795 11.998 31.795 28.451 0 15.207-11.013 27.34-24.121 39.049l-8.368 6.984v.27h34.167v17.438h-64.291V212.58l11.707-10.592c19.812-17.711 29.436-27.896 29.706-38.488.007-7.391-4.452-13.251-14.924-13.251z" />
    </Svg>
  )
}