import React from 'react'
import { LiteralUnion } from 'type-fest'

import Touchable, { EnhancedTouchable } from './Touchable'
import Typography from './Typography'

import { Theme } from '~/constants/palette'
import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'

interface ButtonProps extends EnhancedTouchable {
  text: string
  fontSize?: number
  onPress?: () => any
  backgroundColor?: LiteralUnion<keyof Theme['colors'], string>
  moreRadius?: boolean
  withBorderRadius?: boolean
}

export default ({
  text,
  onPress,
  backgroundColor = 'accent',
  withBorderRadius,
  moreRadius,
  fontSize = 18,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()
  return (
    <Touchable
      height={wp(13)}
      flex={1}
      alignSelf="stretch"
      borderRadius={moreRadius ? 30 : withBorderRadius ? theme.borderRadius : 0}
      // @ts-ignore Daha sonra bakarız buraya, şuan zaman kaybetmeye gerek yok.
      backgroundColor={theme.colors[backgroundColor] ?? backgroundColor}
      alignItems="center"
      justifyContent="center"
      withBorderRadius
      onPress={onPress}
      {...rest}>
      <Typography fontSize={fontSize} letterSpacing={1.07} color="white">
        {text}
      </Typography>
    </Touchable>
  )
}
