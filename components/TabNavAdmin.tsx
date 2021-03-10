import { useNavigation } from "@react-navigation/native"
import React from "react"
import { wp } from "~/utils/responsive"
import Division from "./Division"
import GraphicDesign from "./SVGComponents/GraphicDesign"
import Map1 from "./SVGComponents/Map1"
import HBB from "./SVGComponents/HBB"
import Statistics from "./SVGComponents/Statistics"
import Touchable from "./Touchable"

export default () => {
  const { navigate } = useNavigation()
  return (
    <Division alignItems='center' width={wp(100)} position='absolute' bottom={wp(4.8)} zIndex={999}>
      <Division
        width={wp(65)}
        height={wp(13.6)}
        backgroundColor='#3B7694'
        borderRadius={wp(6.5)}
        flexDirection='row'
        alignItems='center'
        justifyContent='space-evenly'>
        <Touchable
          onPress={() => { navigate('MainA') }}>
          <HBB />
        </Touchable>
        {/* <Division
        >
          <Statistics />
        </Division>*/}
        <Touchable
          onPress={() => { navigate('Map') }}>
          <Map1 />
        </Touchable>
        <Touchable
          onPress={() => { navigate('DesignsA') }}>
          <GraphicDesign />
        </Touchable>
      </Division>
    </Division>
  )
}
