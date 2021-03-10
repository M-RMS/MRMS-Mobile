import React from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
export default () => {

  return (
    <>
      <Division flex={1} justifyContent='center' alignItems='center'>
        <Typography>Bakımcı</Typography>
      </Division>
    </>
  )
}
