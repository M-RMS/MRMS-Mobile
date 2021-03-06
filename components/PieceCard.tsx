import React, { useState } from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { propsPieces } from '~/hooks/usePieces'
import useTheme from '~/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'
import Monthly from '~/SVGComponents/Monthly'
import SixMonthly from '~/SVGComponents/SixMonthly'
import Weekly from '~/SVGComponents/Weekly'
import Daily from '~/SVGComponents/Daily'
import Yearly from '~/SVGComponents/Yearly'

interface PieceProps {
  item: propsPieces
  onPress?(): any
}

export default ({ item }: PieceProps) => {
  const { navigate } = useNavigation()
  const theme = useTheme()

  if (!item) {

    return (
      <Division
        marginVertical={wp(1)}
        width={wp(90)}
        height={wp(30)}
        borderRadius={wp(4)}
        flexDirection='row'
        backgroundColor='#ffffff'>
        <Division
          height={wp(30)}
          width={wp(30)}>
          <Skeleton />
        </Division>
        <Division
          flex={1}
          padding={wp(2)}
          justifyContent='space-between'>
          <Division
            marginLeft={wp(3)}
            width={wp(50)}
            height={wp(7)}>
            <Skeleton />
          </Division>
          <Division
            flexDirection='row'
            justifyContent='space-evenly'>
            <Division
              width={wp(5)}
              height={wp(5)}
              borderRadius={wp(5 / 2)}>
              <Skeleton />
            </Division>
            <Division
              width={wp(5)}
              height={wp(5)}
              borderRadius={wp(5 / 2)}>
              <Skeleton />
            </Division>
            <Division
              width={wp(5)}
              height={wp(5)}
              borderRadius={wp(5 / 2)}>
              <Skeleton />
            </Division>
            <Division
              width={wp(5)}
              height={wp(5)}
              borderRadius={wp(5 / 2)}>
              <Skeleton />
            </Division>
            <Division
              width={wp(5)}
              height={wp(5)}
              borderRadius={wp(5 / 2)}>
              <Skeleton />
            </Division>
          </Division>
          <Division
            alignSelf='flex-end'
            marginTop={wp(1)}
            marginLeft={wp(3)}
            width={wp(30)}
            height={wp(4)}>
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }
  return (
    <Touchable
      marginVertical={wp(1)}
      width={wp(90)}
      height={wp(30)}
      borderRadius={wp(4)}
      flexDirection='row'
      backgroundColor='#ffffff'
      onPress={() => {
        navigate('pieceDetail', item.pieceID)
      }}>
      <Division
        height={wp(30)}
        width={wp(30)}>
        <Image
          source={{ uri: item.pieceImgUrl }}
          style={{
            width: wp(30),
            height: wp(30),
            borderTopLeftRadius: wp(4),
            borderBottomLeftRadius: wp(4),
            flex: 1,
            resizeMode: 'cover'
          }} />
      </Division>
      <Division
        flex={1}
        justifyContent='space-between'
        padding={wp(2)}>
        <Division>
          <Typography
            fontSize={wp(4.2)}
            color='#1F263E'
            numberOfLines={1}>
            {item.pieceName}
          </Typography>
          <Typography
            fontSize={wp(2.7)}
            numberOfLines={1}>
            {item.machinez.MachineName + ' / ' + item.groupz.GroupName}
          </Typography>
        </Division>
        <Division
          flexDirection='row'
          justifyContent='space-evenly'>
          <Daily width={wp(5)} height={wp(5)} fill={item?.maintenanceType[0]?.MaintenanceType == 'G??nl??k' ? 'green' : '#ACACAC'} />
          <Weekly width={wp(5)} height={wp(5)} fill={item?.maintenanceType[1]?.MaintenanceType == 'Haftal??k' ? 'green' : '#ACACAC'} />
          <Monthly width={wp(5)} height={wp(5)} fill={item?.maintenanceType[2]?.MaintenanceType == 'Ayl??k' ? 'green' : '#ACACAC'} />
          <SixMonthly width={wp(5)} height={wp(5)} fill={item?.maintenanceType[3]?.MaintenanceType == 'Alt?? ayl??k' ? 'green' : '#ACACAC'} />
          <Yearly width={wp(5)} height={wp(5)} fill={item?.maintenanceType[4]?.MaintenanceType == 'Y??ll??k' ? 'green' : '#ACACAC'} />
        </Division>
        <Division
          alignItems='flex-end'>
          <Typography
            fontSize={wp(3.5)}
            color='#1F263E'
            numberOfLines={1}>
            Risk Derecesi: <Typography
              fontSize={wp(3.5)}
              color={item.pieceRiskLevel == 5 ? '#ED1766'
                : item.pieceRiskLevel == 4 ? '#ED7823'
                  : item.pieceRiskLevel == 3 ? '#FFC90A'
                    : item.pieceRiskLevel == 2 ? '#78BB43'
                      : '#1F9ED9'}>{item.pieceRiskLevel}</Typography>
          </Typography>
        </Division>
      </Division>
    </Touchable >
  )
}
