import React, { useState } from 'react'
import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacityProps
} from 'react-native'

import Division from './Division'
import { Check, Circle } from './SVGComponents'
import Touchable from './Touchable'
import Typography from './Typography'

interface CheckBoxProps extends TouchableOpacityProps {
  label?: string
  size?: number
  borderColor?: string
  checkedBorderColor?: string
  borderRadius?: number
  iconSize?: number
  checkedColor?: string
  unCheckedColor?: string
  borderWidth?: number
  iconColor?: string
  checked?: boolean
  radioButton?: boolean
  labelStyle?: TextStyle
  style?: ViewStyle
}

export default ({
  size = 22,
  checkedColor = '#193254',
  unCheckedColor,
  borderColor = '#888',
  checkedBorderColor = '#888888',
  borderRadius = 7.2,
  iconSize = size / 2,
  label,
  borderWidth = 0.5,
  iconColor = '#fff',
  onPress,
  checked,
  radioButton,
  labelStyle,
  style
}: CheckBoxProps) => {
  return (
    <View style={style}>
      <Division flex={1} flexDirection="row">
        <Touchable flexDirection="row" alignItems="center" onPress={onPress}>
          <Division
            justifyContent="center"
            alignItems="center"
            borderWidth={borderWidth}
            width={size}
            height={size}
            marginRight={10}
            borderColor={checked ? checkedBorderColor : borderColor}
            borderRadius={radioButton ? 25 : borderRadius}
            backgroundColor={checked ? checkedColor : unCheckedColor}>
            {checked ? (
              radioButton ? (
                <Circle height={iconSize} width={iconSize} fill={iconColor} />
              ) : (
                  <Check height={iconSize} width={iconSize} fill={iconColor} />
                )
            ) : undefined}
          </Division>
          {label ? <Text style={[labelStyle, {}]}>{label}</Text> : undefined}
        </Touchable>
      </Division>
    </View>
  )
}
