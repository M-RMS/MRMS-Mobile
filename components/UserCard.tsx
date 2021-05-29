import React, { useState } from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { propsTasks } from '~/hooks/useDailyTasks'
import Edit from '~/SVGComponents/Edit'
import Trash from '~/SVGComponents/Trash'
import AddUser from '~/SVGComponents/AddUser'
import { propsUserM } from '~/hooks/useUserM'
import useTheme from '~/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'

interface UserMProps {
  item: propsUserM
  onPress?(): any
}

export default ({ item }: UserMProps) => {
  const { navigate } = useNavigation()
  const theme = useTheme()

  if (!item) {

    return (
      <Division
        flexDirection='row'
        marginVertical={wp(1.5)}
        borderRadius={wp(10)}
        width={wp(90)}
        height={wp(32)}
        backgroundColor='#ffffff'>
        <Division
          marginLeft={wp(5)}
          marginTop={wp(5)}
          width={wp(10)}
          height={wp(10)}
          borderRadius={wp(5)}>
          <Skeleton />
        </Division>
        <Division>
          <Division
            marginTop={wp(5)}
            marginLeft={wp(3)}
            width={wp(50)}
            height={wp(7)}>
            <Skeleton />
          </Division>
          <Division
            marginTop={wp(1)}
            marginLeft={wp(3)}
            width={wp(50)}
            height={wp(7)}>
            <Skeleton />
          </Division>
          <Division
            marginTop={wp(1)}
            marginLeft={wp(3)}
            width={wp(50)}
            height={wp(7)}>
            <Skeleton />
          </Division>
        </Division>
        <Division
          marginTop={wp(7)}
          marginLeft={wp(3)}
          width={wp(12)}
          height={wp(12)}>
          <Skeleton />
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
            source={{ uri: item.imgUrl }}
            style={{
              width: wp(25),
              height: wp(25),
              borderRadius: wp(25 / 5),
              flex: 1,
              borderWidth: 3,
              borderColor: item.role == 'Yönetici' ? '#FFC90A' : item.role == 'Gözlemci' ? '#78BB43' : '#1F9ED9',
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
            {item.role}
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
          {item.name}
        </Typography>
        <Typography
          textDecorationLine='underline'
          fontSize={wp(4)}
          color='#303E65'
          fontWeight='semi-bold'>
          E-Posta Adresi:
        </Typography>
        <Typography>
          {item.email}
        </Typography>
        <Typography
          textDecorationLine='underline'
          fontSize={wp(4)}
          color='#303E65'
          fontWeight='semi-bold'>
          Telefon Numarası:
        </Typography>
        <Typography>
          {item.mobileNumber}
        </Typography>
      </Division>
      <Division
        width={wp(10)}
        justifyContent='space-evenly'>
        <Touchable>
          <Edit width={wp(7)} height={wp(7)} fill={'#FFC90A'} />
        </Touchable>
        <Touchable>
          <Trash width={wp(7)} height={wp(7)} fill={'#ED1766'} />
        </Touchable>
      </Division>
    </Division>
  )
}
