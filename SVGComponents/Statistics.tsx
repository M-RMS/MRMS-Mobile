import * as React from 'react'
import Svg, { Defs, G, Path, SvgProps } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#A4998D', ...props }: SvgProps) => {
    return (
        <Svg width={25} height={25} viewBox='0 0 25 25' {...props}>
            <Defs></Defs>
            <G
                //filter='url(#prefix__a)'
                transform='translate(-62)'
                fill={fill}
                fillRule='evenodd'
            >
                <G fill={fill} fillRule='nonzero'>
                    <Path d='M65.71 11.719c.592 0 1.127-.237 1.522-.618l2.168 1.084c-.01.088-.027.175-.027.266a2.2 2.2 0 002.197 2.197 2.2 2.2 0 002.198-2.197c0-.338-.084-.655-.22-.941l2.94-2.941c.287.137.604.22.942.22a2.2 2.2 0 002.197-2.197c0-.228-.045-.444-.11-.651l2.556-1.916c.348.233.766.37 1.216.37a2.2 2.2 0 002.197-2.198A2.2 2.2 0 0083.29 0a2.2 2.2 0 00-2.197 2.197c0 .228.045.444.11.651l-2.556 1.916a2.184 2.184 0 00-1.216-.37 2.2 2.2 0 00-2.198 2.198c0 .338.084.655.22.941l-2.94 2.941a2.178 2.178 0 00-.942-.22c-.59 0-1.125.237-1.52.618L67.88 9.788c.011-.089.027-.175.027-.267a2.2 2.2 0 00-2.197-2.197 2.2 2.2 0 00-2.197 2.197 2.2 2.2 0 002.197 2.198z' />
                    <Path d='M86.268 23.535h-.782V8.057a.732.732 0 00-.732-.733h-2.93a.732.732 0 00-.732.733v15.478h-1.465V12.451a.732.732 0 00-.732-.732h-2.93a.732.732 0 00-.733.732v11.084h-1.464v-5.224a.733.733 0 00-.733-.733h-2.93a.733.733 0 00-.732.733v5.224h-1.465v-8.154a.732.732 0 00-.732-.733h-2.93a.732.732 0 00-.732.733v8.154h-.782a.733.733 0 000 1.465h23.536a.732.732 0 000-1.465z' />
                </G>
            </G>
        </Svg>
    )
}
