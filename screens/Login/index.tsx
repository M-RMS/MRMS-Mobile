import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import RiskManagement from '~/SVGComponents/RiskManagement'
import ForgotPassword from '~/SVGComponents/ForgotPassword'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native'
import { Keyboard } from 'react-native-ui-lib'
export default () => {
  const { navigate } = useNavigation()
  const [text, setText] = useState('')
  const [devMode, setDevMode] = useState(false)
  return (
    <Division
      zIndex={1}
      flex={1}
      backgroundColor='#ffffff'
      paddingHorizontal={wp(5)}
      alignItems='center'>
      <Division
        marginTop={-wp(70)}
        width={wp(140)}
        height={wp(125)}
        borderRadius={wp(140 / 2)}
        backgroundColor='#1FB9FC' />
      <Division
        position='absolute'
        top={wp(35 / 2)}>
        <RiskManagement width={wp(20)} height={wp(20)} fill={'#ffffff'} />
      </Division>
      <Division
        marginTop={wp(5)}>
        <Typography
          color='#1FB9FC'
          fontSize={wp(6)}
          letterSpacing={wp(0.2)}
          fontWeight='bold'
          textAlign='center'>
          Hoşgeldiniz!
          </Typography>
        <Typography
          color='#1FB9FC'
          letterSpacing={wp(0.2)}
          fontSize={wp(3.5)}
          fontWeight='semi-bold'
          textAlign='center'>
          Lütfen Giriş Yapınız...
          </Typography>
      </Division>
      <Division
        marginTop={wp(5)}
        width={wp(84)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <TextInput
                mode='outlined'
                returnKeyType={'next'}
                label='Email'
                labelColor='#1FB9FC'
                value={text}
                underlineColor='#1FB9FC'
                selectionColor='#1FB9FC'
                autoCapitalize='none'
                theme={{ colors: { primary: '#1FB9FC', underlineColor: '#1FB9FC', background: '#ffffff' } }}
                onChangeText={text => setText(text)}
              />
              <Division marginVertical={wp(2)} />
              <TextInput
                mode='outlined'
                returnKeyType={'done'}
                label='Şifre'
                value={text}
                underlineColor='#1FB9FC'
                selectionColor='#1FB9FC'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={text => setText(text)}
                theme={{ colors: { primary: '#1FB9FC', underlineColor: '#1FB9FC', background: '#ffffff' } }}
              />
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <Division marginVertical={wp(2)} />
        <Touchable
          width={wp(42)}
          height={hp(7)}
          marginHorizontal={wp(42 / 2)}
          alignItems='center'
          justifyContent='center'
          borderRadius={wp(10)}
          backgroundColor='#1FB9FC'
          borderWidth={3}
          borderColor='#ffffff'
          onPress={() => {
            setDevMode(!devMode)
            devMode ? console.warn('Development mode has been deactived!') : console.warn('Development mode has been actived!')
          }}>
          <Typography
            textAlign='center'
            fontSize={wp(4)}
            color='#ffffff'
            fontWeight='bold'>
            Giriş Yap
            </Typography>
        </Touchable>
      </Division>
      {devMode ?
        <Division
          position='absolute'
          flexDirection='row'
          top={wp(20)}
          justifyContent='space-between'
          width={wp(90)}>
          <Touchable
            backgroundColor='#000000'
            onPress={() => {
              navigate('indexAdmin')
            }}>
            <Typography
              fontSize={wp(7)}
              color='red'
              fontWeight='boldest'>
              yönetici
       </Typography>
          </Touchable>
          <Touchable
            onPress={() => {
              navigate('indexSupervisor')
            }}>
            <Typography
              backgroundColor='#000000'
              fontSize={wp(7)}
              color='red'
              fontWeight='boldest'>
              gözlemci
       </Typography>
          </Touchable>
          <Touchable
            onPress={() => {
              navigate('indexMaintainer')
            }}>
            <Typography
              backgroundColor='#000000'
              fontSize={wp(7)}
              color='red'
              fontWeight='boldest'>
              bakımcı
       </Typography>
          </Touchable>
        </Division> : <Division />
      }
      <Division
        alignItems='flex-start'
        flex={1}
        width={wp(100)}>
        <Division
          width={wp(60)}
          height={wp(60)}
          borderRadius={wp(60 / 2)}
          left={wp(-30)}
          justifyContent='center'
          alignItems='center'
          backgroundColor='#1FB9FC'>
          <Touchable
            marginLeft={wp(20)}
            marginBottom={wp(20)}>
            <ForgotPassword fill={'#ffffff'} width={wp(10)} height={wp(10)} />
          </Touchable>
        </Division>
      </Division>
    </Division>
  )

}
/*

*/