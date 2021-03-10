import { useNavigation } from '@react-navigation/native'
import React from 'react'

import Skeleton from './Skeleton'
import Touchable from './Touchable'

import Division from '~/components/Division'
import Icon from '~/components/Icon'
import Image from '~/components/Image'
import Floor from '~/components/SVGComponents/Floor'
import Meter from '~/components/SVGComponents/Meter'
import Room from '~/components/SVGComponents/Room'
import Typography from '~/components/Typography'
import { Advertisement } from '~/hooks/useAdvertisements'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'
const directionMap: any = {
  vertical: {
    x: 'row',
    y: 'column',
  },
  horizontal: {
    x: 'column',
    y: 'row',
  },
}

interface AdvertisementCardProps {
  item: Advertisement
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical, onPress }: AdvertisementCardProps) => {
  const theme = useTheme()
  const { navigate } = useNavigation()
  const { top, left, right, bottom } = theme.spacing.insets
  const direction = directionMap[vertical ? 'vertical' : 'horizontal']
  const paddingStyles = vertical
    ? {}
    : {
      paddingTop: top,
      paddingBottom: bottom,
    }
  const layoutTrick = vertical
    ? {}
    : {
      marginHorizontal: wp(8) / 4,
      // paddingTop: wp(2.58),
      // paddingBottom: wp(2.2),
      paddingRight: wp(3.73),
      paddingLeft: wp(5.3),
    }

  if (!item) {
    return (
      <Division
        {...layoutTrick}
        flexDirection={direction.y}
        overflow='hidden'
        backgroundColor='white'
        withBorderRadius
        width={vertical ? wp(50) : wp(80)}
        height={vertical ? hp(40) : hp(15)}
      >
        <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow='hidden'>
          <Skeleton />
        </Division>
        <Division
          paddingTop={top}
          paddingRight={right}
          paddingLeft={left}
          paddingBottom={bottom}
          flex={vertical ? 5 : 2}
        >
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }

  return (
    <Touchable
      {...layoutTrick}
      flexDirection={direction.y}
      overflow='hidden'
      backgroundColor='white'
      withBorderRadius
      onPress={() => navigate('Advertisement')}
      width={vertical ? wp(53.3) : wp(83.4)} // auto
      height={vertical ? hp(38.7) : hp(16.6)} // auto
    >
      <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow='hidden'>
        <Image
          source={{ uri: item.url }}
          style={{
            width: '100%',
            flex: 1,
            height: 'auto',
            resizeMode: 'cover',
          }}
        />
      </Division>
      <Division
        paddingTop={top}
        paddingRight={right}
        paddingLeft={left}
        paddingBottom={bottom}
        flex={vertical ? 5 : 2}
      >
        <Typography
          fontSize={wp(4.5)}
          color='#193254'
          letterSpacing={0.4}
          numberOfLines={2}
        >
          {item.title}
        </Typography>
        <Division flexDirection='row' justifyContent='space-between'>
          <Division flexDirection='row' alignItems='center'>
            <Room width={25} height={24} fill='#888' />
            <Typography
              fontSize={theme.fontSize.h6}
              color='#9a9797'
              paddingLeft={2}
              paddingRight={2}
            >
              {item.room}
            </Typography>
          </Division>
          <Division flexDirection='row' alignItems='center'>
            <Floor width={22} height={20} fill='#888' />
            <Typography
              fontSize={theme.fontSize.h6}
              color='#9a9797'
              paddingLeft={2}
              paddingRight={2}
            >
              {item.floor}
            </Typography>
          </Division>
          <Division flexDirection='row' alignItems='center'>
            <Meter width={20} height={18} fill='#888' />
            <Typography
              fontSize={theme.fontSize.h6}
              color='#9a9797'
              paddingLeft={2}
              paddingRight={2}
            >
              {item.m2}
            </Typography>
          </Division>
        </Division>
        <Division
          flexDirection={'row'}
          borderTopWidth={vertical ? 1 : 0}
          paddingVertical={vertical ? 6 : hp(1)}
          marginVertical={vertical ? 6 : hp(1)}
          borderTopColor={'rgba(0,0,0,0.1)'}
          justifyContent='space-between'
          alignItems='center'
        >
          <Division flexDirection='row' alignItems='center'>
            {(item.distance !== '' && item.distance !== undefined) && (
              <>
                <Icon
                  size={15}
                  color='#8490a6'
                  name='md-navigate'
                  style={{ marginRight: 3 }}
                />
                <Typography
                  fontSize={theme.fontSize.h6}
                  color='#8590a4'
                  letterSpacing={0.3}
                >
                  {item.distance}
                </Typography>
              </>
            )}
            {(item.distance === '' || item.distance === undefined) && (
              <>
                <Icon
                  size={15}
                  color='#8490a6'
                  name='md-pin'
                  style={{ marginRight: 3 }}
                />
                <Typography
                  fontSize={theme.fontSize.h6}
                  color='#8590a4'
                  letterSpacing={0.3}
                >
                  {item.city}
                </Typography>
              </>
            )}
          </Division>
          <Typography
            fontSize={theme.fontSize.h5}
            color='#193254'
            letterSpacing={0.4}
          >
            {item.price}
          </Typography>
        </Division>
      </Division>
    </Touchable>
  )
}
