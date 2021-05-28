import React, { useState, useEffect } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import Crown from '~/SVGComponents/Crown'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import { useDispatch, useSelector } from 'react-redux'
import TabNavAdmin from '~/components/TabNavAdmin'
import { useNavigation } from '@react-navigation/native'
import { Modal, RefreshControl } from 'react-native'
import Image from '~/components/Image'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { ScrollView } from 'react-native-gesture-handler'
import { MenuProvider } from 'react-native-popup-menu'
import { PieChart } from 'react-native-chart-kit'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
export default () => {
  const yetki = useSelector((state) => state.Role.str)
  useEffect(() => {
    console.warn(yetki)
  }, [])
  const { navigate } = useNavigation()
  const [loop, setLoop] = useState('d')
  const dataDaily = [
    { name: 'Tamamlananlar', billboards: 12, color: '#78BB43', legendFontColor: '#222F5A', legendFontSize: wp(3) },
    { name: 'Bekleyenler', billboards: 5, color: '#1F9ED9', legendFontColor: '#222F5A', legendFontSize: wp(3) },
    { name: 'Arızalılar', billboards: 2, color: '#ED1766', legendFontColor: '#222F5A', legendFontSize: wp(3) },
  ]
  const dataWeekly = [
    { name: 'Tamamlananlar', billboards: 120, color: '#78BB43', legendFontColor: '#222F5A', legendFontSize: wp(3) },
    { name: 'Bekleyenler', billboards: 1, color: '#1F9ED9', legendFontColor: '#222F5A', legendFontSize: wp(3) },
    { name: 'Arızalılar', billboards: 20, color: '#ED1766', legendFontColor: '#222F5A', legendFontSize: wp(3) },
  ]
  const dataMonthly = [
    { name: 'Tamamlananlar', billboards: 1212, color: '#78BB43', legendFontColor: '#222F5A', legendFontSize: wp(3) },
    { name: 'Bekleyenler', billboards: 55, color: '#1F9ED9', legendFontColor: '#222F5A', legendFontSize: wp(3) },
    { name: 'Arızalılar', billboards: 110, color: '#ED1766', legendFontColor: '#222F5A', legendFontSize: wp(3) },
  ]
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
  }
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {

  }, [])
  const DailyMaintainerData = [
    { name: 'Mustafa Albayrak', score: 5, img: 'http://placeimg.com/500/500/people?74162' },
    { name: 'Cengiz Uzun', score: 4, img: 'http://placeimg.com/500/500/people?74163' },
    { name: 'Ali Asım Saran', score: 3, img: 'http://placeimg.com/500/500/people?74164' },
    { name: 'Enes Kayıkçı', score: 2, img: 'http://placeimg.com/500/500/people?74165' },
    { name: 'Serkan Yalçın', score: 1, img: 'http://placeimg.com/500/500/people?74166' },
    { name: 'Ufuk Mert Mercan', score: 1, img: 'http://placeimg.com/500/500/people?74167' },
    { name: 'Mehmet Denizli', score: 0, img: 'http://placeimg.com/500/500/people?74168' },
  ]
  const WeeklyMaintainerData = [
    { name: 'Mustafa Albayrak', score: 50, img: 'http://placeimg.com/500/500/people?74162' },
    { name: 'Cengiz Uzun', score: 40, img: 'http://placeimg.com/500/500/people?74163' },
    { name: 'Ali Asım Saran', score: 30, img: 'http://placeimg.com/500/500/people?74164' },
    { name: 'Enes Kayıkçı', score: 20, img: 'http://placeimg.com/500/500/people?74165' },
    { name: 'Serkan Yalçın', score: 10, img: 'http://placeimg.com/500/500/people?74166' },
    { name: 'Ufuk Mert Mercan', score: 10, img: 'http://placeimg.com/500/500/people?74167' },
    { name: 'Mehmet Denizli', score: 4, img: 'http://placeimg.com/500/500/people?74168' },
  ]
  const MonthlyMaintainerData = [
    { name: 'Mustafa Albayrak', score: 500, img: 'http://placeimg.com/500/500/people?74162' },
    { name: 'Cengiz Uzun', score: 400, img: 'http://placeimg.com/500/500/people?74163' },
    { name: 'Ali Asım Saran', score: 300, img: 'http://placeimg.com/500/500/people?74164' },
    { name: 'Enes Kayıkçı', score: 200, img: 'http://placeimg.com/500/500/people?74165' },
    { name: 'Serkan Yalçın', score: 100, img: 'http://placeimg.com/500/500/people?74166' },
    { name: 'Ufuk Mert Mercan', score: 100, img: 'http://placeimg.com/500/500/people?74167' },
    { name: 'Mehmet Denizli', score: 10, img: 'http://placeimg.com/500/500/people?74168' },
  ]

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
                color='#ffffff'>
                Hoşgeldiniz!
            </Typography>
              <Typography
                opacity={0.6}
                fontSize={wp(4)}
                color='#ffffff'
                letterSpacing={0.4}
                lineHeight={wp(5)}>
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
                  <MenuOption onSelect={() => { navigate('Login') }} text='Çıkış Yap' />
                </MenuOptions>
              </Menu>
            </View>
          </Touchable>
        </Division>
        <Division
          width={wp(100)}
          height={wp(15)}
          flexDirection='row'>
          <Touchable
            width={wp(100 / 3)}
            height={wp(15)}
            justifyContent='center'
            onPress={() => {
              setLoop('d')
            }}>
            <Typography
              letterSpacing={0.2}
              fontWeight={loop == 'd' ? 'boldest' : 'normal'}
              color={loop == 'd' ? '#1FB9FC' : '#8F8F8F'}
              textAlign='center'>
              Günlük
            </Typography>
          </Touchable>
          <Division
            borderColor='#A7A9B3'
            borderLeftWidth={1}
            marginVertical={wp(3)}
          />
          <Touchable
            width={wp(100 / 3)}
            height={wp(15)}
            justifyContent='center'
            onPress={() => {
              setLoop('w')
            }}>
            <Typography
              fontWeight={loop == 'w' ? 'boldest' : 'normal'}
              color={loop == 'w' ? '#1FB9FC' : '#8F8F8F'}
              letterSpacing={0.2}
              textAlign='center'>
              Haftalık
            </Typography>
          </Touchable>
          <Division
            borderColor='#A7A9B3'
            borderLeftWidth={1}
            marginVertical={wp(3)}
          />
          <Touchable
            width={wp(100 / 3)}
            height={wp(15)}
            justifyContent='center'
            onPress={() => {
              setLoop('m')
            }}>
            <Typography
              fontWeight={loop == 'm' ? 'boldest' : 'normal'}
              color={loop == 'm' ? '#1FB9FC' : '#8F8F8F'}
              letterSpacing={0.2}
              textAlign='center'>
              Aylık
            </Typography>
          </Touchable>
        </Division>
        <Division
          borderColor='#A7A9B3'
          borderBottomWidth={1}
          marginHorizontal={wp(5)}
        />
        {loop == 'd' ? <>
          <ScrollView style={{ zIndex: -9999, marginTop: wp(5), paddingHorizontal: wp(5) }} showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl colors={['#222F5A']} refreshing={refreshing} onRefresh={onRefresh} />
            } >
            <Touchable
              marginVertical={wp(2)}
              width={wp(90)}
              height={wp(15)}
              backgroundColor='#ED1766'
              borderRadius={wp(8)}
              justifyContent='center'
              alignItems='center'
              onPress={() => {
                navigate('log')
              }}>
              <Typography
                fontSize={wp(5)}
                fontWeight='bold'
                color='#ffffff'
                textAlign='center'>
                Arızaları Görüntüle
          </Typography>
            </Touchable>
            <Touchable
              marginVertical={wp(2)}
              width={wp(90)}
              height={wp(15)}
              backgroundColor='#78BB43'
              borderRadius={wp(8)}
              justifyContent='center'
              alignItems='center'
              onPress={() => {
                navigate('indexMaintainer')
              }}>
              <Typography
                fontSize={wp(5)}
                fontWeight='bold'
                color='#ffffff'
                textAlign='center'>
                Bakımları Görüntüle
          </Typography>
            </Touchable>
            <Division
              marginTop={wp(2)}
              width={wp(90)}
              height={wp(50)}
              backgroundColor='#ffffff'
              alignItems='center'
              justifyContent='center'
              borderRadius={wp(10)}>
              <Typography
                fontSize={wp(4)}
                color='#303E65'
                fontWeight='semi-bold'>
                Bakımlar
            </Typography>
              <PieChart
                data={dataDaily}
                width={wp(90)}
                height={wp(40)}
                chartConfig={chartConfig}
                accessor='billboards'
                backgroundColor='transparent'
              />
            </Division>
            <Division
              marginTop={wp(15)}
              width={wp(90)}
              height={wp(50)}
              backgroundColor='#ffffff'
              borderRadius={wp(10)}>
              <Division
                width={wp(90)}>
                <Division
                  alignItems='center'
                  flexDirection='row'
                  justifyContent='space-between'
                  paddingHorizontal={wp(10)}
                  paddingVertical={wp(2)}>
                  <Typography

                    color='#FFC90A'
                    fontSize={wp(6)}>
                    {'1.'}
                  </Typography>
                  <Division marginHorizontal={wp(3)} />
                  <Division
                    left={wp(35)}
                    top={-wp(10)}
                    position='absolute'
                    height={wp(20)}
                    width={wp(20)}
                    borderRadius={wp(20 / 2)}>
                    <Image
                      source={{ uri: DailyMaintainerData[0].img }}
                      style={{
                        width: wp(20),
                        height: wp(20),
                        borderRadius: wp(20 / 2),
                        borderWidth: 5,
                        borderColor: '#FFC90A',
                        flex: 1,
                        resizeMode: 'cover'
                      }} />
                    <Crown height={wp(12)} width={wp(12)} style={{ position: 'absolute', top: -wp(6), marginHorizontal: wp(4) }} />
                  </Division>
                  <Division marginHorizontal={wp(3)} />
                  <Typography
                    color='#FFC90A'
                    fontSize={wp(5)}>
                    {'Score: ' + DailyMaintainerData[0].score}
                  </Typography>
                </Division>
              </Division>
              <Division
                flex={1}
                justifyContent='space-around'>
                {
                  DailyMaintainerData.slice(1, 4).map(item => {
                    return (
                      <Division
                        marginHorizontal={wp(3)}
                        flexDirection='row'
                        justifyContent='space-around'
                        alignItems='center'
                        marginTop={wp(1)}>
                        <Division
                          alignItems='center'
                          width={wp(18)}
                          flexDirection='row'>
                          <Typography
                            color='#303E65'
                            fontSize={wp(4)}
                            fontWeight='semi-bold'>
                            {DailyMaintainerData.indexOf(item) + 1 + '.'}
                          </Typography>
                          <Division
                            marginLeft={wp(2)}
                            height={wp(8)}
                            width={wp(8)}
                            borderRadius={wp(8 / 2)}>
                            <Image
                              source={{ uri: DailyMaintainerData[0].img }}
                              style={{
                                width: wp(8),
                                height: wp(8),
                                borderRadius: wp(8 / 2),
                                borderWidth: 1,
                                flex: 1,
                                resizeMode: 'cover'
                              }} />
                          </Division>
                        </Division>
                        <Typography
                          color='#000000'
                          fontSize={wp(4)}
                          fontWeight='semi-bold'
                          width={wp(40)}>
                          {item.name}
                        </Typography>
                        <Typography
                          color='#000000'
                          fontSize={wp(4)}
                          fontWeight='semi-bold'
                          width={wp(10)}>
                          {item.score}
                        </Typography>
                      </Division>
                    )
                  })
                }
              </Division>
            </Division>
            <Division marginVertical={wp(13)} />
          </ScrollView>
        </>
          : loop == 'w' ?
            <ScrollView style={{ zIndex: -9999, marginTop: wp(5), paddingHorizontal: wp(5) }} showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl colors={['#222F5A']} refreshing={refreshing} onRefresh={onRefresh} />
              } >
              <Touchable
                marginVertical={wp(2)}
                width={wp(90)}
                height={wp(15)}
                backgroundColor='#ED1766'
                borderRadius={wp(8)}
                justifyContent='center'
                alignItems='center'>
                <Typography
                  fontSize={wp(5)}
                  fontWeight='bold'
                  color='#ffffff'
                  textAlign='center'>
                  Arızaları Görüntüle
          </Typography>
              </Touchable>
              <Division
                width={wp(90)}
                height={wp(50)}
                backgroundColor='#ffffff'
                alignItems='center'
                justifyContent='center'
                borderRadius={wp(10)}>
                <Typography
                  fontSize={wp(4)}
                  color='#303E65'
                  fontWeight='semi-bold'>
                  Bakımlar
          </Typography>
                <PieChart
                  data={dataWeekly}
                  width={wp(90)}
                  height={wp(40)}
                  chartConfig={chartConfig}
                  accessor='billboards'
                  backgroundColor='transparent'
                />
              </Division>
              <Division
                marginTop={wp(15)}
                width={wp(90)}
                height={wp(50)}
                backgroundColor='#ffffff'
                borderRadius={wp(10)}>
                <Division
                  width={wp(90)}>
                  <Division
                    alignItems='center'
                    flexDirection='row'
                    justifyContent='space-between'
                    paddingHorizontal={wp(10)}
                    paddingVertical={wp(2)}>
                    <Typography
                      color='#FFC90A'
                      fontSize={wp(6)}>
                      1.
              </Typography>
                    <Division marginHorizontal={wp(3)} />
                    <Division
                      left={wp(35)}
                      top={-wp(10)}
                      position='absolute'
                      height={wp(20)}
                      width={wp(20)}
                      borderRadius={wp(20 / 2)}>
                      <Image
                        source={{ uri: WeeklyMaintainerData[0].img }}
                        style={{
                          width: wp(20),
                          height: wp(20),
                          borderRadius: wp(20 / 2),
                          borderWidth: 5,
                          borderColor: '#FFC90A',
                          flex: 1,
                          resizeMode: 'cover'
                        }} />
                      <Crown height={wp(12)} width={wp(12)} style={{ position: 'absolute', top: -wp(6), marginHorizontal: wp(4) }} />
                    </Division>
                    <Division marginHorizontal={wp(3)} />
                    <Typography
                      color='#FFC90A'
                      fontSize={wp(5)}>
                      {'Score: ' + WeeklyMaintainerData[0].score}
                    </Typography>
                  </Division>
                </Division>
                <Division
                  flex={1}
                  justifyContent='space-around'>
                  {
                    WeeklyMaintainerData.slice(1, 4).map(item => {
                      return (
                        <Division
                          marginHorizontal={wp(3)}
                          flexDirection='row'
                          justifyContent='space-around'
                          alignItems='center'
                          marginTop={wp(1)}>
                          <Division
                            alignItems='center'
                            width={wp(18)}
                            flexDirection='row'>
                            <Typography
                              color='#303E65'
                              fontSize={wp(4)}
                              fontWeight='semi-bold'>
                              {WeeklyMaintainerData.indexOf(item) + 1 + '.'}
                            </Typography>
                            <Division
                              marginLeft={wp(2)}
                              height={wp(8)}
                              width={wp(8)}
                              borderRadius={wp(8 / 2)}>
                              <Image
                                source={{ uri: WeeklyMaintainerData[0].img }}
                                style={{
                                  width: wp(8),
                                  height: wp(8),
                                  borderRadius: wp(8 / 2),
                                  borderWidth: 1,
                                  flex: 1,
                                  resizeMode: 'cover'
                                }} />
                            </Division>
                          </Division>
                          <Typography
                            color='#000000'
                            fontSize={wp(4)}
                            fontWeight='semi-bold'
                            width={wp(40)}>
                            {item.name}
                          </Typography>
                          <Typography
                            color='#000000'
                            fontSize={wp(4)}
                            fontWeight='semi-bold'
                            width={wp(10)}>
                            {item.score}
                          </Typography>
                        </Division>
                      )
                    })
                  }
                </Division>
              </Division>
              <Division marginVertical={wp(13)} />
            </ScrollView>
            :
            <ScrollView style={{ zIndex: -9999, marginTop: wp(5), paddingHorizontal: wp(5) }} showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl colors={['#222F5A']} refreshing={refreshing} onRefresh={onRefresh} />
              } >
              <Touchable
                marginVertical={wp(2)}
                width={wp(90)}
                height={wp(15)}
                backgroundColor='#ED1766'
                borderRadius={wp(8)}
                justifyContent='center'
                alignItems='center'>
                <Typography
                  fontSize={wp(5)}
                  fontWeight='bold'
                  color='#ffffff'
                  textAlign='center'>
                  Arızaları Görüntüle
          </Typography>
              </Touchable>
              <Division
                width={wp(90)}
                height={wp(50)}
                backgroundColor='#ffffff'
                alignItems='center'
                justifyContent='center'
                borderRadius={wp(10)}>
                <Typography
                  fontSize={wp(4)}
                  color='#303E65'
                  fontWeight='semi-bold'>
                  Bakımlar
            </Typography>
                <PieChart
                  data={dataMonthly}
                  width={wp(90)}
                  height={wp(40)}
                  chartConfig={chartConfig}
                  accessor='billboards'
                  backgroundColor='transparent'
                />
              </Division>
              <Division
                marginTop={wp(15)}
                width={wp(90)}
                height={wp(50)}
                backgroundColor='#ffffff'
                borderRadius={wp(10)}>
                <Division
                  width={wp(90)}>
                  <Division
                    alignItems='center'
                    flexDirection='row'
                    justifyContent='space-between'
                    paddingHorizontal={wp(10)}
                    paddingVertical={wp(2)}>
                    <Typography
                      color='#FFC90A'
                      fontSize={wp(6)}>
                      1.
                </Typography>
                    <Division marginHorizontal={wp(3)} />
                    <Division
                      left={wp(35)}
                      top={-wp(10)}
                      position='absolute'
                      height={wp(20)}
                      width={wp(20)}
                      borderRadius={wp(20 / 2)}>
                      <Image
                        source={{ uri: MonthlyMaintainerData[0].img }}
                        style={{
                          width: wp(20),
                          height: wp(20),
                          borderRadius: wp(20 / 2),
                          borderWidth: 5,
                          borderColor: '#FFC90A',
                          flex: 1,
                          resizeMode: 'cover'
                        }} />
                      <Crown height={wp(12)} width={wp(12)} style={{ position: 'absolute', top: -wp(6), marginHorizontal: wp(4) }} />
                    </Division>
                    <Division marginHorizontal={wp(3)} />
                    <Typography
                      color='#FFC90A'
                      fontSize={wp(5)}>
                      {'Score: ' + MonthlyMaintainerData[0].score}
                    </Typography>
                  </Division>
                </Division>
                <Division
                  flex={1}
                  justifyContent='space-around'>
                  {
                    MonthlyMaintainerData.slice(1, 4).map(item => {
                      return (
                        <Division
                          marginHorizontal={wp(3)}
                          flexDirection='row'
                          justifyContent='space-around'
                          alignItems='center'
                          marginTop={wp(1)}>
                          <Division
                            alignItems='center'
                            width={wp(18)}
                            flexDirection='row'>
                            <Typography
                              color='#303E65'
                              fontSize={wp(4)}
                              fontWeight='semi-bold'>
                              {MonthlyMaintainerData.indexOf(item) + 1 + '.'}
                            </Typography>
                            <Division
                              marginLeft={wp(2)}
                              height={wp(8)}
                              width={wp(8)}
                              borderRadius={wp(8 / 2)}>
                              <Image
                                source={{ uri: MonthlyMaintainerData[0].img }}
                                style={{
                                  width: wp(8),
                                  height: wp(8),
                                  borderRadius: wp(8 / 2),
                                  borderWidth: 1,
                                  flex: 1,
                                  resizeMode: 'cover'
                                }} />
                            </Division>
                          </Division>
                          <Typography
                            color='#000000'
                            fontSize={wp(4)}
                            fontWeight='semi-bold'
                            width={wp(40)}>
                            {item.name}
                          </Typography>
                          <Typography
                            color='#000000'
                            fontSize={wp(4)}
                            fontWeight='semi-bold'
                            width={wp(10)}>
                            {item.score}
                          </Typography>
                        </Division>
                      )
                    })
                  }
                </Division>
              </Division>
              <Division marginVertical={wp(13)} />
            </ScrollView>
        }
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