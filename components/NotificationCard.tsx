import React from 'react'

import Skeleton from './Skeleton'
import Touchable from './Touchable'

import Division from '~/components/Division'
import Icon from '~/components/Icon'
import Typography from '~/components/Typography'
import { Notification } from '~/hooks/useNotifications'
import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'
import styled from '~/utils/styled'

export interface NotificationCardProps {
  item?: Notification
  hasBackground?: boolean
}

export default ({ item, hasBackground }: NotificationCardProps) => {
  const theme = useTheme()

  if (!item) {
    return (
      <Division
        paddingHorizontal={10}
        paddingVertical={wp(3)}
        flexDirection="row"
        flex={1}
        alignItems="center">
        <Division
          borderRadius={wp(15) / 2}
          height={wp(15)}
          width={wp(15)}
          overflow="hidden"
          flex={1}>
          <Skeleton />
        </Division>
        <Division paddingHorizontal={wp(2)} flex={5}>
          <Division height={25} paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division
            width={250}
            height={25}
            paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
          <Division
            width={125}
            height={25}
            paddingVertical={theme.spacing.itemGutter}>
            <Skeleton />
          </Division>
        </Division>
      </Division>
    )
  }

  return (
    <NotificationWrapper hasBackground={hasBackground}>
      <Division flex={1} marginRight={10}>
        <Division
          borderRadius={wp(15) / 2}
          width={wp(15)}
          justifyContent="center"
          alignItems="center"
          backgroundColor={item.color}
          height={wp(15)}>
          <Typography fontSize={theme.fontSize.h5} color="white">
            {item.avatarLabel}
          </Typography>
        </Division>
      </Division>
      <Division paddingHorizontal={wp(2)} flex={5}>
        <Typography color="#193254" fontSize={theme.fontSize.h5}>
          {item.message}{' '}
          <Typography
            color="#b1bcc7"
            letterSpacing={0.4}
            fontSize={theme.fontSize.h7}>
            {item.date}
          </Typography>
        </Typography>

        <Division
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingTop={wp(2)}>
          {Math.random() > 0.6 ? (
            <Typography color="#b1bcc7" fontSize={theme.fontSize.h6}>
              <Icon name="ios-link" size={wp(3)} color="#b1bcc7" /> Show Ad
            </Typography>
          ) : (
            <Typography
              color="#b1bcc7"
              alignSelf="flex-end"
              fontSize={theme.fontSize.h6}>
              <Icon name="ios-undo" size={wp(3)} color="#b1bcc7" /> Reply
            </Typography>
          )}
        </Division>
      </Division>
    </NotificationWrapper>
  )
}

const NotificationWrapper = styled(Touchable)<{
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
    props.hasBackground
      ? props.theme.colors.transparentPrimary
      : 'transparent'};
`
