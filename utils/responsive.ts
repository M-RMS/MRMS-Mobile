import { Dimensions, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

type ResponsiveProps = string | number

const wp = (widthPercent: ResponsiveProps) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100)
}

const hp = (heightPercent: ResponsiveProps) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent)
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100)
}

export { wp, hp }
