import React, { useState } from 'react'
import Section from '~/components/Section'
import Touchable from '~/components/Touchable'
import Typography from '~/components/Typography'
import UserCard from '~/components/UserCard'
import { FlatList, RefreshControl } from 'react-native'
import { wp } from '~/utils/responsive'
import useUserM from '~/hooks/useUserM'
import Division from '~/components/Division'
import { useDispatch } from 'react-redux'
import RandomNumberAction from '~/redux/actions/RandomNumberAction'

export default () => {
  const dispatch = useDispatch()
  const { data } = useUserM(5)
  const [refreshing, setRefreshing] = useState(false)
  const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  }
  const onRefresh = React.useCallback(() => {
    dispatch(RandomNumberAction(Math.random()))
    setRefreshing(true)

    wait(1500).then(() => setRefreshing(false))
  }, [])


  return (
    <Section>
      <FlatList
        refreshControl={<RefreshControl
          colors={['#303E65']}
          refreshing={refreshing}
          onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={data.id}
        data={data}
        renderItem={({ item }) => {
          return (
            <>
              <UserCard item={item} />
              {data.indexOf(item) == data.length - 1 ? <Division marginVertical={wp(10)} /> : <Division />}
            </>
          )
        }}
      />

    </Section>
  )
}