import React from 'react'
import Skeleton from './Skeleton'
import Touchable from './Touchable'
import Division from '~/components/Division'
import Image from '~/components/Image'
import Typography from '~/components/Typography'
//import { FieldOfficer } from '~/hooks/useFieldOfficer'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Linking } from 'react-native'

interface FieldOfficerCardProps {
  item: FieldOfficer
  vertical?: boolean
  onPress?(): any
}

export default ({ item, vertical }: FieldOfficerCardProps) => {
  const theme = useTheme()
  //const { navigate } = useNavigation()
  return (
    <Division

      borderRadius={wp(2)}
      backgroundColor='white'
      shadowColor='#CFE1F4'
      shadowOffset={
        {
          width: 0,
          height: 5
        }
      }
      shadowRadius={25}
      shadowOpacity={1}
      elevation={1}// TODO IOS'ta gölgelendirme gözükmüyor
      // onPress={() => navigate('Advertisement')}
      //onPress={() => console.warn(item.name)}
      width={vertical ? wp(90) : 'auto'}
      height={vertical ? wp(20) : 'auto'}
      justifyContent='center'>
      <Division
        flexDirection='row'
        justifyContent='space-around'>
        <Division
          flexDirection='row'
          left={-wp(5)}>
          <Division>
            {item.pp_url && <Division
              marginRight={wp(3)}
              backgroundColor='#ECF8FB'
              height={wp(10)}
              width={wp(10)}
              borderRadius={wp(10) / 2}
              justifyContent='center'
              alignItems='center'>
              <Image
                source={{ uri: item.pp_url }}
                style={{
                  width: wp(10),
                  flex: 1,
                  height: wp(10),
                  borderRadius: wp(5),
                  resizeMode: 'cover'
                }} />
            </Division>}
            {!item.pp_url && <Division
              marginRight={wp(3)}
              backgroundColor='#ECF8FB'
              height={wp(10)}
              width={wp(10)}
              borderRadius={wp(10) / 2}
              justifyContent='center'
              alignItems='center'>
              <Typography
                fontSize={wp(4)}
                color='#51BCDA'>
                {item.name?.split(' ').map(name => name[0]).join('').toUpperCase()}
              </Typography>
            </Division>}
          </Division>
          <Division>
            <Typography
              color='#222f5a'
              fontSize={wp(4)}>
              {item.name}
            </Typography>
            <Typography
              color={'#8898aa'}
              fontSize={wp(3.5)}>
              {item.phone_number}
            </Typography>
          </Division>
        </Division>
        <Touchable
          justifyContent='center'
          right={0}
          onPress={() => {
            Linking.openURL(`tel:${item.phone_number}`)
          }}>
          <Feather name='phone-call' size={wp(6)} color='#51bcda' />
        </Touchable>
      </Division>
    </Division>
  )
}
