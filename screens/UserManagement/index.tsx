import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import UserCards from './UserCards'
import { useNavigation } from '@react-navigation/native'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import AddUser from '~/SVGComponents/AddUser'
import Header from '~/components/Header'
import TabNavAdmin from '~/components/TabNavAdmin'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { MenuProvider } from 'react-native-popup-menu'
export default () => {
  const mode = 'create'

  const { navigate } = useNavigation()
  const yetki = useSelector((state) => state.Role.str)
  return (
    <>
      <MenuProvider>
        <Header title='Kullanıcı Yönetimi' />
        <Division
          position='absolute'
          zIndex={999}
          right={wp(0)}
          top={wp(10)}>
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

            </MenuOptions>
          </Menu>
        </Division>
        <Division
          flex={1}
          paddingHorizontal={wp(5)}>
          <UserCards />
        </Division>
      </MenuProvider>
      <Touchable
        bottom={wp(18)}
        position='absolute'
        width={wp(15)}
        height={wp(15)}
        borderRadius={wp(15 / 2)}
        right={wp(5)}
        backgroundColor='#78BB43'
        justifyContent='center'
        alignItems='center'
        onPress={() => {
          let a = [mode]
          navigate('profile', a)
        }}>
        <AddUser width={wp(8)} height={wp(8)} fill={'#ffffff'} />
      </Touchable>
      { yetki.userDefine == 'Bakımcı' ? <TabNavMaintainer /> : yetki.userDefine == 'Gözlemci' ? <TabNavSupervisor /> : yetki.userDefine == 'Yönetici' ? <TabNavAdmin /> : <Division />}


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