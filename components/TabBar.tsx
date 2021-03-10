import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import {
  NavigationState,
  NavigationHelpers,
  ParamListBase,
  Route,
  useNavigation,
} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { View, TouchableOpacity } from 'react-native'

import Division from './Division'
import Touchable from './Touchable'

import {
  Home,
  Messages,
  Profile,
  Plus,
  Search,
  Categories,
} from '~/components/SVGComponents'
import dimensions from '~/constants/dimensions'
import useTheme from '~/hooks/useTheme'

const TAB_WIDTH = dimensions.width / 5
const TAB_BAR_HEIGHT = 54
const BORDER_RADIUS = 30

const icons = {
  home: Home,
  categories: Categories,
  profile: Profile,
  messages: Messages,
  search: Search,
}

type IconTypes = typeof icons

const TabBarContainer = ({ children }: { children: ReactNode }) => (
  <View
    style={{
      backgroundColor: 'white',
      position: 'absolute',
      paddingHorizontal: 10,
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
      height: TAB_BAR_HEIGHT,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    }}
  >
    {children}
  </View>
)

interface TabButtonTouchableProps {
  index?: number
  name: string
  routeName: string | undefined
  state: NavigationState
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
  route?: Route<string>
}

const TabButtonTouchable = ({
  index,
  name,
  route,
  state,
  navigation,
}: TabButtonTouchableProps) => {
  const theme = useTheme()
  const isFocused = state.index === index

  const onPress = () => {
    if (!route) return
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'relative',
        width: TAB_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: TAB_BAR_HEIGHT,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icons[name as keyof IconTypes]({
            fill: isFocused
              ? theme.tabBar.activeTintColor
              : theme.tabBar.tintColor,
          })}
        </View>
        {state.index === index && (
          <View
            style={{
              position: 'absolute',
              bottom: 1,
              height: 2,
              backgroundColor: '#193254',
              width: TAB_WIDTH / 2 + 10,
              borderRadius: 1,
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

const CenterButton = () => {
  const theme = useTheme()
  const { navigate } = useNavigation()

  return (
    <Touchable
      onPress={() => {
        navigate('InnerSteps')
      }}
      style={{
        width: TAB_WIDTH,
        left: TAB_WIDTH * 2,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          marginTop: -15,
          borderRadius: 32,

          width: 64,
          height: 64,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 0,
        }}
      >
        <View
          style={{
            borderRadius: 29,
            backgroundColor: 'orange',
            position: 'relative',
            width: 56,
            height: 58,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,

            elevation: 5,
          }}
        >
          <Plus fill='white' />
          <LinearGradient
            colors={[theme.colors.primaryGradient, theme.colors.primary]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              zIndex: -1,
              borderRadius: 28,
            }}
          />
        </View>
      </View>
    </Touchable>
  )
}

export default ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <TabBarContainer>
      <Division flexDirection='row'>
        <TabButtonTouchable
          index={0}
          route={state.routes[0]}
          name='home'
          navigation={navigation}
          state={state}
          routeName='Explore'
        />
        <TabButtonTouchable
          index={1}
          route={state.routes[1]}
          name='categories'
          navigation={navigation}
          state={state}
          routeName='Categories'
        />
      </Division>
      <CenterButton />
      <Division flexDirection='row'>
        <TabButtonTouchable
          index={3}
          name='messages'
          route={state.routes[3]}
          navigation={navigation}
          state={state}
          routeName='Messages'
        />
        <TabButtonTouchable
          index={4}
          name='profile'
          route={state.routes[4]}
          navigation={navigation}
          state={state}
          routeName={'Profile'}
        />
      </Division>
    </TabBarContainer>
  )
}
