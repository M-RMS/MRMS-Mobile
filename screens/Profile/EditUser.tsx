import React, { useState, useEffect } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import AddUser from '~/SVGComponents/AddUser'
import Tick from '~/SVGComponents/Tick'
import Image from '~/components/Image'
import axios from 'axios'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import Camera from '~/SVGComponents/PhotoCamera'
import { wp, hp } from '~/utils/responsive'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
export default (item) => {
  const mode = 'create'
  const [pw, setPw] = useState('')
  const [pwC, setPwc] = useState('')
  const [text, setText] = useState('')
  const [id, setID] = useState(-1)
  const [name, setName] = useState('')
  const [define, setDefine] = useState('Yönetici')
  const [mobile, setMobile] = useState('')
  const [mail, setMail] = useState('')
  useEffect(() => {
    setID(item.item.userID)
  }, [])
  return (
    <>
      <Division
        width={wp(88)}
        paddingHorizontal={wp(5)}
        height={hp(67)}
        backgroundColor='#ffffff'
        borderRadius={wp(4)}
        marginHorizontal={wp(6)}
        marginTop={wp(10)} >
        <Division
          alignItems='center'>
          <Division
            height={wp(30)}
            width={wp(30)}
            borderRadius={wp(30 / 2)}
            marginTop={-wp(8)}>
            <Image
              source={require('~/assets/images/user.png')}
              style={{
                width: wp(30),
                height: wp(30),
                backgroundColor: '#ffffff',
                borderRadius: wp(30 / 2),
                borderWidth: 5,
                borderColor: '#ffffff',
                flex: 1,
                resizeMode: 'cover'
              }} />
            <Touchable
              backgroundColor='#ffffff'
              width={wp(9)}
              height={wp(9)}
              borderRadius={wp(9) / 2}
              justifyContent='center'
              alignItems='center'
              position='absolute'
              bottom={wp(0)}
              right={wp(0)}>
              <Camera width={wp(6)} height={wp(6)} />
            </Touchable>
          </Division>
        </Division>
        <Division
          marginTop={wp(15)}
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontSize={wp(3.5)}
            fontWeight='bold'>
            İsim
          </Typography>
          <TextInput
            autoCapitalize='none'
            style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
            placeholderTextColor='#8898aa'
            placeholder={item.item.userName}
            //secureTextEntry
            onChangeText={(text) => {
              setName(text)
            }}
          />
        </Division>
        <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(2)} />
        <Division
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontSize={wp(3.5)}
            fontWeight='bold'>
            Email
          </Typography>
          <TextInput
            autoCapitalize='none'
            style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
            placeholderTextColor='#8898aa'
            placeholder={item.item.userMail}
            //secureTextEntry
            onChangeText={(text) => {
              setMail(text)
            }}
          />
        </Division>
        <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(2)} />
        <Division
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontSize={wp(3.5)}
            fontWeight='bold'>
            Yetki
          </Typography>
          <Division
            flexDirection='row'>
            <Touchable
              width={wp(19)}
              height={wp(8)}
              borderRadius={wp(4)}
              borderWidth={1}
              backgroundColor={define == 'Yönetici' ? '#1FB9FC' : '#ffffff'}
              borderColor='#1FB9FC'
              justifyContent='center'
              alignItems='center'
              onPress={() => {
                setDefine('Yönetici')
              }}>
              <Typography
                textAlign='center'
                color={define == 'Yönetici' ? '#ffffff' : '#1FB9FC'}
                fontSize={wp(3.5)}
                fontWeight='semi-bold'>
                Yönetici
                </Typography>
            </Touchable>
            <Touchable
              marginLeft={wp(2)}
              width={wp(19)}
              height={wp(8)}
              backgroundColor={define == 'Gözlemci' ? '#1FB9FC' : '#ffffff'}
              borderRadius={wp(4)}
              borderWidth={1}
              borderColor='#1FB9FC'
              justifyContent='center'
              alignItems='center'
              onPress={() => {
                setDefine('Gözlemci')
              }}>
              <Typography
                textAlign='center'
                color={define == 'Gözlemci' ? '#ffffff' : '#1FB9FC'}
                fontSize={wp(3.5)}
                fontWeight='semi-bold'>
                Gözlemci
                </Typography>
            </Touchable>
            <Touchable
              marginLeft={wp(2)}
              width={wp(19)}
              height={wp(8)}
              borderRadius={wp(4)}
              borderWidth={1}
              backgroundColor={define == 'Bakımcı' ? '#1FB9FC' : '#ffffff'}
              borderColor='#1FB9FC'
              justifyContent='center'
              alignItems='center'
              onPress={() => {
                setDefine('Bakımcı')
              }}>
              <Typography
                textAlign='center'
                color={define == 'Bakımcı' ? '#ffffff' : '#1FB9FC'}
                fontSize={wp(3.5)}
                fontWeight='semi-bold'>
                Bakımcı
                </Typography>
            </Touchable>
          </Division>
        </Division>
        <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(2)} />
        <Division
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontSize={wp(3.5)}
            fontWeight='bold'
          >
            Telefon Numarası
          </Typography>
          <TextInput
            autoCapitalize='none'
            style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
            placeholderTextColor='#8898aa'
            placeholder={item.item.userMobile}
            editable={true}
            //secureTextEntry
            onChangeText={(text) => {
              setMobile(text)
            }}
          />
        </Division>
        <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(2)} />
        <Division
          flexDirection='row'
          justifyContent='space-between'>
          <Typography
            fontSize={wp(3.5)}
            fontWeight='bold'
          >
            Parola
          </Typography>
          <TextInput
            autoCapitalize='none'
            style={{ paddingLeft: wp(4), fontSize: wp(3.5) }}
            placeholderTextColor='#8898aa'
            placeholder={item.item.userPassword}
            editable={true}
            //secureTextEntry={true}
            onChangeText={(pw) => {
              setPw(pw)
            }}
          />
        </Division>
        <Division borderBottomWidth={1} borderColor='#A0A0A0' marginVertical={wp(2)} />
      </Division>
      <Touchable
        bottom={wp(18)}
        position='absolute'
        width={wp(15)}
        height={wp(15)}
        borderRadius={wp(15 / 2)}
        right={wp(5)}
        backgroundColor='#78BB43'
        justifyContent='center'
        alignItems='center'
        onPress={() => {
          if (name !== '' && define !== '' && mobile !== '' && mail !== '' && pw !== '' && id !== -1) {
            try {
              axios
                .request({
                  method: 'put',
                  url: 'http://192.168.1.33:45455/api/Users?id=' + id,
                  data: {
                    userID: id,
                    userName: name,
                    userDefine: define,
                    userMobile: mobile,
                    userPassword: pw,
                    userMail: mail,
                    userImageURL: 'string'
                  }
                })
                .then((response) => {
                  console.warn(response.data)
                })
            } catch (error) {
              console.log(error)
            }
          }
          else {
            console.warn('hata')
          }
        }}>
        <Tick width={wp(8)} height={wp(8)} fill={'#ffffff'} />
      </Touchable>

    </>
  )
}
