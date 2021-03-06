import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { InitialState, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AsyncStorage } from 'react-native'
import useNavigationState from '~/hooks/useNavigationState'

import Login from '~/screens/Login'
import indexMaintainer from '~/screens/Dashboards/Maintainer'
import indexSupervisor from '~/screens/Dashboards/Supervisor-Admin'
import pieceDetail from '~/screens/PieceDetail'
import profile from '~/screens/Profile'
import log from '~/screens/Log'
import UserManagement from '~/screens/UserManagement'
import search from '~/screens/Search'
import splash from '~/screens/Splash'
import machines from '~/screens/Machines'


export { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Login: undefined
  indexSupervisor: undefined
  indexMaintainer: undefined
  pieceDetail: undefined
  profile: undefined
  splash: undefined
  search: undefined
  log: undefined
  UserManagement: undefined
  machines: undefined
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
        <Stack.Screen name='pieceDetail' component={pieceDetail} />
        <Stack.Screen name='profile' component={profile} />
        <Stack.Screen name='search' component={search} />
        <Stack.Screen name='splash' component={splash} />
        <Stack.Screen name='log' component={log} />
        <Stack.Screen name='UserManagement' component={UserManagement} />
        <Stack.Screen name='machines' component={machines} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
