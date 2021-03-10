import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Image from './Image'
import Skeleton from './Skeleton'
import Touchable from './Touchable'

import Division from '~/components/Division'
import Icon from '~/components/Icon'
import Typography from '~/components/Typography'
import { Message } from '~/hooks/useMessages'
import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'
import styled from '~/utils/styled'

export interface MessageCardProps {
  item?: Message
  hasBackground?: boolean
}

export default ({ item, hasBackground }: MessageCardProps) => {
  const theme = useTheme()
  const { navigate } = useNavigation()
  if (!item) {
    return (
      <Division
        backgroundColor='white'
        paddingHorizontal={10}
        paddingVertical={wp(3)}
        flexDirection='row'
        flex={1}
        alignItems='center'
      >
        <Division
          borderRadius={wp(15) / 2}
          height={wp(15)}
          width={wp(15)}
          overflow='hidden'
          flex={1}
        >
          <Skeleton />
        </Division>
        <Division paddingHorizontal={wp(2)} flex={5}>
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division
            width={250}
            height={25}
            paddingVertical={theme.spacing.itemGutter}
          >
            <Skeleton />
          </Division>
          <Division
            width={125}
            height={25}
            paddingVertical={theme.spacing.itemGutter}
          >
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }

  return (
    <MessageWrapper hasBackground={hasBackground}>
      <Division flex={1} marginRight={10}>
        <Division
          borderRadius={wp(15) / 2}
          width={wp(15)}
          justifyContent='center'
          overflow='hidden'
          alignItems='center'
          height={wp(15)}
        >
          <Image
            source={{ uri: item.avatar }}
            style={{
              height: wp(15),
              width: wp(15),
              borderRadius: wp(15) / 2,
            }}
          />
        </Division>
      </Division>
      <Touchable
        paddingHorizontal={wp(2)}
        flex={5}
        onPress={() => {
          navigate('MessageContent')
        }}
      >
        <Typography color='#193254' fontSize={theme.fontSize.h5}>
          {item.user}
        </Typography>
        <Typography
          color='#b1bcc7'
          letterSpacing={0.4}
          fontSize={theme.fontSize.h5}
        >
          {item.message}...
        </Typography>
        <Typography marginTop={10} color='#b1bcc7' fontSize={theme.fontSize.h6}>
          <Icon name='ios-time' size={wp(3)} color='#b1bcc7' /> {item.date}
        </Typography>
      </Touchable>
    </MessageWrapper>
  )
}

const MessageWrapper = styled(Touchable)<{
  hasBackground: boolean | undefined
}>`
  padding: ${wp(3)}px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  border-left-width: 6px;
  border-left-color: ${(props) =>
    props.hasBackground ? props.theme.colors.primary : 'transparent'};
  background-color: ${(props) =>
    props.hasBackground ? props.theme.colors.transparentPrimary : 'white'};
`
