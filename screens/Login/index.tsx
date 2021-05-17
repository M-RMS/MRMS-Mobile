import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { hp, wp } from '~/utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import { KeyboardAvoidingView } from 'react-native'
export default () => {
  const { navigate } = useNavigation()
  const [text, setText] = useState('')
  return (
    <Division
      flex={1}
      justifyContent='center'
      alignItems='center'
      paddingHorizontal={wp(5)}>
      <Division
        width={wp(90)}
      >
        <TextInput
          mode='outlined'
          returnKeyType={'next'}
          label='Email'
          labelColor='#D41932'
          value={text}
          underlineColor='#D41932'
          selectionColor='#D41932'
          autoCapitalize='none'
          theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}
          onChangeText={text => setText(text)}
        />
        <Division marginVertical={wp(2)} />
        <TextInput
          mode='outlined'
          returnKeyType={'done'}
          label='Password'
          value={text}
          underlineColor='#D41932'
          selectionColor='#D41932'
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={text => setText(text)}
          theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}
        />
        <Division marginVertical={wp(2)} />
        <Touchable
          width={wp(60)}
          height={hp(7)}
          borderWidth={1}
          alignItems='center'
          justifyContent='center'
          marginHorizontal={wp(15)}>
          <Typography
            textAlign='center'>
            Giriş Yap
            </Typography>
        </Touchable>
      </Division>
      <Division
        flexDirection='row'
        justifyContent='space-between'
        width={wp(90)}>
        <Touchable
          onPress={() => {
            navigate('indexAdmin')
          }}>
          <Typography>
            yönetici
          </Typography>
        </Touchable>
        <Touchable
          onPress={() => {
            navigate('indexSupervisor')
          }}>
          <Typography>
            gözlemci
          </Typography>
        </Touchable>
        <Touchable
          onPress={() => {
            navigate('indexMaintainer')
          }}>
          <Typography>
            bakımcı
          </Typography>
        </Touchable>
      </Division>
    </Division>
  )

}
