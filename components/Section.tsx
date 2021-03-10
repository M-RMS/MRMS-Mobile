import React, { ReactNode } from 'react'

import Division from './Division'
import Typography from './Typography'

import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'

interface SectionProps {
  children?: ReactNode
  title?: string
  hasInsets?: boolean
  hasBackground?: boolean
  fluidItems?: boolean
  extra?(): JSX.Element
  withShadow?: boolean
}

export default ({
  children,
  title,
  fluidItems,
  extra,
  hasInsets,
  hasBackground,
  withShadow = false,
  ...props
}: SectionProps) => {
  const theme = useTheme()
  const { top, left, right, bottom } = theme.spacing.insets
  const hasBackgroundStyles = hasBackground
    ? {
      paddingBottom: bottom,
      paddingTop: top,
      paddingLeft: left,
      paddingRight: right
    }
    : {}

  return (//TODO
    <Division
      marginVertical={theme.spacing.sectionVerticalDistance}
      withBorderRadius={hasBackground}
      flex={1}
      elevation={withShadow ? 0 : 1}
      backgroundColor={hasBackground ? 'white' : 'transparent'}
      withShadow={withShadow}
      {...hasBackgroundStyles}>
      {title && (
        <Division
          {...hasBackgroundStyles}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
          paddingBottom={wp(2)}

          marginHorizontal={wp(3)} >
          <Typography
            lineHeight={20}
            letterSpacing={0.4}
            fontWeight="semi-bold"
            color={'#333333'}
            fontSize={wp(4)}>
            {title}
          </Typography>
          <Division>{extra ? extra() : null}</Division>
        </Division>
      )}
      {hasInsets ? (
        <Division
          marginHorizontal={fluidItems ? -10 : 0}
          paddingBottom={bottom}
          paddingLeft={left}
          paddingRight={right}>
          {children}
        </Division>
      ) : (
          <Division marginHorizontal={fluidItems ? -10 : 0}>{children}</Division>
        )}
    </Division>
  )
}
