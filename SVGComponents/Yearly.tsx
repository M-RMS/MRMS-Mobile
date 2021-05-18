import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      fill={fill}
      height={height}
      {...props}
    >
      <Path d="M488 64h-24v-8a8 8 0 00-8-8h-56v-8a24 24 0 00-48 0v8h-16v-8a24 24 0 00-48 0v8h-96v-8a24 24 0 00-48 0v8h-16v-8a24 24 0 00-48 0v8H24a8 8 0 00-8 8v400a8 8 0 008 8h8v24a8 8 0 008 8h448a8 8 0 008-8V72a8 8 0 00-8-8zM32 448V160h416v288zM368 40a8 8 0 0116 0v8h-16zm-64 0a8 8 0 0116 0v8h-16zm-144 0a8 8 0 0116 0v8h-16zm-64 0a8 8 0 0116 0v8H96zM80 64v8a24.028 24.028 0 0024 24 8 8 0 000-16 8.009 8.009 0 01-8-8v-8h48v8a24.028 24.028 0 0024 24 8 8 0 000-16 8.009 8.009 0 01-8-8v-8h128v8a24.028 24.028 0 0024 24 8 8 0 000-16 8.009 8.009 0 01-8-8v-8h48v8a24.028 24.028 0 0024 24 8 8 0 000-16 8.009 8.009 0 01-8-8v-8h80v80H32V64zm400 416H48v-16h408a8 8 0 008-8V80h16z" />
      <Path d="M176 344a47.994 47.994 0 00-21.493-40A47.994 47.994 0 1080 264a8 8 0 0016 0 32 32 0 1132 32 8 8 0 000 16 32 32 0 11-32 32 8 8 0 00-16 0 48 48 0 0096 0zM352 296h-24v-64h56a8 8 0 000-16h-64a8 8 0 00-8 8v80a8 8 0 008 8h32a32 32 0 11-32 32 8 8 0 00-16 0 48 48 0 1048-48zM240 232a32.036 32.036 0 0132 32 8 8 0 0016 0 48 48 0 00-96 0v80a48.069 48.069 0 1016-35.739V264a32.036 32.036 0 0132-32zm0 80a32 32 0 11-32 32 32.036 32.036 0 0132-32z" />
    </Svg>
  )
}