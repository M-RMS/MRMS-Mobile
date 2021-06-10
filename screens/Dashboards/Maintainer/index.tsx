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
        <Division
          height={wp(30)}
          alignSelf='stretch'
          backgroundColor='#1FB9FC'
          justifyContent='center'
          alignItems='flex-start'>
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
                Hoşgeldiniz!
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
            bottom={-wp(6)}
          >
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
                  <MenuOption onSelect={() => { navigate('Login') }} text='Çıkış Yap' />
                </MenuOptions>
              </Menu>
            </View>
          </Touchable>
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