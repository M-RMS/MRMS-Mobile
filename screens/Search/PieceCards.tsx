import React, { useState } from 'react'
import Section from '~/components/Section'
import Touchable from '~/components/Touchable'
import Typography from '~/components/Typography'
import PieceCard from '~/components/PieceCard'
import { FlatList, RefreshControl } from 'react-native'
import { wp } from '~/utils/responsive'
import usePieces from '~/hooks/usePieces'
import Division from '~/components/Division'

export default () => {
  const { data } = usePieces(5)
  const [refreshing, setRefreshing] = useState(false)
  const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(5000).then(() => setRefreshing(false))
  }, [])

  return (
    <Section>
      <FlatList
        style={{ paddingHorizontal: wp(5) }}
        refreshControl={<RefreshControl
          colors={['#303E65']}
          refreshing={refreshing} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={data.id}
        data={data}
        renderItem={({ item }) => {
          return (
            <>
              <PieceCard item={item} />
              {data.indexOf(item) == data.length - 1 ? <Division marginVertical={wp(10)} /> : <Division />}
            </>
          )
        }}
      />

    </Section>
  )
}