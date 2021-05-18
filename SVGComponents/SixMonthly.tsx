import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      height={height}
      viewBox="0 0 33.375 33.375"
      {...props}
    >
      <Path d="M27.96 1.375h-.682V1a1 1 0 10-2 0v.375h-1.837V1a1 1 0 00-2 0v.375h-1.837V1a1 1 0 10-2 0v.375h-1.837V1a1 1 0 00-2 0v.375H11.93V1a1 1 0 00-2 0v.375H8.094V1a1 1 0 00-2 0v.375h-.682A4.731 4.731 0 00.687 6.101v22.547a4.733 4.733 0 004.727 4.727H27.96a4.733 4.733 0 004.728-4.727V6.101a4.733 4.733 0 00-4.728-4.726zM25.78 1a.5.5 0 011 0v6.482a.5.5 0 01-1 0V1zm-3.837 0a.5.5 0 011 0v6.482a.5.5 0 01-1 0V1zm-3.837 0a.5.5 0 011 0v6.482a.5.5 0 01-1 0V1zm-3.837 0a.5.5 0 011 0v6.482a.5.5 0 01-1 0V1zm-3.837 0a.5.5 0 011 0v6.482a.5.5 0 01-1 0V1zM6.595 1a.5.5 0 011 0v6.482a.5.5 0 01-1 0V1zm23.684 27.648a2.32 2.32 0 01-2.318 2.317H5.414a2.32 2.32 0 01-2.318-2.317V6.101a2.32 2.32 0 012.318-2.318h.682v2.513a1.55 1.55 0 00-.56 1.187 1.56 1.56 0 003.12 0c0-.478-.221-.9-.56-1.187V3.783h1.837v2.513a1.55 1.55 0 00-.56 1.187 1.56 1.56 0 003.12 0c0-.478-.221-.9-.56-1.187V3.783h1.837v2.513a1.55 1.55 0 00-.56 1.187 1.56 1.56 0 003.12 0c0-.478-.221-.9-.56-1.187V3.783h1.837v2.513a1.55 1.55 0 00-.56 1.187 1.561 1.561 0 003.121 0c0-.478-.222-.9-.561-1.187V3.783h1.837v2.513a1.55 1.55 0 00-.56 1.187 1.56 1.56 0 003.12 0c0-.478-.221-.9-.56-1.187V3.783h1.837v2.513a1.55 1.55 0 00-.56 1.187 1.56 1.56 0 003.121 0c0-.478-.221-.9-.561-1.187V3.783h.682a2.32 2.32 0 012.317 2.318l-.001 22.547z" />
      <Path d="M16.724 24.491c.328 0 .621-.052.883-.155a1.988 1.988 0 001.11-1.055 1.82 1.82 0 00.154-.736c0-.593-.186-1.096-.556-1.51-.369-.411-.905-.617-1.609-.617-.29 0-.557.055-.8.163-.242.11-.451.263-.627.454a2.1 2.1 0 00-.409.674 2.257 2.257 0 00-.146.818c0 .545.182 1.009.545 1.392.365.38.85.572 1.455.572z" />
      <Path d="M5.187 28.436h23V12.562h-23v15.874zm6.773-10.383c.219-.801.555-1.5 1.009-2.1a4.895 4.895 0 011.728-1.428c.697-.352 1.524-.527 2.481-.527.559 0 1.085.072 1.583.218a4.23 4.23 0 011.326.646c.389.284.713.643.974 1.072.263.43.438.937.537 1.518h-2.892a1.712 1.712 0 00-.254-.607 1.462 1.462 0 00-.383-.374 1.264 1.264 0 00-.455-.163 2.906 2.906 0 00-.437-.037c-.447 0-.826.101-1.136.301-.309.2-.563.458-.764.772-.199.315-.352.66-.454 1.037a4.77 4.77 0 00-.174 1.107h.037c.314-.52.736-.875 1.265-1.063a5.014 5.014 0 011.699-.28c.582 0 1.125.107 1.628.326.504.219.938.52 1.301.901.362.381.65.823.862 1.325a4.14 4.14 0 01.318 1.629c0 .752-.134 1.418-.4 2a4.139 4.139 0 01-1.1 1.464 4.874 4.874 0 01-1.618.899 6.055 6.055 0 01-1.953.311c-.935 0-1.723-.184-2.364-.546a4.549 4.549 0 01-1.564-1.444c-.399-.602-.688-1.285-.864-2.056s-.264-1.562-.264-2.374c0-.885.111-1.726.328-2.527z" />
    </Svg>
  )
}