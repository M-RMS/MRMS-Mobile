import React from 'react'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'

export default () => {
  return (
    <Touchable >
      <Division
        alignItems='center'
        justifyContent='center'
        marginVertical={hp(2)}
        marginHorizontal={wp(5)}
        overflow="scroll"
        onPress={() => console.warn('')}
        width={wp(90)}
        height={wp(65)} >
        <Image
          source={require('~/assets/images/BillboardAreas.png')}
          style={{
            borderRadius: wp(1),
            flex: 1,
            resizeMode: 'contain'
          }} />
      </Division>
    </Touchable>
  )
}
