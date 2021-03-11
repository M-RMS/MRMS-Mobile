import React from 'react'
import Section from '~/components/Section'
import Touchable from '~/components/Touchable'
import Typography from '~/components/Typography'
import TaskCard from '~/components/DailyTasks'
import { FlatList } from 'react-native'
import { wp } from '~/utils/responsive'
import useDailyTasks from '~/hooks/useDailyTasks'
import Division from '~/components/Division'

export default () => {
  const { data } = useDailyTasks(5)

  return (
    <Section>
      <FlatList

        showsVerticalScrollIndicator={false}
        keyExtractor={data.id}
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