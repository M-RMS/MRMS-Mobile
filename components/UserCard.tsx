import React, { useState } from 'react'
import { Modal } from 'react-native'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { propsTasks } from '~/hooks/useDailyTasks'
import Edit from '~/SVGComponents/Edit'
import Trash from '~/SVGComponents/Trash'
import axios from 'axios'
import { propsUserM } from '~/hooks/useUserM'
import useTheme from '~/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'
import Cross from '~/SVGComponents/Cross'
import { useDispatch } from 'react-redux'
import RandomNumberAction from '~/redux/actions/RandomNumberAction'
interface UserMProps {
  item: propsUserM
  onPress?(): any
}

export default ({ item }: UserMProps) => {
  const { navigate } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [name, setName] = useState('?')
  const [id, setID] = useState(-1)
  const dispatch = useDispatch()
  if (!item) {

    return (
      <Division
        borderRadius={wp(5)}
        marginTop={wp(3)}
        width={wp(90)}
        padding={wp(3)}
        minHeight={wp(20)}
        flexDirection='row'
        backgroundColor='#ffffff'>
        <Division>
          <Division
            width={wp(25)}
            height={wp(25)}
            borderRadius={wp(25 / 5)}>
            <Skeleton />
          </Division>
          <Division
            alignItems='center'
            justifyContent='center'
            height={wp(10)}>
            <Skeleton />
          </Division>
        </Division>
        <Division
          paddingLeft={wp(4)}
          flex={1}
          padding={wp(2)}>
          <Skeleton />
          <Division marginVertical={wp(1)} />
          <Skeleton />
          <Division marginVertical={wp(1)} />
          <Skeleton />
        </Division>
        <Division
          width={wp(10)}
          justifyContent='space-evenly'>
          <Division
            width={wp(10)}
            height={wp(10)}
            borderRadius={wp(10 / 2)}>
            <Skeleton />
          </Division>
          <Division
            width={wp(10)}
            height={wp(10)}
            borderRadius={wp(10 / 2)}>
            <Skeleton />
          </Division>
        </Division>

      </Division>
    )
  }
  return (
    <Division
      borderRadius={wp(5)}
      marginTop={wp(3)}
      width={wp(90)}
      padding={wp(3)}
      minHeight={wp(20)}
      flexDirection='row'
      backgroundColor='#ffffff'>
      <Division>
        <Division
          width={wp(25)}
          height={wp(25)}
          borderRadius={wp(25 / 5)}>
          <Image
            source={{ uri: 'http://placeimg.com/500/500/people?19630' }}
            style={{
              width: wp(25),
              height: wp(25),
              borderRadius: wp(25 / 5),
              flex: 1,
              borderWidth: 3,
              borderColor: item.userDefine == 'Yönetici' ? '#FFC90A' : item.userDefine == 'Gözlemci' ? '#78BB43' : '#1F9ED9',
              resizeMode: 'cover'
            }} />
        </Division>
        <Division
          alignItems='center'
          justifyContent='center'
          height={wp(10)}>
          <Typography
            textAlign='center'
            fontSize={wp(4)}
            color='#303E65'
            fontWeight='semi-bold'>
            {item.userDefine}
          </Typography>
        </Division>
      </Division>
      <Division
        paddingLeft={wp(4)}
        flex={1}
        padding={wp(2)}>
        <Typography
          textDecorationLine='underline'
          fontSize={wp(4)}
          color='#303E65'
          fontWeight='semi-bold'>
          İsim:
        </Typography>
        <Typography>
          {item.userName}
        </Typography>
        <Typography
          textDecorationLine='underline'
          fontSize={wp(4)}
          color='#303E65'
          fontWeight='semi-bold'>
          E-Posta Adresi:
        </Typography>
        <Typography>
          {item.userMail}
        </Typography>
        <Typography
          textDecorationLine='underline'
          fontSize={wp(4)}
          color='#303E65'
          fontWeight='semi-bold'>
          Telefon Numarası:
        </Typography>
        <Typography>
          {item.userMobile}
        </Typography>
      </Division>
      <Division
        width={wp(10)}
        justifyContent='space-evenly'>
        <Touchable>
          <Edit width={wp(7)} height={wp(7)} fill={'#FFC90A'} />
        </Touchable>
        <Touchable
          onPress={() => {
            setName(item.userName)
            setID(item.userID)
            setModalVisible(true)
          }}>
          <Trash width={wp(7)} height={wp(7)} fill={'#ED1766'} />
        </Touchable>
      </Division>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}>
        <Division
          padding={wp(5)}
          width={wp(80)}
          height={wp(45)}
          backgroundColor='#ffffff'
          borderWidth={1}
          borderRadius={wp(5)}
          borderColor='#1FB9FC'
          top={hp(50) - wp(45 / 2)}
          marginHorizontal={wp(10)}
          elevation={3}
          shadowOpacity={1}
          shadowColor='black'>
          <Touchable
            alignSelf='flex-end'
            onPress={() => { setModalVisible(false) }}>
            <Cross fill={'#D8D8D8'} width={wp(4)} height={wp(4)} />
          </Touchable>
          <Typography
            fontSize={wp(4)}
            marginTop={wp(2)}>
            <Typography
              fontSize={wp(4)}
              color='#303E65'>{name}</Typography> isimli kullanıcıyı silmek istediğinize emin misiniz?
          </Typography>
          <Touchable
            marginTop={wp(3)}
            borderRadius={wp(3)}
            alignSelf='center'
            width={wp(20)}
            height={wp(10)}
            backgroundColor='red'
            justifyContent='center'
            alignItems='center'
            onPress={() => {
              try {
                axios
                  .request({
                    method: 'delete',
                    url: 'http://192.168.1.33:45455/api/Users/?id=' + id,
                  })
                  .then((response) => {
                    setModalVisible(false)
                    dispatch(RandomNumberAction(Math.random()))
                  })
              } catch (error) {
                console.log(error)
              }
            }}>
            <Typography
              fontSize={wp(4)}
              color='#ffffff'
              fontWeight='bold'
              textAlign='center'>
              Sil
              </Typography>
          </Touchable>
        </Division>
      </Modal>
    </Division>
  )
}
