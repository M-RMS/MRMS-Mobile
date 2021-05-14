import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg

      viewBox="0 0 512 512"
      width={width}
      fill={fill}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M391.5 43V13h-30v30h-211V13h-30v30H0v456h512V43zm-271 30v30h30V73h211v30h30V73H482v60H30V73zM30 469V163h452v306z" />
      <Path d="M196.861 230h98.955l-88.824 193.749 27.271 12.502 95.876-209.13V200H196.861zM60 409h76v30H60zM422 409h30v30h-30zM362 409h30v30h-30z" />
    </Svg>
  )
}
