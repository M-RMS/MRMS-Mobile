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
import { useDispatch, useSelector } from 'react-redux'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavAdmin from '~/components/TabNavAdmin'
//import { TextInput } from 'react-native-paper'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { MenuProvider } from 'react-native-popup-menu'

export default () => {
  const yetki = useSelector((state) => state.Role.str)
  const [pw, setPw] = useState('')
  const [text, setText] = useState('')
  const [pwVisibility, setPwVisibility] = useState(false)
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
                  <MenuOption onSelect={() => { }} text='Şifreni Değiştir' />
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
          height={hp(67)}
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
              <Touchable
                backgroundColor='#ffffff'
                width={wp(9)}
                height={wp(9)}
                borderRadius={wp(9) / 2}
                justifyContent='center'
                alignItems='center'
                position='absolute'
                bottom={wp(0)}
                right={wp(0)}>

                <Camera width={wp(6)} height={wp(6)} />
              </Touchable>
            </Division>
          </Division>
          <KeyboardAvoidingView behavior='padding' enabled>
            <Division
              marginTop={wp(15)}
              flexDirection='row'
              justifyContent='space-between'>
              <Typography
                fontSize={wp(3.5)}
                fontWeight='bold'
              >
                İsim
                </Typography>
              <TextInput
                autoCapitalize='none'
                style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
                placeholderTextColor='#8898aa'
                placeholder='Mert Mehmet Ezgin'
                //secureTextEntry
                onChangeText={(text) => {
                  setPw(text)
                }}
              />
            </Division>
            <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(5)} />

            <Division
              flexDirection='row'
              justifyContent='space-between'>
              <Typography
                fontSize={wp(3.5)}
                fontWeight='bold'
              >
                Email
                </Typography>
              <TextInput
                autoCapitalize='none'
                style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
                placeholderTextColor='#8898aa'
                placeholder='mert@mrms.com'
                //secureTextEntry
                onChangeText={(text) => {
                  setPw(text)
                }}
              />
            </Division>

            <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(5)} />

            <Division
              flexDirection='row'
              justifyContent='space-between'>
              <Typography
                fontSize={wp(3.5)}
                fontWeight='bold'
              >
                Yetki
                </Typography>
              <TextInput
                autoCapitalize='none'
                style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
                placeholderTextColor='#8898aa'
                placeholder='Bakımcı'
                editable={false}
                //secureTextEntry
                onChangeText={(text) => {
                  setPw(text)
                }}
              />
            </Division>
            <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(3)} />

          </KeyboardAvoidingView>
        </Division>
      </MenuProvider>
      { yetki == 'Maintainer' ? <TabNavMaintainer /> : yetki == 'Supervisor' ? <TabNavSupervisor /> : <TabNavAdmin />}
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