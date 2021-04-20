import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { InitialState, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AsyncStorage } from 'react-native'
import useNavigationState from '~/hooks/useNavigationState'

import Login from '~/screens/Login'
import indexMaintainer from '~/screens/Dashboards/Maintainer'
import indexAdmin from '~/screens/Dashboards/Admin'
import indexSupervisor from '~/screens/Dashboards/Supervisor'
import pieceDetail from '~/screens/PieceDetail/index'


export { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  //Main: undefined
  //TasarimEkrani:undefined
  MainA: undefined
  MainF: undefined
  DetailsF: undefined
  Reporting: undefined
  OnBoarding: undefined
}

export interface ModalProps {
  text: string
  onOk: (...args: any[]) => any
  onCancel: (...args: any[]) => any
  okText?: string
  cancelText?: string
  dismissible?: boolean
}

export type AuthTabParamList = {
  /*Explore: undefined
  Categories: undefined
  AdvertisementList: { autoFocus?: boolean } | undefined
  Messages: undefined
  Profile: undefined
  AddAdvertisement: { autoFocus?: boolean } | undefined
  ViewAllFavorites: undefined
  CategorySearch: undefined
  PrivacyPolicy: undefined
  AnotherProfile: undefined
  */
}

export type RoutesParamsList = RootStackParamList & AuthTabParamList

const Stack = createStackNavigator<RootStackParamList>()

const Tab = createBottomTabNavigator<AuthTabParamList>()

export default () => {
  const { initialState, isReady } = useNavigationState()

  if (!isReady) {
    return null
  }
  return (
    <NavigationContainer
    //onboarding icin burayi silmek lazim
    //  initialState={initialState}
    // onStateChange={(state) =>
    //    AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state))
    //  }
    >
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='indexMaintainer' component={indexMaintainer} />
        <Stack.Screen name='indexSupervisor' component={indexSupervisor} />
        <Stack.Screen name='indexAdmin' component={indexAdmin} />
        <Stack.Screen name='pieceDetail' component={pieceDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
