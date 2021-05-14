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
import userReducer from '~/redux/reducers/reducer'
import IdReducer from '~/redux/reducers/IdReducer'
import AdvFieldReducer from '~/redux/reducers/AdvFieldReducer'
import FilterMapReducer from '~/redux/reducers/FilterMapReducer'
import RandomReducer from '~/redux/reducers/RandomReducer'
import SortDesignsReducer from '~/redux/reducers/SortDesignsReducer'
import FilterDesignsReducer from '~/redux/reducers/FilterDesignsReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage'


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
  /*
    User: userReducer,
    Random: RandomReducer,
    IdPass: IdReducer,
    FieldPass: AdvFieldReducer,
    FilterMap: FilterMapReducer,
    SortDesigns: SortDesignsReducer,
    FilterDesigns:FilterDesignsReducer
  */
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)


  //let persistor = persistStore(store)


  return dataLoaded ? (

    <>
      <SafeAreaProvider>
        <ThemeManager>
          <Division backgroundColor='white' flex={1}>
            <StatusBar barStyle='light-content' />
            <MainNavigation />
          </Division>
        </ThemeManager>
      </SafeAreaProvider>
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
