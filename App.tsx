import { AppLoading } from 'expo'
import { loadAsync } from 'expo-font'
import React, { useState } from 'react'
import { UIManager, Platform, YellowBox, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import { Provider, useStore } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import SplashLoad from './components/SplashLoad'

import { ThemeManager } from './utils/themeManager'

import Division from '~/components/Division'
import StatusBar from '~/components/StatusBar'
import useResources from '~/hooks/useResources'
import MainNavigation from '~/navigators/MainNavigation'
import RoleReducer from '~/redux/reducers/RoleReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage'
import RandomReducer from '~/redux/reducers/RandomReducer'


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}
enableScreens()

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
])
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({


  Role: RoleReducer,
  Random: RandomReducer



})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  const store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)


  return dataLoaded ? (

    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <ThemeManager>
              <Division backgroundColor='white' flex={1}>
                <StatusBar barStyle='light-content' />
                <MainNavigation />
              </Division>
            </ThemeManager>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>

  ) : (
    <View style={{ flex: 1 }}>
      <SplashLoad />
      <AppLoading
        startAsync={useResources}
        onFinish={() => setDataLoaded(true)}
      />
    </View>
  )
}
