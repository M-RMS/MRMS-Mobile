import React, { useState } from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { propsTasks } from '~/hooks/useDailyTasks'
import useTheme from '~/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'
import ArrowDown from '~/SVGComponents/ArrowDown'
import UpArrow from '~/SVGComponents/UpArrow'
import Detail from '~/SVGComponents/Detail'

interface DailyTasksProps {
  item: propsTasks
  onPress?(): any
}

export default ({ item }: DailyTasksProps) => {
  const { navigate } = useNavigation()
  const theme = useTheme()

  if (!item) {

    return (
      <Division
        flexDirection='row'
        marginVertical={wp(1.5)}
        marginHorizontal={wp(5)}
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
  const [arrowState, setArrowState] = useState(false)
  return (
    <Division
      borderColor={item.riskLevel == 5 ? '#ED1766'
        : item.riskLevel == 4 ? '#ED7823'
          : item.riskLevel == 3 ? '#FFC90A'
            : item.riskLevel == 2 ? '#78BB43'
              : '#1F9ED9'}
      marginVertical={wp(1.5)}
      marginHorizontal={wp(5)}
      borderRadius={wp(10)}
      width={wp(90)}
      height={arrowState ? wp(60) : wp(35)}
      borderWidth={1.5}
      backgroundColor='#ffffff'>
      <Division
        marginHorizontal={wp(5)}
        marginTop={wp(3)}
        marginBottom={wp(1)}
        flexDirection='row'
        alignItems={!arrowState ? 'center' : 'flex-start'}
        justifyContent='space-around'>
        <Division
          height={wp(10)}
          width={wp(10)}
          borderRadius={wp(5)}>
          <Image
            source={{ uri: item.pieceImageUrl }}
            style={{
              width: wp(10),
              height: wp(10),
              borderRadius: wp(5),
              borderWidth: 1,
              flex: 1,
              resizeMode: 'cover'
            }} />
        </Division>
        <Division
          justifyContent={arrowState ? 'flex-start' : 'center'}
          height={arrowState ? wp(44) : wp(19)}
          width={wp(50)}
          marginHorizontal={wp(2)}>
          <Typography
            numberOfLines={arrowState ? 3 : 1}
            fontSize={wp(4)}
            color='#303E65'>
            Parça Adı:
            <Typography>
              {' ' + item.pieceName}
            </Typography>
          </Typography>
          <Typography
            numberOfLines={arrowState ? 3 : 1}
            fontSize={wp(4)}
            color='#303E65'>
            Bakım:
            <Typography>
              {' ' + item.maintenance}
            </Typography>
          </Typography>
          {!arrowState ? <Division /> : <Typography
            numberOfLines={3}
            fontSize={wp(4)}
            color='#303E65'>
            Bakım Döngüsü
            <Typography>
              {' ' + item.type}
            </Typography>
          </Typography>}
        </Division>
        <Division borderLeftWidth={1} marginRight={wp(2)} opacity={0.5} height={arrowState ? wp(42) : wp(19)} borderColor={item.riskLevel == 5 ? '#ED1766'
          : item.riskLevel == 4 ? '#ED7823'
            : item.riskLevel == 3 ? '#FFC90A'
              : item.riskLevel == 2 ? '#78BB43'
                : '#1F9ED9'} />
        <Division>
          <Typography
            textAlign='center'
            fontSize={wp(2.4)}
            color='#303E65'>
            Risk Derecesi
          </Typography>
          <Typography
            color={item.riskLevel == 5 ? '#ED1766'
              : item.riskLevel == 4 ? '#ED7823'
                : item.riskLevel == 3 ? '#FFC90A'
                  : item.riskLevel == 2 ? '#78BB43'
                    : '#1F9ED9'}
            textAlign='center'
            fontSize={wp(8)}>
            {item.riskLevel}
          </Typography>
          {arrowState ?
            <Touchable
              height={wp(30)}
              justifyContent='center'
              alignItems='center'>
              <Detail fill={item.riskLevel == 5 ? '#ED1766'
                : item.riskLevel == 4 ? '#ED7823'
                  : item.riskLevel == 3 ? '#FFC90A'
                    : item.riskLevel == 2 ? '#78BB43'
                      : '#1F9ED9'} />
            </Touchable>
            : <Division />}
        </Division>
      </Division>
      <Division borderTopWidth={1} opacity={0.5} marginHorizontal={wp(2)} borderColor={item.riskLevel == 5 ? '#ED1766'
        : item.riskLevel == 4 ? '#ED7823'
          : item.riskLevel == 3 ? '#FFC90A'
            : item.riskLevel == 2 ? '#78BB43'
              : '#1F9ED9'} marginTop={arrowState ? wp(0) : wp(0)} />
      <Division
        alignItems='center'
        height={wp(11)}
        justifyContent='space-around'
        flexDirection='row'
        marginHorizontal={wp(5)}>
        <Touchable
          borderColor={item.riskLevel == 5 ? '#ED1766'
            : item.riskLevel == 4 ? '#ED7823'
              : item.riskLevel == 3 ? '#FFC90A'
                : item.riskLevel == 2 ? '#78BB43'
                  : '#1F9ED9'}
          borderWidth={1}
          width={wp(25)}
          height={wp(7)}
          borderRadius={wp(5)}
          justifyContent='center'
          alignItems='center'>
          <Typography
            color={item.riskLevel == 5 ? '#ED1766'
              : item.riskLevel == 4 ? '#ED7823'
                : item.riskLevel == 3 ? '#FFC90A'
                  : item.riskLevel == 2 ? '#78BB43'
                    : '#1F9ED9'}
            textAlign='center'
            fontSize={wp(3.5)}>
            Tamamlandı
          </Typography>
        </Touchable>
        <Touchable
          borderColor='red'
          borderWidth={1}
          width={wp(25)}
          height={wp(7)}
          borderRadius={wp(5)}
          justifyContent='center'
          alignItems='center'>
          <Typography
            color='red'
            textAlign='center'
            fontSize={wp(3.5)} >
            Arızalı
            </Typography>
        </Touchable>
        <Touchable
          onPress={() => {
            setArrowState(!arrowState)
          }}>
          {arrowState ? <UpArrow fill='#303E65' /> : <ArrowDown fill='#303E65' />}
        </Touchable>
      </Division>
    </Division >
  )
}
