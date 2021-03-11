import React from 'react'
import Section from '~/components/Section'
import Touchable from '~/components/Touchable'
import Typography from '~/components/Typography'
import TaskCard from '~/components/DailyTasks'
import { FlatList } from 'react-native'
import { wp } from '~/utils/responsive'
import useDailyTasks from '~/hooks/useDailyTasks'

export default () => {
  const { data } = useDailyTasks(2)

  return (
    <Section title="Günün Bakımları" >
      <FlatList
        keyExtractor={data.id}
        data={data}
        renderItem={({ item }) => {
          return (
            <TaskCard item={item} />
          )
        }}
      />
    </Section>
  )
}