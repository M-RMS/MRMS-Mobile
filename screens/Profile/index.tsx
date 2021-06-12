import React, { useState, useEffect } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import DotsVertical from '~/SVGComponents/DotsVertical'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import { useDispatch, useSelector } from 'react-redux'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavAdmin from '~/components/TabNavAdmin'
import { useNavigation, useRoute } from '@react-navigation/native'
import Create from './Create'
import EditUser from './EditUser'
import EditAsAdmin from './EditAsAdmin'
import EditAsSupervisorMaintainer from './EditAsSupervisorMaintainer'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { MenuProvider } from 'react-native-popup-menu'
import Header from '~/components/Header'
export default () => {
  const route = useRoute()
  let data = route.params
  const yetki = useSelector((state) => state.Role.str)
  return (
    <>
      <MenuProvider>
        <Header title='Profili Düzenle' />
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
              <MenuOption onSelect={() => { }} text='Şifreni Değiştir' />
              <MenuOption onSelect={() => { }} text='Yenile' />
              <MenuOption onSelect={() => { }} text='Çıkış Yap' />
            </MenuOptions>
          </Menu>
        </Division>
        {data[0] == 'EditUser' ? <EditUser item={data[1]} />
          : data[0] == 'create' ? <Create />
            : data[0] == 'EditAsAdmin' ? <EditAsAdmin />
              : data[0] == 'EditAsSupervisorMaintainer' ? <EditAsSupervisorMaintainer />
                : <Division />
        }
        {yetki.userDefine == 'Bakımcı' ? <TabNavMaintainer /> : yetki.userDefine == 'Gözlemci' ? <TabNavSupervisor /> : yetki.userDefine == 'Yönetici' ? <TabNavAdmin /> : <Division />}
      </MenuProvider>
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