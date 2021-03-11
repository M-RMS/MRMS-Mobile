import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import TaskCard from './DailyTasks'
export default () => {

  const [state, setState] = useState('uk')

  return (
    <>

      <TaskCard />

    </>
  )
}
