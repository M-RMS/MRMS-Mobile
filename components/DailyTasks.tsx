import React from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { propsTasks } from '~/hooks/useDailyTasks'
import useTheme from '~/hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import { wp, hp } from '~/utils/responsive'
import { StyleSheet } from 'react-native';
import RiskManagement from '~/SVGComponents/RiskManagement'
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

interface DailyTasksProps {
  item: propsTasks
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical }: DailyTasksProps) => {


  const { navigate } = useNavigation()
  const theme = useTheme()
  //const { navigate } = useNavigation()
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

  if (!item) {
    return (
      <Division
        marginHorizontal={wp(5)}
        {...layoutTrick}
        flexDirection={direction.y}
        overflow='hidden'
        backgroundColor='white'
        withBorderRadius
        width={vertical ? wp(90) : 'auto'}
        height={vertical ? wp(20) : 'auto'}>
        <Division {...paddingStyles} flex={vertical ? 7 : 1} overflow='hidden'>
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
          </Division>
          <Division height={25} paddingVertical={theme.spacing.itemGutter} margin={1}>
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }

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
      height={wp(25)}
      borderWidth={1.5}
      backgroundColor='#ffffff'

    >
      <Division
        marginHorizontal={wp(5)}
        marginVertical={wp(3)}
        flexDirection='row'
        justifyContent='space-around'
        alignItems='center'>
        <Division

          height={wp(10)}
          width={wp(10)}
          borderRadius={wp(5)}
        >
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
          width={wp(50)}


          marginHorizontal={wp(2)}>
          <Typography
            numberOfLines={1}
            fontSize={wp(4)}
            color='#303E65'>
            Parça Adı:
            <Typography>
              {' ' + item.pieceName}
            </Typography>
          </Typography>
          <Typography
            numberOfLines={1}
            fontSize={wp(4)}
            color='#303E65'>
            Bakım:
            <Typography

            >
              {' ' + item.maintenance}
            </Typography>
          </Typography>
        </Division>
        <Division borderWidth={0.5} marginRight={wp(2)} opacity={0.5} height={wp(19)} borderColor={item.riskLevel == 5 ? '#ED1766'
          : item.riskLevel == 4 ? '#ED7823'
            : item.riskLevel == 3 ? '#FFC90A'
              : item.riskLevel == 2 ? '#78BB43'
                : '#1F9ED9'} />
        <Division
        >
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
        </Division>

      </Division>


    </Division >
  )
}
