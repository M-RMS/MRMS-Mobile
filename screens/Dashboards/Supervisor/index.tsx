import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import Home from '~/SVGComponents/Home'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import { useNavigation } from '@react-navigation/native'
import { Modal, RefreshControl } from 'react-native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { ScrollView } from 'react-native-gesture-handler'
import { MenuProvider } from 'react-native-popup-menu'
import { PieChart } from 'react-native-chart-kit'
export default () => {
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
    { name: 'Mustafa Albayrak', score: 5, img: 'http://placeimg.com/500/500/people?74162' },
    { name: 'Cengiz Uzun', score: 4, img: 'http://placeimg.com/500/500/people?74163' },
    { name: 'Ali Asım Saran', score: 3, img: 'http://placeimg.com/500/500/people?74164' },
    { name: 'Enes Kayıkçı', score: 2, img: 'http://placeimg.com/500/500/people?74165' },
    { name: 'Serkan Yalçın', score: 1, img: 'http://placeimg.com/500/500/people?74166' },
    { name: 'Ufuk Mert Mercan', score: 1, img: 'http://placeimg.com/500/500/people?74167' },
    { name: 'Mehmet Denizli', score: 0, img: 'http://placeimg.com/500/500/people?74168' },
  ]
  const MonthlyMaintainerData = [
    { name: 'Mustafa Albayrak', score: 5, img: 'http://placeimg.com/500/500/people?74162' },
    { name: 'Cengiz Uzun', score: 4, img: 'http://placeimg.com/500/500/people?74163' },
    { name: 'Ali Asım Saran', score: 3, img: 'http://placeimg.com/500/500/people?74164' },
    { name: 'Enes Kayıkçı', score: 2, img: 'http://placeimg.com/500/500/people?74165' },
    { name: 'Serkan Yalçın', score: 1, img: 'http://placeimg.com/500/500/people?74166' },
    { name: 'Ufuk Mert Mercan', score: 1, img: 'http://placeimg.com/500/500/people?74167' },
    { name: 'Mehmet Denizli', score: 0, img: 'http://placeimg.com/500/500/people?74168' },
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
        {loop == 'd' ? <ScrollView style={{ zIndex: -9999, marginTop: wp(9), paddingHorizontal: wp(5) }} showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl colors={['#222F5A']} refreshing={refreshing} onRefresh={onRefresh} />
          } >
          <Division
            width={wp(90)}
            height={wp(50)}
            backgroundColor='#ffffff'
            alignItems='center'
            justifyContent='center'
            borderRadius={wp(10)}>
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
            marginTop={wp(5)}
            width={wp(90)}
            height={wp(50)}
            backgroundColor='#ffffff'
            alignItems='center'
            justifyContent='center'
            borderRadius={wp(10)}>

          </Division>

        </ScrollView> : <Division />}
      </MenuProvider>
      <TabNavSupervisor />
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