import React, { useState } from 'react'
import Section from '~/components/Section'
import TaskCard from '~/components/DailyTasks'
import { FlatList, RefreshControl } from 'react-native'
import { wp } from '~/utils/responsive'
import useDailyTasks from '~/hooks/useDailyTasks'
import Division from '~/components/Division'
import { useDispatch } from 'react-redux'
import RandomNumberAction from '~/redux/actions/RandomNumberAction'

export default () => {
  const dispatch = useDispatch()
  const { data } = useDailyTasks(5)
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
        keyExtractor={data.mID}
        data={data}
        renderItem={({ item }) => {
          return (
            <>
              <TaskCard item={item} />
              {data.indexOf(item) == data.length - 1 ? <Division marginVertical={wp(10)} /> : <Division />}
            </>
          )
        }}
      />

    </Section>
  )
}
/*
    <Section>
      <FlatList
        refreshControl={<RefreshControl
          colors={['#303E65']}
          refreshing={refreshing} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={data.pieceName}
        data={data}
        renderItem={({ item }) => {
          return (
            <>
              <TaskCard item={item} />
              {data.indexOf(item) == data.length - 1 ? <Division marginVertical={wp(10)} /> : <Division />}
            </>
          )
        }}
      />

      </Section>*/