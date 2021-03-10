import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Division from './Division'
import Alert from './SVGComponents/Alert'
import Touchable from './Touchable'
import Typography from './Typography'

import dimensions from '~/constants/dimensions'
import useTheme from '~/hooks/useTheme'
import { RootStackParamList } from '~/navigators/MainNavigation'

export default ({
  navigation: { goBack },
  route: {
    params: { text, onOk, onCancel, okText, cancelText, dismissible }
  }
}: StackScreenProps<RootStackParamList, 'Modal'>) => {
  const theme = useTheme()
  return (
    <Division
      position="absolute"
      left={0}
      right={0}
      top={0}
      bottom={0}
      backgroundColor="rgba(0,0,0,.6)"
      zIndex={99999}>
      {dismissible && (
        <Touchable
          onPress={goBack}
          activeOpacity={1}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1
          }}
        />
      )}
      <View
        pointerEvents="box-none"
        style={{
          flex: 1,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Division
          zIndex={5}
          borderRadius={theme.borderRadius}
          backgroundColor="white"
          overflow="hidden"
          width={(dimensions.width * 3) / 4}>
          <Division padding={20} flexDirection="row" alignItems="center">
            <Division
              marginRight={20}
              justifyContent="center"
              alignItems="center"
              flex={1}>
              <Division
                padding={10}
                borderRadius={50}
                backgroundColor={theme.colors.transparentPrimary}>
                <Alert fill={theme.colors.primary} width={30} height={30} />
              </Division>
            </Division>
            <Typography color="accent" flex={5}>
              {text}
            </Typography>
          </Division>
          <Division flexDirection="row">
            <Touchable
              flex={1}
              paddingVertical={10}
              onPress={() => {
                if (onCancel) onCancel()
              }}
              backgroundColor={theme.colors.primary}>
              <Typography color="white" textAlign="center">
                {cancelText ?? 'Cancel'}
              </Typography>
            </Touchable>
            <Division width={0.5} backgroundColor="white"></Division>
            <Touchable
              flex={1}
              paddingVertical={10}
              onPress={() => {
                if (onOk) onOk()
              }}
              backgroundColor={theme.colors.primary}>
              <Typography color="white" textAlign="center">
                {okText ?? 'Ok'}
              </Typography>
            </Touchable>
          </Division>
        </Division>
      </View>
    </Division>
  )
}
