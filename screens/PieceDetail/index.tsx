import React, { useEffect, useState } from 'react'
import Touchable from '~/components/Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import useTheme from '~/hooks/useTheme'
import { useNavigation, useRoute } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'
import ArrowDown from '~/SVGComponents/ArrowDown'
import UpArrow from '~/SVGComponents/UpArrow'
import BackArrow from '~/SVGComponents/BackArrow'
import { ScrollView } from 'react-native-gesture-handler'

export interface propsTasks {
  id: number
  pieceId: number
  pieceName: String
  pieceImageUrl: string
  type: Type
  maintenance: String
  isDone: boolean
  riskLevel: number
  machineName?: string
  machineGroup?: string
  riskDescription?: string
  daily?: string
  weekly?: string
  monthly?: string
  halfYearly?: string
  yearly?: string
}
enum Type {
  Daily = 'Günlük Bakım',
  Weekly = 'Haftalık Bakım',
  Monthly = 'Aylık Bakım',
  HalfYearly = '6 Aylık Bakım',
  Yearly = 'Yıllık Bakım'
}

export default () => {
  const { navigate } = useNavigation()
  const theme = useTheme()
  const { goBack } = useNavigation()
  const route = useRoute()

  const [state, setState] = useState(1)

  let itemData: propsTasks = route.params
  useEffect(() => {
    console.log(itemData)
  }, [])
  return (

    <>
      <Division
        height={wp(60)}
        width={wp(100)}>
        <Image
          source={{ uri: itemData.pieceImageUrl }}
          style={{
            width: '100%',
            flex: 1,
            height: 'auto',
            resizeMode: 'cover'
          }} />
        <Division
          backgroundColor='black'
          opacity={0.25}
          position='absolute'
          top={0}
          left={0}
          height={wp(60)}
          width={wp(100)}>
        </Division>
      </Division>
      <Touchable
        width={wp(10)}
        height={wp(10)}
        justifyContent='center'
        alignItems='center'
        top={wp(7)}
        left={wp(4)}
        position='absolute'
        onPress={() => { goBack() }}>
        <BackArrow fill={'white'} />
      </Touchable>
      <Division
        paddingHorizontal={wp(3)}
        paddingVertical={wp(5.2)}
        width={wp(85)}
        height={wp(30)}
        backgroundColor='#ffffff'
        marginHorizontal={wp(15 / 2)}
        marginTop={-wp(5)}
        borderRadius={wp(2)}>
        <Division
          width={wp(12)}
          height={wp(12)}
          borderRadius={wp(6)}
          backgroundColor={itemData.riskLevel == 5 ? '#ED1766'
            : itemData.riskLevel == 4 ? '#ED7823'
              : itemData.riskLevel == 3 ? '#FFC90A'
                : itemData.riskLevel == 2 ? '#78BB43'
                  : '#1F9ED9'}
          position='absolute'
          right={wp(4)}
          top={-wp(6)}
          justifyContent='center'
          alignItems='center'
          borderWidth={2}
          borderColor='#ffffff'>
          <Typography
            textAlign='center'
            fontSize={wp(6)}
            fontWeight='semi-bold'
            color='#ffffff'>
            {itemData.riskLevel}
          </Typography>
        </Division>
        <Typography
          color='#888888'
          fontSize={wp(4)}
          numberOfLines={1}>
          {itemData.machineName + ' / ' + itemData.machineGroup}
        </Typography>
        <Typography
          fontSize={wp(6)}
          color='#193254'>
          {itemData.pieceName}
        </Typography>
        <Division alignSelf='stretch' borderBottomWidth={1} borderBottomColor='#d7dae1' marginVertical={wp(2)} />
        {itemData?.isDone ?
          <Typography
            fontSize={wp(3.3)}
            color='#78BB43'>
            Güncel bir bakımı bulunmamaktadır.
        </Typography>
          :
          <Typography
            fontSize={wp(3.3)}
            color='#ED1766'>
            Güncel bakımları bulunmaktadır.
          </Typography>
        }
      </Division>
      <Division
        height={wp(9)}
        marginTop={wp(5)}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ width: wp(100) }}>
          <Touchable
            width={wp(28)}
            justifyContent='space-between'
            paddingHorizontal={wp(1 / 2)}
            onPress={() => {
              setState(1)
            }}>
            <Typography
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              textAlign='center'
              color={state == 1 ? '#193254' : '#888888'}>
              Risk Detayı
            </Typography>
            <Division alignSelf='stretch' backgroundColor='#1FB9FC' height={state == 1 ? wp(1.5) : 0}
              borderTopLeftRadius={wp(1)} borderTopRightRadius={wp(1)} />
          </Touchable>
          <Touchable
            width={wp(28)}
            justifyContent='space-between'
            paddingHorizontal={wp(1 / 2)}
            onPress={() => {
              setState(2)
            }}>
            <Typography
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              textAlign='center'
              color={state == 2 ? '#193254' : '#888888'}>
              Günlük Bakım
            </Typography>
            <Division alignSelf='stretch' backgroundColor='#1FB9FC' height={state == 2 ? wp(1.5) : 0}
              borderTopLeftRadius={wp(1)} borderTopRightRadius={wp(1)} />
          </Touchable>
          <Touchable
            width={wp(28)}
            justifyContent='space-between'
            paddingHorizontal={wp(1 / 2)}
            onPress={() => {
              setState(3)
            }}>
            <Typography
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              textAlign='center'
              color={state == 3 ? '#193254' : '#888888'}>
              Haftalık Bakım
            </Typography>
            <Division alignSelf='stretch' backgroundColor='#1FB9FC' height={state == 3 ? wp(1.5) : 0}
              borderTopLeftRadius={wp(1)} borderTopRightRadius={wp(1)} />
          </Touchable>
          <Touchable
            width={wp(28)}
            justifyContent='space-between'
            paddingHorizontal={wp(1 / 2)}
            onPress={() => {
              setState(4)
            }}>
            <Typography
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              textAlign='center'
              color={state == 4 ? '#193254' : '#888888'}>
              Aylık Bakım
            </Typography>
            <Division alignSelf='stretch' backgroundColor='#1FB9FC' height={state == 4 ? wp(1.5) : 0}
              borderTopLeftRadius={wp(1)} borderTopRightRadius={wp(1)} />
          </Touchable>
          <Touchable
            width={wp(28)}
            justifyContent='space-between'
            paddingHorizontal={wp(1 / 2)}
            onPress={() => {
              setState(5)
            }}>
            <Typography
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              textAlign='center'
              color={state == 5 ? '#193254' : '#888888'}>
              6 Aylık Bakım
            </Typography>
            <Division alignSelf='stretch' backgroundColor='#1FB9FC' height={state == 5 ? wp(1.5) : 0}
              borderTopLeftRadius={wp(1)} borderTopRightRadius={wp(1)} />
          </Touchable>
          <Touchable
            width={wp(28)}
            justifyContent='space-between'
            paddingHorizontal={wp(1 / 2)}
            onPress={() => {
              setState(6)
            }}>
            <Typography
              fontSize={wp(3.5)}
              fontWeight='semi-bold'
              textAlign='center'
              color={state == 6 ? '#193254' : '#888888'}>
              Yıllık Bakım
            </Typography>
            <Division alignSelf='stretch' backgroundColor='#1FB9FC' height={state == 6 ? wp(1.5) : 0}
              borderTopLeftRadius={wp(1)} borderTopRightRadius={wp(1)} />
          </Touchable>
        </ScrollView>
      </Division>
      <Division alignSelf='stretch' borderBottomWidth={1} borderBottomColor='#d7dae1' />
      <Division
        alignSelf='stretch'
        padding={wp(5)}
        maxHeight={hp(30)}
        backgroundColor='#ffffff'
        marginHorizontal={wp(3)}
        borderRadius={wp(4)}
        marginVertical={wp(5)}
        justifyContent='center'
      >
        <ScrollView>
          {state == 1 ?
            <Typography
              fontSize={wp(3.3)}
              letterSpacing={0.27}
              color='#193254'
            >{
                itemData?.riskDescription ? itemData?.riskDescription : 'Henüz bir risk belirtilmemiştir.'
              }
            </Typography>
            : state == 2 ?
              <Typography
                fontSize={wp(3.3)}
                letterSpacing={0.27}
                color='#193254'
              >{
                  itemData?.daily ? itemData?.daily : 'Günlük bakımı mevcut değildir.'
                }
              </Typography>
              : state == 3 ?
                <Typography
                  fontSize={wp(3.3)}
                  letterSpacing={0.27}
                  color='#193254'
                >{
                    itemData?.weekly ? itemData?.weekly : 'Haftalık bakımı mevcut değildir.'
                  }
                </Typography>
                : state == 4 ?
                  <Typography
                    fontSize={wp(3.3)}
                    letterSpacing={0.27}
                    color='#193254'
                  >{
                      itemData?.monthly ? itemData?.monthly : 'Aylık bakımı mevcut değildir.'
                    }
                  </Typography>
                  : state == 5 ?
                    <Typography
                      fontSize={wp(3.3)}
                      letterSpacing={0.27}
                      color='#193254'
                    >{
                        itemData?.halfYearly ? itemData?.halfYearly : '6 Aylık bakımı mevcut değildir.'
                      }
                    </Typography>
                    : state == 6 ?
                      <Typography
                        fontSize={wp(3.3)}
                        letterSpacing={0.27}
                        color='#193254'
                      >{
                          itemData?.yearly ? itemData?.yearly : 'Yıllık bakımı mevcut değildir.'
                        }
                      </Typography>
                      : <Division />
          }
        </ScrollView>

      </Division>
    </>
  )
}