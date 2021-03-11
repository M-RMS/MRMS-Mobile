import React from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import { useNavigation } from '@react-navigation/native'
export default () => {
  const { navigate } = useNavigation()

  return (
    <>
      <Division flex={1} justifyContent='center' alignItems='center'>
        <Touchable
          width={wp(60)}
          height={wp(10)}
          borderWidth={2}
          borderColor='#BB86C0'
          borderRadius={wp(7)}
          justifyContent='center'
          alignItems='center'
          onPress={() => {
            navigate('indexAdmin')
          }}>
          <Typography
            color='#BB86C0'
            fontSize={wp(5)}
            fontWeight='semi-bold'>
            Yönetici
          </Typography>
        </Touchable>
        <Touchable
          marginVertical={wp(5)}
          width={wp(60)}
          height={wp(10)}
          borderWidth={2}
          borderColor='#4EC9A4'
          borderRadius={wp(7)}
          justifyContent='center'
          alignItems='center'
          onPress={() => {
            navigate('indexSupervisor')
          }}>
          <Typography
            color='#4EC9A4'
            fontSize={wp(5)}
            fontWeight='semi-bold'>
            Gözlemci
          </Typography>
        </Touchable>
        <Touchable
          width={wp(60)}
          height={wp(10)}
          borderWidth={2}
          borderColor='#9CDCFE'
          borderRadius={wp(7)}
          justifyContent='center'
          alignItems='center'
          onPress={() => {
            navigate('indexMaintainer')
          }}>
          <Typography
            color='#9CDCFE'
            fontSize={wp(5)}
            fontWeight='semi-bold'>
            Bakımcı
          </Typography>
        </Touchable>
      </Division>
    </>
  )
}
