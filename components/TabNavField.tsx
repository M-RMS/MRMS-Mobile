import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { wp } from '~/utils/responsive'
import Division from './Division'
import Map1 from './SVGComponents/Map1'
import Touchable from './Touchable'
import AddButton from './SVGComponents/AddButton'
import HBB from './SVGComponents/HBB'

export default () => {
  const { navigate } = useNavigation()
  return (
    <Division
      alignItems='center'
      width={wp(100)}
      position='absolute'
      bottom={wp(4.8)}
      zIndex={999}
    >
      <Division
        width={wp(65)}
        height={wp(13.6)}
        backgroundColor='#3B7694'
        borderRadius={wp(6.5)}
        flexDirection='row'
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Touchable
          onPress={() => {
            navigate('MainF')
          }}
        >
          <HBB />
        </Touchable>
        <Touchable
          onPress={() => {
            navigate('Map')
          }}
        >
          <Map1 />
        </Touchable>
        <Touchable
          onPress={() => {
            navigate('OfficerAdding')
          }}
        >
          <AddButton />
        </Touchable>
      </Division>
    </Division>
  )
}
