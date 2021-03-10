import React, { useEffect } from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { Design } from '~/hooks/useDesigns'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IdPassing from '~/redux/actions/IdAction'
import { useSelector, useDispatch, connect } from 'react-redux'
const directionMap: any = {
  vertical: {
    x: 'row',
    y: 'column'
  },
  horizontal: {
    x: 'column',
    y: 'row'
  }
}

interface DesignsCardProps {
  item: Design
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical }: DesignsCardProps, props) => {

  const itemData = useSelector((state) => state.IdPass.item)
  const dispatch = useDispatch()
  const theme = useTheme()
  const { navigate } = useNavigation()
  const { top, left, right, bottom } = theme.spacing.insets
  const direction = directionMap[vertical ? 'vertical' : 'horizontal']
  const paddingStyles = vertical
    ? {}
    : {
      paddingTop: top,
      paddingBottom: bottom
    }
  const layoutTrick = vertical
    ? {}
    : {
      marginHorizontal: -20,
      paddingHorizontal: 20
    }
  // if (item.error) {
  //   return (
  //     <Division
  //       flex={1}
  //       justifyContent='center'
  //       alignItems='center'>
  //       <Typography
  //         fontSize={wp(3)}
  //         color='#222F5A'>Tasarım Bulunmamaktadır!</Typography>
  //     </Division>
  //   )
  // }
  if (!item && !item.error) {
    return (
      <Division
        {...layoutTrick}
        flexDirection={direction.y}
        overflow="hidden"
        backgroundColor="white"
        withBorderRadius
        width={vertical ? wp(90) : 'auto'}
        height={vertical ? hp(50) : 'auto'}>
        <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow="hidden">
          <Skeleton />
        </Division>
        <Division
          paddingTop={top}
          paddingRight={right}
          paddingLeft={left}
          paddingBottom={bottom}
          flex={vertical ? 5 : 2}>
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division height={25} paddingVertical={theme.spacing.itemGutter} marginTop={15}>
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }

  if (item.type == 'billboard') {
    return (
      <Division
        marginVertical={hp(2)}
        borderRadius={wp(3)}
        {...layoutTrick}
        flexDirection={direction.y}
        overflow="scroll"
        backgroundColor="white"
        borderTopRightRadius={6}
        borderTopLeftRadius={6}
        shadowColor='#CFE1F4'
        shadowOffset={
          {
            width: 0,
            height: 5
          }
        }
        shadowRadius={10}
        shadowOpacity={1}
        elevation={3}// TODO IOS'ta gölgelendirme gözükmüyor
        width={wp(90)}
        height={wp(65)}>
        <Division {...paddingStyles} flex={7} overflow="hidden">
          <ScrollView
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            horizontal={true}>
            {
              item.designImages.map((img,) => {
                return (
                  <Division
                    height={wp(35)}
                    width={wp(90)} >
                    <Image
                      source={{ uri: img.imageUrl }}
                      style={{
                        width: '100%',
                        flex: 1,
                        height: 'auto',
                        resizeMode: 'cover'
                      }} />
                  </Division>
                )
              })}
          </ScrollView>
          <Division
            position='absolute'
            marginLeft={wp(3)}
            marginTop={wp(3)}
            backgroundColor='#A7C316'
            borderRadius={wp(10)}
            height={hp(5)}
            width={wp(28)}
            justifyContent='center'
            alignItems='center'>
            <Typography
              color='#ffffff'
              fontSize={wp(3.5)}
              letterSpacing={0.4}
            > {item.createdAt} </Typography>
          </Division>
        </Division>
        <Division alignSelf='stretch' borderWidth={3} borderColor='#A7C316' />
        <Division
          paddingTop={top}
          paddingRight={right}
          paddingLeft={left}
          paddingBottom={bottom}
          flex={vertical ? 5 : 2}>
          <Touchable
            onPress={() => {
              {
                dispatch(IdPassing(item))
                navigate('DetailsA')
                // console.log(itemData)
              }
            }}>
            <Typography
              fontSize={wp(4.5)}
              color="#222f5a"
              lineHeight={24}
              letterSpacing={0}
              numberOfLines={1}>
              {item.title}
            </Typography>
            <Typography
              fontSize={wp(3.5)}
              color="#A7C316"
              lineHeight={16}
              letterSpacing={0.4}
              numberOfLines={1}>
              {item.detail}
            </Typography>
          </Touchable>
          <Division alignSelf='stretch' marginHorizontal={wp(1)} marginVertical={wp(2)} borderWidth={1} borderColor='#EEF1F3' />
          <Division
            flexDirection='row'
            alignItems='center'>
            {item.designerProfile.avatarUrl ? <Division
              backgroundColor='#ECF8FB'
              height={wp(10)}
              width={wp(10)}
              borderRadius={wp(10) / 2}
              justifyContent='center'
              alignItems='center'>
              <Image
                source={{ uri: item.designerProfile.avatarUrl }}
                style={{
                  width: wp(10),
                  flex: 1,
                  height: wp(10),
                  borderRadius: wp(5),
                  resizeMode: 'cover'
                }} />
            </Division>
              : <Division
                backgroundColor='#F8FAED'
                height={wp(10)}
                width={wp(10)}
                borderRadius={wp(10) / 2}
                justifyContent='center'
                alignItems='center'>
                <Typography
                  fontSize={wp(4)}
                  color='#A7C316'>
                  {item.designerProfile.fullName.split(' ').map(name => name[0]).join('').toUpperCase()}
                </Typography>
              </Division>}
            <Division>
              <Typography
                marginLeft={wp(3)}
                fontSize={wp(4)}
                lineHeight={20}
                letterSpacing={0}
                color='#1a1c3a'>
                {item.designerProfile.fullName}
              </Typography>
            </Division>
          </Division>
        </Division>
      </Division>
    )
  }

  if (item.type == 'clp') {
    return (
      <Division
        marginVertical={hp(2)}
        borderRadius={wp(3)}
        {...layoutTrick}
        flexDirection={direction.y}
        overflow="scroll"
        backgroundColor="white"
        borderTopRightRadius={6}
        borderTopLeftRadius={6}
        shadowColor='#CFE1F4'
        shadowOffset={
          {
            width: 0,
            height: 5
          }
        }
        shadowRadius={10}
        shadowOpacity={1}
        elevation={3}// TODO IOS'ta gölgelendirme gözükmüyor
        width={vertical ? wp(90) : 'auto'}
        height={vertical ? wp(65) : 'auto'}>
        <Division {...paddingStyles} flex={7} overflow="hidden">
          <ScrollView
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            horizontal={true}>
            {
              item.designImages.map((img,) => {
                // console.log(img.imageUrl.length)
                return (
                  <Division
                    height={wp(35)}
                    width={wp(90)}
                  >
                    <Image
                      source={{ uri: img.imageUrl }}
                      style={{
                        width: '100%',
                        flex: 1,
                        height: 'auto',
                        resizeMode: 'cover'
                      }} />
                  </Division>
                )
              })}
          </ScrollView>
          <Division
            position='absolute'
            marginLeft={wp(3)}
            marginTop={wp(3)}
            backgroundColor='#51BCDA'
            borderRadius={wp(10)}
            height={hp(5)}
            width={wp(28)}
            justifyContent='center'
            alignItems='center'>
            <Typography
              color='#ffffff'
              fontSize={wp(3.5)}
              letterSpacing={0.4}
            >{item.createdAt} </Typography>
          </Division>
        </Division>
        <Division alignSelf='stretch' borderWidth={3} borderColor='#51BCDA' />
        <Division
          paddingTop={top}
          paddingRight={right}
          paddingLeft={left}
          paddingBottom={bottom}
          flex={vertical ? 5 : 2}>
          <Touchable
            onPress={() => {
              dispatch(IdPassing(item))
              navigate('DetailsA')
            }}>
            <Typography
              fontSize={wp(4.5)}
              color="#222f5a"
              lineHeight={24}
              letterSpacing={0}
              numberOfLines={1}>
              {item.title}
            </Typography>
            <Typography
              fontSize={wp(3.5)}
              color="#51BCDA"
              lineHeight={16}
              letterSpacing={0.4}
              numberOfLines={1}>
              {item.detail}
            </Typography>
          </Touchable>
          <Division alignSelf='stretch' marginHorizontal={wp(1)} marginVertical={wp(2)} borderWidth={1} borderColor='#EEF1F3' />
          <Division
            flexDirection='row'
            alignItems='center'>
            {item.designerProfile.avatarUrl ? <Division
              backgroundColor='#ECF8FB'
              height={wp(10)}
              width={wp(10)}
              borderRadius={wp(10) / 2}
              justifyContent='center'
              alignItems='center'>
              <Image
                source={{ uri: item.designerProfile.avatarUrl }}
                style={{
                  width: wp(10),
                  flex: 1,
                  height: wp(10),
                  borderRadius: wp(5),
                  resizeMode: 'cover'
                }} />
            </Division>
              : <Division
                backgroundColor='#ECF8FB'
                height={wp(10)}
                width={wp(10)}
                borderRadius={wp(10) / 2}
                justifyContent='center'
                alignItems='center'>
                <Typography
                  fontSize={wp(4)}
                  color='#51BCDA'>
                  {item.designerProfile.fullName.split(' ').map(name => name[0]).join('').toUpperCase()}
                </Typography>
              </Division>}
            <Division>
              <Typography
                marginLeft={wp(3)}
                fontSize={wp(4)}
                lineHeight={20}
                letterSpacing={0}
                color='#1a1c3a'>
                {item.designerProfile.fullName}
              </Typography>
            </Division>
          </Division>
        </Division>
      </Division>
    )
  }
  if (item.type == 'led') {
    return (
      <Division
        marginVertical={hp(2)}
        borderRadius={wp(3)}
        {...layoutTrick}
        flexDirection={direction.y}
        overflow="scroll"
        backgroundColor="white"
        borderTopRightRadius={6}
        borderTopLeftRadius={6}
        shadowColor='#CFE1F4'
        shadowOffset={
          {
            width: 0,
            height: 5
          }
        }
        shadowRadius={10}
        shadowOpacity={1}
        elevation={3}// TODO IOS'ta gölgelendirme gözükmüyor
        width={vertical ? wp(90) : 'auto'}
        height={vertical ? wp(65) : 'auto'}>
        <Division {...paddingStyles} flex={7} overflow="hidden">
          <ScrollView
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            horizontal={true}>
            {
              item.designImages.map((img,) => {
                // console.log(img.imageUrl.length)
                return (
                  <Division
                    height={wp(35)}
                    width={wp(90)}
                  >
                    <Image
                      source={{ uri: img.imageUrl }}
                      style={{
                        width: '100%',
                        flex: 1,
                        height: 'auto',
                        resizeMode: 'cover'
                      }} />
                  </Division>
                )
              })
            }
          </ScrollView>
          <Division
            position='absolute'
            marginLeft={wp(3)}
            marginTop={wp(3)}
            backgroundColor='#F77F0F'
            borderRadius={wp(10)}
            height={hp(5)}
            width={wp(28)}
            justifyContent='center'
            alignItems='center'>
            <Typography
              color='#ffffff'
              fontSize={wp(3.5)}
              letterSpacing={0.4}
            >{item.createdAt} </Typography>
          </Division>
        </Division>
        <Division alignSelf='stretch' borderWidth={3} borderColor='#F77F0F' />
        <Division
          paddingTop={top}
          paddingRight={right}
          paddingLeft={left}
          paddingBottom={bottom}
          flex={vertical ? 5 : 2}>
          <Touchable
            onPress={() => {
              dispatch(IdPassing(item))
              navigate('DetailsA')
            }}>
            <Typography
              fontSize={wp(4.5)}
              color="#222f5a"
              lineHeight={24}
              letterSpacing={0}
              numberOfLines={1}>
              {item.title}
            </Typography>
            <Typography
              fontSize={wp(3.5)}
              color="#F77F0F"
              lineHeight={16}
              letterSpacing={0.4}
              numberOfLines={1}>
              {item.detail}
            </Typography>
          </Touchable>
          <Division alignSelf='stretch' marginHorizontal={wp(1)} marginVertical={wp(2)} borderWidth={1} borderColor='#EEF1F3' />
          <Division
            flexDirection='row'
            alignItems='center'>
            {item.designerProfile.avatarUrl ? <Division
              backgroundColor='#FDF0E7'
              height={wp(10)}
              width={wp(10)}
              borderRadius={wp(10) / 2}
              justifyContent='center'
              alignItems='center'>
              <Image
                source={{ uri: item.designerProfile.avatarUrl }}
                style={{
                  width: wp(10),
                  flex: 1,
                  height: wp(10),
                  borderRadius: wp(5),
                  resizeMode: 'cover'
                }} />
            </Division>
              : <Division
                backgroundColor='#FDF0E7'
                height={wp(10)}
                width={wp(10)}
                borderRadius={wp(10) / 2}
                justifyContent='center'
                alignItems='center'>
                <Typography
                  fontSize={wp(4)}
                  color='#F77F0F'>
                  {item.designerProfile.fullName.split(' ').map(name => name[0]).join('').toUpperCase()}
                </Typography>
              </Division>}
            <Division>
              <Typography
                marginLeft={wp(3)}
                fontSize={wp(4)}
                lineHeight={20}
                letterSpacing={0}
                color='#1a1c3a'>
                {item.designerProfile.fullName}
              </Typography>
            </Division>
          </Division>
        </Division>
      </Division>
    )
  }
}

//TODO isim kaydolurken max 2 space içerebilir
