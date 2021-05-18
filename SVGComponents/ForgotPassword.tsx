import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg
      width={width}
      fill={fill}
      height={height}
      viewBox="0 0 510 510"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M434 212.466h-18.39V168.47C415.61 75.575 340.039 0 247.15 0 154.255 0 78.68 75.575 78.68 168.47v43.996H76c-24.813 0-45 20.187-45 45V465c0 24.813 20.187 45 45 45h358c24.813 0 45-20.187 45-45V257.466c0-24.813-20.187-45-45-45zM108.68 168.47C108.68 92.118 170.797 30 247.15 30c76.347 0 138.46 62.118 138.46 138.47v43.996h-40V168.47c0-54.297-44.169-98.47-98.46-98.47-54.296 0-98.47 44.173-98.47 98.47v43.996h-40zm206.93 43.996H178.68V168.47c0-37.754 30.715-68.47 68.47-68.47 37.75 0 68.46 30.716 68.46 68.47zM449 465c0 8.271-6.729 15-15 15H76c-8.271 0-15-6.729-15-15V257.466c0-8.271 6.729-15 15-15h358c8.271 0 15 6.729 15 15z" />
      <Path d="M258.544 273.623c-29.791-2.06-53.956 21.647-53.956 50.29 0 8.284 6.716 15 15 15s15-6.716 15-15c0-11.78 9.924-21.19 21.892-20.361 10.07.694 18.187 8.812 18.881 18.881.648 9.391-5.112 17.98-14.009 20.888C248.581 347.497 240 359.267 240 372.61v11.805c0 8.284 6.716 15 15 15s15-6.716 15-15V372.61c0-.382.339-.665.675-.774 21.976-7.184 36.21-28.348 34.615-51.467-1.72-24.931-21.815-45.027-46.746-46.746zM255 418.15c-8.284 0-15 6.716-15 15v1.181c0 8.284 6.716 15 15 15s15-6.716 15-15v-1.181c0-8.284-6.716-15-15-15z" />
    </Svg>
  )
}
