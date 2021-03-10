import React from 'react'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Image from '~/components/Image'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'
import { Entypo } from '@expo/vector-icons'

export default () => {
  return (
    <Division
      width={wp(90)}
      height={wp(60)}
      backgroundColor='white'
      borderRadius={wp(6)}>
      <Division
        marginHorizontal={wp(5)}
        marginTop={wp(5)}>
        <Typography
          fontSize={wp(4)}
          lineHeight={wp(5)}
          letterSpacing={0.46}
          color='#222f5a'>Bilgilendirme</Typography>
        <Typography
          marginVertical={wp(2)}
          fontSize={wp(3.5)}
          lineHeight={wp(5.5)}
          letterSpacing={0}
          color='#8898aa'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </Typography>
      </Division>
      <Division alignSelf='stretch' borderWidth={1} marginHorizontal={wp(5.5)} borderColor='#EDF0F3' />
      <Division
        justifyContent='center'
        marginHorizontal={wp(5)}
        marginVertical={wp(3)}>
        <Division
          flexDirection='row'
          alignItems='center'
          marginBottom={wp(2)}>
          <Division width={wp(2)} height={wp(2)} borderRadius={wp(1)} backgroundColor='#a7c316' marginRight={wp(3)} />
          <Typography
            fontSize={wp(14 / 4)}
            color='#222f5a'>Güncel Reklam Alanı</Typography>
        </Division>
        <Division
          flexDirection='row'
          alignItems='center'
          marginBottom={wp(2)}>
          <Division width={wp(2)} height={wp(2)} borderRadius={wp(1)} backgroundColor='#ebe110' marginRight={wp(3)} />
          <Typography
            fontSize={wp(14 / 4)}
            color='#222f5a'>Güncel Olmayan Reklam Alanı</Typography>
        </Division>
        <Division
          flexDirection='row'
          alignItems='center'
          marginBottom={wp(2)}>
          <Division width={wp(2)} height={wp(2)} borderRadius={wp(1)} backgroundColor='#e20a17' marginRight={wp(3)} />
          <Typography
            fontSize={wp(14 / 4)}
            color='#222f5a'>Asım Gerçekleşmemiş</Typography>
        </Division>
        <Division
          flexDirection='row'
          alignItems='center'
          marginBottom={wp(2)}>
          <Division width={wp(2)} height={wp(2)} borderRadius={wp(1)} backgroundColor='#8898aa' marginRight={wp(3)} />
          <Typography
            color='#222f5a'
            fontSize={wp(14 / 4)}>Arızalı Reklam Alanı</Typography>
        </Division>
      </Division>
      <Division
        position='absolute'
        top={wp(4)}
        right={wp(4)}>
        <Touchable><Entypo name="cross" size={wp(6)} color="#AEAEAE" /></Touchable>
      </Division>
    </Division>
  )
}
