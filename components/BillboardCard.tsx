import React from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { Billboard } from '~/hooks/useBillboardCard'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'
import { Entypo } from '@expo/vector-icons'

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

interface BillboardCardProps {
  item: Billboard
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical }: BillboardCardProps) => {
  const theme = useTheme()
  //const { navigate } = useNavigation()
  const { top, bottom } = theme.spacing.insets
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

  if (!item) {
    return (
      <Division
        {...layoutTrick}
        flexDirection={direction.y}
        overflow="hidden"
        backgroundColor="white"
        withBorderRadius
        width={vertical ? wp(80) : 'auto'}
        height={vertical ? hp(40) : 'auto'}
        marginHorizontal={wp(10)}
        marginVertical={wp(3)}>
        <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow="hidden">
          <Skeleton />
        </Division>
      </Division>
    )
  }
  //TODO şuan billboardlar tek divde geliyor. ilerki versiyonda ayırmamız gerekiyor.

  if (item.status != 'Broken') {
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
        width={vertical ? wp(80) : 'auto'}
        height={vertical ? wp(45) : 'auto'}
        marginHorizontal={wp(10)}>
        <Division
          marginHorizontal={wp(5)} marginVertical={wp(5)}>
          {item.status == 'Up_To_Date' && <Division >
            <Division
              flexDirection='row' >
              <Division>
                <Image
                  source={{ uri: item.img_url }}
                  style={{
                    width: wp(15),
                    flex: 1,
                    height: wp(15),
                    resizeMode: 'cover'
                  }} />
              </Division>
              <Division
                justifyContent='space-between'
                marginHorizontal={wp(5)}>
                <Division>
                  <Typography
                    color='#222f5a'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    Alan Kodu:  <Typography
                      color='#93AECC'
                      fontSize={wp(4)}
                      lineHeight={18}>
                      {item.area_code}
                    </Typography>
                  </Typography>
                  <Typography
                    color='#222f5a'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    Görevli:  <Typography
                      color='#93AECC'
                      fontSize={wp(4)}
                      lineHeight={18}>
                      {item.office_bearer}
                    </Typography> </Typography>
                </Division>
                <Typography
                  color='#a7c316'
                  fontSize={wp(4)}
                  lineHeight={18}>Güncel Reklam Alanı</Typography>
              </Division>
            </Division>
            <Division alignSelf='stretch' borderWidth={1} borderColor='#CBDFF4' marginVertical={wp(5)} />
            <Division flexDirection='row'>
              <Entypo name="location-pin" size={wp(6)} color="#ED7214" />
              <Typography
                marginLeft={wp(2)}
                color='#222f5a'
                fontSize={wp(4)}
                lineHeight={20}>
                {item.location}
              </Typography>
            </Division>
          </Division>}
          {item.status == 'Out_Of_Date' && <Division >
            <Division
              flexDirection='row' >
              <Division>
                <Image
                  source={{ uri: item.img_url }}
                  style={{
                    width: wp(15),
                    flex: 1,
                    height: wp(15),
                    resizeMode: 'cover'
                  }} />
              </Division>
              <Division
                justifyContent='space-between'
                marginHorizontal={wp(5)}>
                <Division>
                  <Typography
                    color='#222f5a'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    Alan Kodu:  <Typography
                      color='#93AECC'
                      fontSize={wp(4)}
                      lineHeight={18}>
                      {item.area_code}
                    </Typography>
                  </Typography>
                  <Typography
                    color='#222f5a'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    Görevli:  <Typography
                      color='#93AECC'
                      fontSize={wp(4)}
                      lineHeight={18}>
                      {item.office_bearer}
                    </Typography> </Typography>
                </Division>
                <Typography
                  color='#ebe110'
                  fontSize={wp(4)}
                  lineHeight={18}>Güncel Olmayan Reklam A.</Typography>
              </Division>
            </Division>
            <Division alignSelf='stretch' borderWidth={1} borderColor='#CBDFF4' marginVertical={wp(5)} />
            <Division flexDirection='row'>
              <Entypo name="location-pin" size={wp(6)} color="#8BAF4F" />
              <Typography
                marginLeft={wp(2)}
                color='#222f5a'
                fontSize={wp(4)}
                lineHeight={20}>
                {item.location}
              </Typography>
            </Division>
          </Division>}
          {item.status == 'Empty' && <Division >
            <Division
              flexDirection='row' >
              <Division>
                <Image
                  source={{ uri: item.img_url }}
                  style={{
                    width: wp(15),
                    flex: 1,
                    height: wp(15),
                    resizeMode: 'cover'
                  }} />
              </Division>
              <Division
                justifyContent='space-between'
                marginHorizontal={wp(5)}>
                <Division>
                  <Typography
                    color='#222f5a'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    Alan Kodu:  <Typography
                      color='#93AECC'
                      fontSize={wp(4)}
                      lineHeight={18}>
                      {item.area_code}
                    </Typography>
                  </Typography>
                  <Typography
                    color='#222f5a'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    Görevli:  <Typography
                      color='#93AECC'
                      fontSize={wp(4)}
                      lineHeight={18}>
                      {item.office_bearer}
                    </Typography> </Typography>
                </Division>
                <Typography
                  color='#e20a17'
                  fontSize={wp(4)}
                  lineHeight={18}>Asım Gerçekleşmemiş</Typography>
              </Division>
            </Division>
            <Division alignSelf='stretch' borderWidth={1} borderColor='#CBDFF4' marginVertical={wp(5)} />
            <Division flexDirection='row'>
              <Entypo name="location-pin" size={wp(6)} color="#8BAF4F" />
              <Typography
                marginLeft={wp(2)}
                color='#222f5a'
                fontSize={wp(4)}
                lineHeight={20}>
                {item.location}
              </Typography>
            </Division>
          </Division>}
        </Division>
        <Touchable
          position='absolute'
          top={wp(3)}
          right={wp(3)}>
          <Entypo name="cross" size={wp(5)} color="#D8D8D8" />
        </Touchable>
      </Division>
    )
  }
  if (item.status == 'Broken') {
    return (
      <Division
        marginVertical={wp(2)}
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
        width={vertical ? wp(80) : 'auto'}
        height={vertical ? wp(40) : 'auto'}
        marginHorizontal={wp(10)}>
        <Division
          marginHorizontal={wp(5)} marginVertical={wp(5)}>
          {item.status == 'Broken' && <Division >
            <Division
              justifyContent='space-between'
              marginHorizontal={wp(5)}>
              <Division>
                <Typography
                  color='#222f5a'
                  fontSize={wp(4)}
                  lineHeight={18}>
                  Alan Kodu:  <Typography
                    color='#93AECC'
                    fontSize={wp(4)}
                    lineHeight={18}>
                    {item.area_code}
                  </Typography>
                </Typography>
              </Division>
              <Division marginVertical={wp(1)} />
              <Typography
                color='#8898aa'
                fontSize={wp(4)}
                lineHeight={18}>Arızalı Reklam Alanı</Typography>
            </Division>
            <Division alignSelf='stretch' borderWidth={1} borderColor='#CBDFF4' marginVertical={wp(4)} />
            <Division flexDirection='row'>
              <Entypo name="location-pin" size={wp(6)} color="#1E81BB" />
              <Typography
                marginLeft={wp(2)}
                color='#222f5a'
                fontSize={wp(4)}
                lineHeight={20}>
                {item.location}
              </Typography>
            </Division>
          </Division>}
        </Division>
        <Touchable
          position='absolute'
          top={wp(3)}
          right={wp(3)}>
          <Entypo name="cross" size={wp(5)} color="#D8D8D8" />
        </Touchable>
      </Division>
    )
  }
}
