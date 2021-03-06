import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import Logo from '../components/Logo'

const SplashLoad = () => {
  return (
    <ImageBackground
      source={require('~/assets/images/Splash.jpg')}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default SplashLoad
