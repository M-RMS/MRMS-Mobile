import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { wp } from '~/utils/responsive'
import Division from './Division'
import Profile from '~/SVGComponents/Profile'
import Home from '~/SVGComponents/Home'
import Categories from '~/SVGComponents/Categories'
import Touchable from './Touchable'

export default () => {
  const { navigate } = useNavigation()
  return (
    <Division alignItems='center' width={wp(100)} position='absolute' bottom={wp(4.8)} zIndex={999}>
      <Division
        width={wp(65)}
        height={wp(13.6)}
        backgroundColor='#1FB9FC'
        borderRadius={wp(6.5)}
        flexDirection='row'
        alignItems='center'
        justifyContent='space-evenly'>
        <Touchable
          onPress={() => { console.warn('') }}>
          <Categories />
        </Touchable>

        <Touchable
          onPress={() => { console.warn('') }}>
          <Home />
        </Touchable>
        <Touchable
          onPress={() => { console.warn('') }}>
          <Profile />
        </Touchable>
      </Division>
    </Division>
  )
}
