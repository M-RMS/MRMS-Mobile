import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import Home from '~/SVGComponents/Home'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import Image from '~/components/Image'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { MenuProvider } from 'react-native-popup-menu'
export default () => {

  const [state, setState] = useState('uk')

  return (
    <>
      <MenuProvider>
        <Division
          height={wp(30)}
          alignSelf='stretch'
          backgroundColor='#1FB9FC'
          justifyContent='center'
          alignItems='flex-start'

        >
          <Division
            marginTop={wp(3)}
            flexDirection='row'
            justifyContent='space-around'
            marginHorizontal={wp(5)}
          >
            <Division
              alignItems='center'
              justifyContent='center'
              width={wp(17)}
              height={wp(13)}
              marginRight={wp(2)}
            >
              <RiskManagement />
            </Division>
            <Division
              borderColor='#ffffff'
              borderStyle='solid'
              borderLeftWidth={1}
              opacity={0.5}
            />
            <Division marginLeft={wp(2)}>
              <Typography
                fontSize={wp(5)}
                fontWeight='bold'
                letterSpacing={0.33}
                color='#ffffff'
              >
                Profili Düzenle
            </Typography>
              <Typography
                opacity={0.6}
                fontSize={wp(4)}
                color='#ffffff'
                letterSpacing={0.4}
                lineHeight={wp(5)}
              >
                Mert Mehmet Ezgin
              </Typography>
            </Division>
          </Division>
          <Division
            width={wp(100)}
            alignItems='center'
            position='absolute'
            bottom={-wp(6)}>
          </Division>
          <Touchable
            activeOpacity={1}
            position='absolute'
            zIndex={999}
            right={wp(0)}
            top={wp(10)}>
            <View>
              <Menu>
                <MenuTrigger children={<Division
                  width={wp(10)}
                  height={wp(10)}
                  justifyContent='center'
                  alignItems='center'>
                  <DotsVertical />
                </Division>} />
                <MenuOptions customStyles={optionsStyles}>
                  <MenuOption onSelect={() => { }} text='Yenile' />
                  <MenuOption onSelect={() => { }} text='Çıkış Yap' />
                </MenuOptions>
              </Menu>
            </View>
          </Touchable>
        </Division>

        <Division
          width={wp(88)}
          paddingHorizontal={wp(5)}
          height={hp(70)}
          backgroundColor='#ffffff'
          borderRadius={wp(4)}
          marginHorizontal={wp(6)}
          marginTop={wp(10)}
        >
          <Division
            alignItems='center'>


            <Division
              height={wp(30)}
              width={wp(30)}
              borderRadius={wp(30 / 2)}
              marginTop={-wp(8)}
            >
              <Image
                source={{ uri: 'http://placeimg.com/500/500/people?74161' }}
                style={{
                  width: wp(30),
                  height: wp(30),
                  borderRadius: wp(30 / 2),
                  borderWidth: 5,
                  borderColor: '#ffffff',
                  flex: 1,
                  resizeMode: 'cover'
                }} />
            </Division>
          </Division>
          <Typography>Adınız: </Typography>
          <Typography>E-mail Adresiniz: </Typography>
          <Typography>Yetkiniz: </Typography>

          <Typography>Adınız: </Typography>
          <Typography>Adınız: </Typography>
          <Typography>Adınız: </Typography>

        </Division>



      </MenuProvider>
      <TabNavMaintainer />
    </>
  )
}
const optionsStyles = {
  optionsContainer: {
    backgroundColor: '#ffffff',
    padding: 1,
  },
  optionsWrapper: {
    backgroundColor: '#ffffff',
  },
  optionWrapper: {
    backgroundColor: '#ffffff',
    margin: 5,
  },
  optionTouchable: {
    underlayColor: '#ffffff',
    activeOpacity: 70,
  },
  optionText: {
    color: '#222F5A',
    fontSize: wp(3.5)
  },
}