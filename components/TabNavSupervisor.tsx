import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { wp } from '~/utils/responsive'
import Division from './Division'
import Profile from '~/SVGComponents/Profile'
import Home from '~/SVGComponents/Home'
import History from '~/SVGComponents/History'
import Touchable from './Touchable'


export default () => {

  const mode = 'EditAsSupervisorMaintainer'

  const { navigate } = useNavigation()
  return (
    <Division alignItems='center' width={wp(100)} position='absolute' bottom={wp(4.8)} zIndex={999}>
      <Division
        //borderWidth={1}
        //borderColor='#303E65'
        width={wp(65)}
        height={wp(13.6)}
        backgroundColor='#1FB9FC'
        borderRadius={wp(6.5)}
        flexDirection='row'
        alignItems='center'
        justifyContent='space-evenly'>
        <Touchable
          onPress={() => { navigate('log') }}>
          <History />
        </Touchable>
        <Touchable
          onPress={() => {
            let a = [mode]
            navigate('profile', a)
          }}>
          <Home />
        </Touchable>
        <Touchable
          onPress={() => { navigate('profile') }}>
          <Profile />
        </Touchable>
      </Division>
    </Division>
  )
}
