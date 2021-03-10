import React, { ReactNode } from 'react'
import { Text, TextStyle, Animated } from 'react-native'
import { LiteralUnion } from 'type-fest'

import { Theme } from '~/constants/palette'
import useTheme from '~/hooks/useTheme'

const fontWeightMap: any = {
  lighest: 100,
  light: 200,
  normal: 400,
  'semi-bold': 500,
  bold: 700,
  boldest: 900
}

interface EnhancedText
  extends Omit<TextStyle, 'fontFamily' | 'fontWeight' | 'color'> {
  children?: ReactNode
  numberOfLines?: number
  fontWeight?: 'lighest' | 'light' | 'normal' | 'semi-bold' | 'bold' | 'boldest'
  fontFamily?: 'Nunito'
  type?: keyof Theme['presets']
  color?: LiteralUnion<keyof Theme['colors'], string> | React.ReactText | Animated.AnimatedInterpolation
  FontSize?: number
}

const Typography = ({
  children,
  numberOfLines,
  fontStyle = 'normal',
  fontWeight = 'normal',
  fontFamily = 'Nunito',
  fontSize,
  color,
  type = 'body',
  ...props
}: EnhancedText) => {
  const theme = useTheme()
  const familyWithWeight =
    fontFamily +
    '-' +
    fontWeightMap[fontWeight] +
    (fontStyle && fontStyle === 'italic' ? '-Italic' : '')
  const { fontFamily: ff, fontWeight: fw, ...rest } = theme.presets[
    type
  ] as TextStyle
  // @ts-ignore Daha sonra bakarız buraya, şuan zaman kaybetmeye gerek yok.
  rest.color = rest.color ?? theme.colors[color] ?? color ?? theme.colors.text
  return (
    <Text
      allowFontScaling={false}
      style={{
        ...rest,
        fontFamily: familyWithWeight,
        fontSize,
        ...props
      }}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  )
}

export default Typography
