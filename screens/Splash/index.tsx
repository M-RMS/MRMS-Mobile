import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import DotsVertical from '~/SVGComponents/DotsVertical'
import Camera from '~/SVGComponents/PhotoCamera'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import Image from '~/components/Image'
import { KeyboardAvoidingView, TextInput } from 'react-native'


import { MenuProvider } from 'react-native-popup-menu'

export default () => {

  return (
    <Division
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='#1FB9FC'>


      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(180)}
        height={wp(180)}
        borderRadius={wp(180) / 2}
        opacity={0.1} />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(160)}
        height={wp(160)}
        borderRadius={wp(160) / 2}
        opacity={0.1} />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(140)}
        height={wp(140)}
        borderRadius={wp(140) / 2}
        opacity={0.1} />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(120)}
        height={wp(120)}
        borderRadius={wp(120) / 2}
        opacity={0.2} />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(100)}
        height={wp(100)}
        borderRadius={wp(100) / 2}
        opacity={0.3} />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(80)}
        height={wp(80)}
        borderRadius={wp(80) / 2}
        opacity={0.5}
      />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(60)}
        height={wp(60)}
        borderRadius={wp(60) / 2}
        opacity={0.6}
      />
      <Division
        position='absolute'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#ffffff'
        width={wp(40)}
        height={wp(40)}
        borderRadius={wp(40) / 2}
        opacity={0.7}
      />
      <Division
        position='absolute'>
        <RiskManagement fill={'#1FB9FC'} width={100} height={100} />
      </Division>
    </Division>
  )
}
/*

              <Division
                height={wp(30)}
                width={wp(30)}
                opacity={1}>
                <Image
                  source={require('../assets/images/risk-management.png')}
                  style={{
                    width: wp(30),
                    height: wp(30),
                    borderTopLeftRadius: wp(4),
                    borderBottomLeftRadius: wp(4),
                    flex: 1,
                    resizeMode: 'cover'
                  }} />
              </Division>
            </Division>
          </Division>
        </Division>
*/