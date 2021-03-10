import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { BillboardCategory } from '~/hooks/useBillboardCategory'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'
const directionMap: any = {
  vertical: {
    x: 'row',
    y: 'column'
  },
  horizontal: {
    x: 'column',
    y: 'row'
  }
}

interface BillboardCategoryCardProps {
  item: BillboardCategory
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical, onPress }: BillboardCategoryCardProps) => {
  const theme = useTheme()
  const { navigate } = useNavigation()
  const { top, left, right, bottom } = theme.spacing.insets
  const direction = directionMap[vertical ? 'vertical' : 'horizontal']
  const paddingStyles = vertical
  const yz = '~/assets/images/BillboardCategory3.png'
    ? {}
    : {
      paddingTop: top,
      paddingBottom: bottom
    }
  const layoutTrick = vertical
    ? {}
    : {
      marginHorizontal: -20,
      paddingHorizontal: 20
    }

  if (!item) {
    return (
      <Division
        {...layoutTrick}
        flexDirection={direction.y}
        overflow="hidden"
        backgroundColor="white"
        withBorderRadius
        width={vertical ? wp(70) : 'auto'}
        height={vertical ? hp(20) : 'auto'}>
        <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow="hidden" marginHorizontal={wp(1)}>
          <Skeleton />
        </Division>
      </Division>
    )
  }

  return (
    <Division
      marginHorizontal={10}
      {...layoutTrick}
      flexDirection={direction.y}
      overflow="scroll"
      backgroundColor="white"
      withBorderRadius
      onPress={() => { console.warn(item.title) }}
      width={vertical ? wp(70) : 'auto'}
      height={vertical ? hp(20) : 'auto'}>
      <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow="scroll">
        <Image
          source={item.btype
            == 'Normal'
            ? require('~/assets/images/BillboardCategory3.png')
            : item.btype == 'Led'
              ? require('~/assets/images/LedCategory3.png')
              : require('~/assets/images/RaketCategory3.png')}
          style={{
            width: '100%',
            flex: 1,
            height: 'auto',
            resizeMode: 'cover'
          }}
        />
        <Division
          width={vertical ? wp(70) : 'auto'}
          height={vertical ? hp(20) : 'auto'}
          position='absolute'
          zIndex={96}
          justifyContent='space-around'
          marginLeft={vertical ? wp(3) : 'auto'}>
          <Division
            elevation={10}
            justifyContent='space-around'>
            <Typography
              paddingLeft={2}
              paddingRight={2}
              color='#ffffff'
              fontSize={wp(4.5)}
              fontWeight='bold'
              letterSpacing={0.27}>
              {item.title}
            </Typography>
            <Typography
              color='#ffffff'
              width={126}
              height={18}
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              letterSpacing={0.4} >
              {item.detail}
            </Typography>
          </Division>
          <Division
            justifyContent='center'>
            <Typography
              color='#ffffff'
              paddingLeft={2}
              paddingRight={2}
              fontSize={wp(3)}
              fontWeight='semi-bold'
              letterSpacing={0.02}>
              {item.total} Toplam
                </Typography>
          </Division>
        </Division>
      </Division>
    </Division>
  )
}
