import React, { useEffect, useState } from 'react'
import Touchable from '~/components/Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import useTheme from '~/hooks/useTheme'
import { useNavigation, useRoute } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'
import ArrowDown from '~/SVGComponents/ArrowDown'
import UpArrow from '~/SVGComponents/UpArrow'
import BackArrow from '~/SVGComponents/BackArrow'

export interface propsTasks {
  id: number
  pieceId: number
  pieceName: String
  pieceImageUrl: string
  type: Type
  maintenance: String
  isDone: boolean
  riskLevel: number
}
enum Type {
  Daily = 'Günlük Bakım',
  Weekly = 'Haftalık Bakım',
  Monthly = 'Aylık Bakım',
  HalfYearly = '6 Aylık Bakım',
  Yearly = 'Yıllık Bakım'
}

export default () => {
  const { navigate } = useNavigation()
  const theme = useTheme()
  const { goBack } = useNavigation()
  const route = useRoute()

  let itemData: propsTasks = route.params
  useEffect(() => {
    console.log(itemData)
  }, [])
  return (
    <Division>
      <Division
        height={wp(60)}
        width={wp(100)}
      >
        <Image
          source={{ uri: itemData.pieceImageUrl }}
          style={{
            width: '100%',
            flex: 1,
            height: 'auto',
            resizeMode: 'cover'
          }} />
        <Division
          backgroundColor='black'
          opacity={0.25}
          position='absolute'

          top={0}
          left={0}
          height={wp(60)}
          width={wp(100)}>

        </Division>
      </Division>
      <Touchable
        width={wp(10)}
        height={wp(10)}
        justifyContent='center'
        alignItems='center'

        top={wp(7)}
        left={wp(4)}
        position='absolute'

        onPress={() => { goBack() }}>
        <BackArrow fill={'white'} />
      </Touchable>
    </Division>
  )
}