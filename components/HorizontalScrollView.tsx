import React, { ReactNode } from 'react'
import { ScrollView } from 'react-native'

import Division from '~/components/Division'
import useTheme from '~/hooks/useTheme'

interface Props<T> {
  data: T[]
  renderItem({ item, key }: { item: T; key: number }): ReactNode
  loading?: boolean
}

const HorizontalScrollView = <T,>({
  data,
  renderItem,
  loading,
  ...rest
}: Props<T>) => {
  const theme = useTheme()

  return (
    <ScrollView
      {...rest}
      pagingEnabled={true}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      decelerationRate={'normal'}
      scrollEnabled={!loading}
      snapToInterval={1}
      contentContainerStyle={{
        paddingVertical: theme.spacing.itemGutter,
        paddingHorizontal: theme.spacing.bodyWrapper
      }}
      style={{
        overflow: 'visible',
        marginHorizontal: -(
          theme.spacing.bodyWrapper + theme.spacing.itemGutter
        )
      }}>
      {data.map((item, key) => (
        <Division
          withShadow
          key={key}
          marginHorizontal={theme.spacing.itemGutter}>
          {renderItem({ item, key })}
        </Division>
      ))}
    </ScrollView>
  )
}

export default HorizontalScrollView
