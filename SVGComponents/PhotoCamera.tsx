import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps, Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svG: filter */

export default ({ opacity = 1, fill, ...props }: SvgProps) => {
  return (
    <Svg width={50} height={42} viewBox='0 0 50 42' {...props}>
      <Defs></Defs>
      <G fill='none' fill-rule='evenodd'>
        <G>
          <G>
            <G
              filter='url(#owjrbcmxha)'
              transform='translate(-162 -512) translate(20 481) translate(121 31)'
            >
              <G fill='#51BCDA' fill-rule='nonzero' transform='translate(21)'>
                <Circle cx='25' cy='24.902' r='7.91' />
                <Path d='M36.552 4.883l-.505-2.528C35.774.991 34.566 0 33.174 0H16.826c-1.392 0-2.6.99-2.873 2.355l-.505 2.528h23.104zM45.605 7.813H4.395C1.97 7.813 0 9.783 0 12.207v25.39c0 2.424 1.971 4.395 4.395 4.395h41.21c2.424 0 4.395-1.971 4.395-4.394V12.207c0-2.423-1.971-4.395-4.395-4.395zM12.5 16.992H7.812c-.808 0-1.464-.657-1.464-1.466 0-.809.656-1.464 1.465-1.464H12.5c.809 0 1.465.655 1.465 1.464 0 .81-.656 1.465-1.465 1.465zM25 35.742c-5.977 0-10.84-4.864-10.84-10.84 0-5.978 4.863-10.84 10.84-10.84 5.977 0 10.84 4.862 10.84 10.84 0 5.976-4.863 10.84-10.84 10.84z' />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
