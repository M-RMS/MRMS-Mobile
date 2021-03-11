import React from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { propsTasks } from '~/hooks/useDailyTasks'
import useTheme from '~/hooks/useTheme'
import { useNavigation } from "@react-navigation/native"
import { wp, hp } from '~/utils/responsive'
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
        overflow="hidden"
        backgroundColor="white"
        withBorderRadius
        width={vertical ? wp(90) : 'auto'}
        height={vertical ? wp(20) : 'auto'}>
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
          </Division>
          <Division height={25} paddingVertical={theme.spacing.itemGutter} margin={1}>
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }

  return (
    <Division>
      <Typography>
        {item.maintenance}
      </Typography>
    </Division>
  )
}

//TODO  {item.date.toDateString()}