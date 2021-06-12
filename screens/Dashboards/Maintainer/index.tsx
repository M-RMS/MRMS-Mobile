import React, { useState, useEffect } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import TaskCard from './DailyTasks'
import Home from '~/SVGComponents/Home'
import { useNavigation } from '@react-navigation/native'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import TabNavAdmin from '~/components/TabNavAdmin'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { MenuProvider } from 'react-native-popup-menu'
import Header from '~/components/Header'
import RandomNumberAction from '~/redux/actions/RandomNumberAction'

import axios from 'axios'
export default () => {


  const [refreshing, setRefreshing] = useState(false)

  const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  }
  const dispatch = useDispatch()
  const onRefresh = React.useCallback(() => {
    dispatch(RandomNumberAction(Math.random()))
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])
  const { navigate } = useNavigation()
  const yetki = useSelector((state) => state.Role.str)

  return (
    <>
      <MenuProvider>
        <Header title='Hoşgeldiniz!' />
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
              <MenuOption onSelect={() => { navigate('Login') }} text='Çıkış Yap' />
            </MenuOptions>
          </Menu>
        </Division>
        <Typography
          marginTop={wp(3)}
          marginLeft={wp(5)}
          fontSize={wp(5)}
          fontWeight='semi-bold'
          color='#303E65'>
          Günün Bakımları
        </Typography>
        <TaskCard />
      </MenuProvider>
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