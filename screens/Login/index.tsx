import React, { useState, useEffect } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import RiskManagement from '~/SVGComponents/RiskManagement'
import ForgotPassword from '~/SVGComponents/ForgotPassword'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, TouchableOpacity } from 'react-native'
import { Keyboard } from 'react-native-ui-lib'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import roleAction from '~/redux/actions/roleAction'
export default () => {
  const dispatch = useDispatch()
  const yetki = useSelector((state) => state.Role.str)
  const { navigate } = useNavigation()
  const [ready, setReady] = useState(false)
  const [nav, setNav] = useState('')
  const [un, setUn] = useState('')
  const [pw, setPw] = useState('')
  const [data, setData] = useState('')
  const [devMode, setDevMode] = useState(false)

  useEffect(() => {
    if (ready) {

      // console.log(data)
      setNav(data[0].userDefine)
      setReady(false)
    }
  }, [ready])
  useEffect(() => {
    if (nav !== '') {
      nav == 'Bakımcı' ? navigate('indexMaintainer') : navigate('indexSupervisor')
      console.warn(nav)
      setNav('')
    }
  }, [nav])
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
                value={un}
                underlineColor='#1FB9FC'
                selectionColor='#1FB9FC'
                autoCapitalize='none'
                theme={{ colors: { primary: '#1FB9FC', background: '#ffffff' } }}
                onChangeText={text => setUn(text)}
              />
              <Division marginVertical={wp(2)} />
              <TextInput
                mode='outlined'
                returnKeyType={'done'}
                label='Şifre'
                value={pw}
                underlineColor='#1FB9FC'
                selectionColor='#1FB9FC'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={text => setPw(text)}
                theme={{ colors: { primary: '#1FB9FC', background: '#ffffff' } }}
              />
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <Division marginVertical={wp(2)} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: wp(42),
            height: hp(7),
            marginHorizontal: wp(42 / 2),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp(10),
            backgroundColor: '#1FB9FC',
            borderWidth: 3,
            borderColor: '#ffffff'
          }}
          onLongPress={() => {
            setDevMode(!devMode)
            devMode ? console.warn('Developer mode has been deactived!') : console.warn('Developer mode has been actived!')
          }}
          onPress={() => {
            if (un !== '' && pw !== '') {
              try {
                axios
                  .request({
                    method: 'post',
                    url: 'http://192.168.1.33:45455/validate-user',
                    data: {

                      userPassword: pw,
                      userMail: un,

                    }
                  })
                  .then((response) => {
                    console.log(response.data[0].userDefine)
                    setData(response.data)
                    dispatch(roleAction(response.data[0]))
                    setReady(true)
                    // console.warn('d')
                  })
              } catch (error) {
                console.log(error)
                console.warn('hata')
              }
            }
            else {
              console.warn('hata')
            }
          }}>
          <Typography
            textAlign='center'
            fontSize={wp(4)}
            color='#ffffff'
            fontWeight='bold'>
            Giriş Yap
            </Typography>
        </TouchableOpacity>
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
              dispatch(roleAction('Admin'))
              navigate('indexSupervisor')
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
              dispatch(roleAction('Supervisor'))
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
              dispatch(roleAction('Maintainer'))
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
      { /*   <Division
        zIndex={-1}
        justifyContent='flex-end'
        alignItems='flex-start'
        flex={1}
        width={wp(100)}>
        <Division
          width={wp(60)}
          height={wp(60)}
          borderRadius={wp(60 / 2)}
          left={wp(-30)}
          bottom={wp(-30)}
          justifyContent='center'
          alignItems='center'
          backgroundColor='#1CB9FC'>
          <Touchable
            marginLeft={wp(20)}
            marginBottom={wp(20)}>
            <ForgotPassword fill={'#ffffff'} width={wp(10)} height={wp(10)} />
          </Touchable>
        </Division>
  </Division>*/}
    </Division>
  )
}