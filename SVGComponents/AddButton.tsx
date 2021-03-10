import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Rect } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({
  opacity = 1,
  fill = 'white',
  width,
  height,
  ...props
}: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox='0 0 25 25' {...props}>
      <Defs></Defs>
      <G fill='none' fill-rule='evenodd'>
        <G>
          <G>
            <G
              filter='url(#iojn84sv0a)'
              transform='translate(-261 -711) translate(65 698) translate(24 13)'
            >
              <G fill='white' fill-rule='nonzero'>
                <Path
                  d='M23.958 11.458c-.575 0-1.041.467-1.041 1.042 0 5.744-4.673 10.417-10.417 10.417S2.083 18.244 2.083 12.5 6.756 2.083 12.5 2.083c2.796 0 5.421 1.093 7.392 3.077.405.409 1.065.411 1.473.006.408-.406.41-1.065.005-1.473C19.006 1.31 15.855 0 12.5 0 5.607 0 0 5.607 0 12.5S5.607 25 12.5 25 25 19.393 25 12.5c0-.575-.467-1.042-1.042-1.042z'
                  transform='translate(172)'
                />
                <Path
                  d='M16.667 11.458h-3.125V8.333c0-.575-.467-1.041-1.042-1.041s-1.042.466-1.042 1.041v3.125H8.333c-.575 0-1.041.467-1.041 1.042s.466 1.042 1.041 1.042h3.125v3.125c0 .575.467 1.041 1.042 1.041s1.042-.466 1.042-1.041v-3.125h3.125c.575 0 1.041-.467 1.041-1.042s-.466-1.042-1.041-1.042z'
                  transform='translate(172)'
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
