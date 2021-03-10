import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 10 20' {...props}>
      <Defs></Defs>
      <G fill='none' fillRule='evenodd'>
        <G
          filter='url(#ie0m2nryla)'
          transform='translate(-20 -328) translate(20 328)'
        >
          <Path
            fill={fill}
            fill-rule='nonzero'
            d='M2.083 8.36C.935 8.36 0 9.293 0 10.442v6.666c0 1.149.935 2.084 2.083 2.084h2.5c.47 0 .901-.159 1.25-.422V8.359h-3.75zM20 11.484c0-.5-.198-.967-.543-1.311.39-.426.588-.997.534-1.591-.098-1.06-1.052-1.89-2.174-1.89H12.67c.255-.773.663-2.193.663-3.333 0-1.807-1.536-3.333-2.5-3.333-.866 0-1.484.488-1.51.508-.099.079-.156.199-.156.325v2.826l-2.4 5.2-.1.05v8.932c.678.32 1.536.492 2.083.492h7.65c.907 0 1.7-.611 1.888-1.455.095-.435.04-.872-.151-1.252.616-.31 1.03-.944 1.03-1.668 0-.295-.068-.577-.196-.833.616-.31 1.029-.944 1.029-1.667z'
          />
        </G>
      </G>
    </Svg>
  )
}
