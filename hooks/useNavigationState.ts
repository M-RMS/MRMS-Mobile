import React, { useEffect, useState } from 'react'
import { Linking, Platform, AsyncStorage } from 'react-native'

export default () => {
  const [isReady, setIsReady] = useState(false)
  const [initialState, setInitialState] = useState()

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web') {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(
            'NAVIGATION_STATE'
          )
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  return {
    initialState,
    isReady
  }
}
