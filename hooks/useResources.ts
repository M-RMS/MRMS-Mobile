import { loadAsync } from 'expo-font'

export default () => {
  return loadAsync({
    'Nunito-100': require('~/assets/fonts/NunitoSans-ExtraLight.ttf'),
    'Nunito-200': require('~/assets/fonts/NunitoSans-Light.ttf'),
    'Nunito-400': require('~/assets/fonts/NunitoSans-Regular.ttf'),
    'Nunito-500': require('~/assets/fonts/NunitoSans-SemiBold.ttf'),
    'Nunito-700': require('~/assets/fonts/NunitoSans-Bold.ttf'),
    'Nunito-900': require('~/assets/fonts/NunitoSans-ExtraBold.ttf'),
    'Nunito-100-Italic': require('~/assets/fonts/NunitoSans-BlackItalic.ttf'),
    'Nunito-200-Italic': require('~/assets/fonts/NunitoSans-LightItalic.ttf'),
    'Nunito-400-Italic': require('~/assets/fonts/NunitoSans-Italic.ttf'),
    'Nunito-500-Italic': require('~/assets/fonts/NunitoSans-BlackItalic.ttf'),
    'Nunito-700-Italic': require('~/assets/fonts/NunitoSans-BoldItalic.ttf'),
    'Nunito-900-Italic': require('~/assets/fonts/NunitoSans-ExtraBoldItalic.ttf'),
  })
}
