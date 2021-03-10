import React from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
import { FieldOfficerBillboard } from '~/hooks/useFieldOfficerBillboard'
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

interface FieldOfficerBillboardCardProps {
  item: FieldOfficerBillboard
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical }: FieldOfficerBillboardCardProps) => {
  
  
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
    <Touchable
      marginHorizontal={wp(5)}
      marginVertical={wp(3)}
      width={wp(90)}
      height={wp(20)}
      justifyContent='center'
      onPress={() => { navigate('DetailsF',item) }}>
      <Division
        flexDirection='row'>
        <Division
          width={wp(18)}
          height={wp(18)}>  
                  
                  
                  
                  <Image
                    source={{ uri: item.design.designImages[0].imageUrl }}
                    style={{
                      flex: 1,
                      resizeMode: 'cover',
                      borderRadius: wp(2)
                  }}/>
                     
          <Division
            height={wp(18)}
            width={wp(1.8)}
            backgroundColor={item.design.type == 'billboard' ? '#A7C316' : item.design.type == 'led' ? '#E56718' : '#50BCDA'}
            position='absolute'
            left={0}
            borderTopLeftRadius={wp(2)}
            borderBottomLeftRadius={wp(2)} />
        </Division>
        <Division
          width={wp(60)}
          justifyContent='space-around'>
          <Typography
            marginHorizontal={wp(2)}
            color='#222f5a'
            fontSize={wp(3.5)}
            lineHeight={wp(4)}>
            {item.design.title}
          </Typography>
          <Division
            marginLeft={wp(2)}>
            <Typography
              color='#8898aa'
              fontSize={wp(3.5)}
              lineHeight={wp(4.5)}
              letterSpacing={0.35}>
              {item.counts.billboard > 0 ? item.counts.billboard : item.counts.clp > 0 ? item.counts.clp : item.counts.led } {item.design.type == 'billboard' ? 'Billboard Reklam Alanı' : item.design.type == 'clp' ? 'Raket Reklam Alanı' : 'Led Reklam Alanı' }
            </Typography>
          </Division>
        </Division>
      </Division>
    </Touchable>
  )
}

//TODO  {item.date.toDateString()}