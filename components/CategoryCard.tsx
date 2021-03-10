import LinearGradient from 'expo-linear-gradient/build/LinearGradient'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

import Image from './Image'
import Skeleton from './Skeleton'

import Division from '~/components/Division'
import Typography from '~/components/Typography'
import { Category } from '~/hooks/useCategories'
import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'

export interface CategoryCardProps {
  item?: Category
}

const formatNumber = (num: number): string =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

export default ({ item }: CategoryCardProps) => {
  const theme = useTheme()

  if (!item) {
    return <Skeleton />
  }

  return (
    <Division justifyContent="flex-end" flex={1} position="relative">
      <Image
        containerStyle={StyleSheet.absoluteFillObject}
        source={{ uri: item.url }}
        style={[
          StyleSheet.absoluteFillObject,
          { borderRadius: theme.borderRadius }
        ]}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={[
          StyleSheet.absoluteFillObject,
          { borderRadius: theme.borderRadius }
        ]}
      />
      <Division flexDirection="row" marginBottom={wp(4)}>
        <Division
          borderLeftWidth={wp(1)}
          borderColor={theme.colors.primary}
          marginRight={10}
        />
        <View>
          <Typography
            fontSize={theme.fontSize.h3}
            letterSpacing={0.36}
            color="#fff">
            {item.title}
          </Typography>
          <Typography
            fontSize={theme.fontSize.h5}
            letterSpacing={0.36}
            color="#fff"
            opacity={0.7}>
            {formatNumber(item.value)}
          </Typography>
        </View>
      </Division>
    </Division>
  )
}
