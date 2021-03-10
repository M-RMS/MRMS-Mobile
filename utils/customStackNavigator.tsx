import {
  useNavigationBuilder,
  createNavigatorFactory,
  StackRouter,
  DefaultNavigatorOptions,
  StackNavigationState,
  StackRouterOptions
} from '@react-navigation/native'
import { StackView, StackNavigationOptions } from '@react-navigation/stack'
import {
  StackNavigationEventMap,
  StackNavigationConfig
} from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = DefaultNavigatorOptions<StackNavigationOptions> &
  StackRouterOptions &
  StackNavigationConfig

export const CustomStackView = ({
  children,
  navigation,
  screen,
  route
}: any) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'white' }]}>
      {children}
    </View>
  )
}

const StackNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  ...rest
}: Props) => {
  const { state, descriptors, navigation } = useNavigationBuilder<
    StackNavigationState,
    StackRouterOptions,
    StackNavigationOptions,
    StackNavigationEventMap
  >(StackRouter, {
    initialRouteName,
    children,
    screenOptions: {
      ...screenOptions,
      headerShown: false
    }
  })
  return (
    <StackView
      {...rest}
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
  )
}

export default createNavigatorFactory(StackNavigator)
