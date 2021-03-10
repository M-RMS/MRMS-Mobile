import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { wp } from '~/utils/responsive'
import Division from './Division'
import GraphicDesign from './SVGComponents/GraphicDesign'
import Map1 from './SVGComponents/Map1'
import Statistics from './SVGComponents/Statistics'
import AddButton from './SVGComponents/AddButton'
import Touchable from './Touchable'
import HBB from "./SVGComponents/HBB"
import Typography from './Typography'

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
            navigate('MainD')
          }}
        >
          <Typography color='#ffffff' fontWeight='bold' fontSize={wp(5)}>
            <HBB />
          </Typography>
        </Touchable>
        <Touchable
          onPress={() => {
            navigate('DesignsD')

          }}
        >
          <GraphicDesign />
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
            navigate('Adding')
          }}
        >
          <AddButton />
        </Touchable>
      </Division>
    </Division>
  )
}
