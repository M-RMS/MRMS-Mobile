/*
 * Aklı olan bu dosyayı ellemez.
 */

import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useRef, ReactNode, memo } from 'react'
import { View } from 'react-native'
import Animated, { Extrapolate } from 'react-native-reanimated'
import { useSafeArea, EdgeInsets } from 'react-native-safe-area-context'
import Svg, { Defs, LinearGradient, Stop, Path, G, Use } from 'react-native-svg'

import { Back } from './SVGComponents'
import Touchable from './Touchable'
import Typography from './Typography'

import Division from '~/components/Division'
import Logo from '~/components/Logo'
import useMemorizedAnimatedValue from '~/hooks/useMemorizedAnimatedValue'
import useTheme from '~/hooks/useTheme'
import { hp, wp } from '~/utils/responsive'

const NAVIGATION_HEIGHT = hp(10)

interface NavigationProps {
  scale: Animated.Node<number>
  offset: Animated.Node<number>
  headerComponent?(): JSX.Element
  insets: EdgeInsets
  headerLeft?(): JSX.Element
  headerRight?(): JSX.Element
}

const Navigation = ({
  scale,
  insets,
  headerComponent,
  offset,
  headerLeft,
  headerRight
}: NavigationProps) => {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        elevation: 99,
        top: insets.top,
        zIndex: 99,
        transform: [
          {
            translateY: !headerComponent ? 0 : Animated.divide(offset, 22)
          }
        ]
      }}>
      <Division
        left={0}
        elevation={80}
        zIndex={96}
        right={0}
        height={NAVIGATION_HEIGHT}
        paddingHorizontal={20}
        flexDirection="row"
        alignItems="center">
        <Division flex={1} alignItems="flex-start" elevation={20}>
          {headerLeft && headerLeft()}
        </Division>
        <Division>
          <Logo width={hp(5)} />
        </Division>

        <Division flex={1} alignItems="flex-end" elevation={20}>
          <Division>{headerRight && headerRight()}</Division>
        </Division>
      </Division>
      <Animated.View
        style={{
          position: 'absolute',
          top: wp(-10),
          right: wp(-10),
          transform: [
            {
              scaleX: scale
            },
            {
              scaleY: scale
            }
          ]
        }}>
        <Logo width={wp(40)} height={wp(40)} fill="white" opacity={0.2} />
      </Animated.View>
    </Animated.View>
  )
}

const BackgroundRectangle = ({ insets }: { insets: EdgeInsets }) => {
  const theme = useTheme()
  return (
    <Animated.View
      style={{
        zIndex: 8,
        elevation: 8
      }}>
      <Svg
        preserveAspectRatio="xMidYMid slice"
        width={wp(100)}
        height={NAVIGATION_HEIGHT + insets.top}
        viewBox="0 0 375 100">
        <Defs>
          <LinearGradient
            x1="93.656%"
            y1="55.111%"
            x2="23.981%"
            y2="34.535%"
            id="prefix__a">
            <Stop stopColor={theme.colors.primaryGradient} offset="0%" />
            <Stop stopColor={theme.colors.primary} offset="100%" />
          </LinearGradient>
        </Defs>
        <Path
          d="M627 139h375v100H627z"
          transform="translate(-627 -139)"
          fill="url(#prefix__a)"
          fillRule="evenodd"
        />
      </Svg>
    </Animated.View>
  )
}

interface BackgroundClipPathProps {
  insets: EdgeInsets
  title?: string
  headerUpperComponent?(): JSX.Element
  description?: string | null
  hideOpacity: Animated.Node<number>
  offset: Animated.Node<number>
}

const BackgroundClipPath = ({
  insets,
  title,
  description,
  headerUpperComponent,
  hideOpacity,
  offset
}: BackgroundClipPathProps) => {
  const route = useRoute()
  const theme = useTheme()

  return (
    <Animated.View
      style={{
        position: 'absolute',
        zIndex: 9,
        height: 300,
        transform: [
          {
            translateY: offset
          }
        ]
      }}>
      <Svg
        preserveAspectRatio="xMidYMin meet"
        width={wp(100)}
        height={hp(100)}
        viewBox={'0 0 375 285'}>
        <Defs>
          <LinearGradient
            x1="93.656%"
            y1="55.111%"
            x2="23.981%"
            y2="34.535%"
            id="prefix__c">
            <Stop stopColor={theme.colors.primaryGradient} offset="0%" />
            <Stop stopColor={theme.colors.primary} offset="100%" />
          </LinearGradient>
          <Path
            d="M0 240.306l297.605-69.06C342.92 160.731 375 120.355 375 73.835V0H0v240.306z"
            id="prefix__a"
          />
        </Defs>
        <G fillRule="nonzero" transform="translate(0 -1)" fill="none">
          <Use fill="url(#prefix__c)" xlinkHref="#prefix__a" />
        </G>
      </Svg>
      <Animated.View
        style={{
          position: 'absolute',
          zIndex: 99,
          right: 0,
          left: 0,
          top: NAVIGATION_HEIGHT + insets.top,
          opacity: headerUpperComponent ? 1 : hideOpacity,
          transform: [
            {
              translateY: headerUpperComponent
                ? 0
                : Animated.multiply(offset, -0.5)
            }
          ]
        }}>
        {headerUpperComponent ? (
          <Division paddingHorizontal={10}>{headerUpperComponent()}</Division>
        ) : (
          <Division paddingHorizontal={25}>
            <Typography
              fontWeight="bold"
              fontSize={theme.fontSize.h2}
              marginBottom={wp(1)}
              type="heading">
              {title ?? route.name}
            </Typography>
            <Typography
              numberOfLines={2}
              fontSize={theme.fontSize.h8}
              type="subheading">
              {description}
            </Typography>
          </Division>
        )}
      </Animated.View>
    </Animated.View>
  )
}
interface AnimatedHeaderProps {
  title?: string
  description?: string | null
  children?: ReactNode
  withoutTab?: boolean
  backDropComponent?: any
  headerUpperComponent?(): JSX.Element
  headerComponent?(): JSX.Element
  headerLeft?(): JSX.Element
  headerRight?(): JSX.Element
  backgroundColor?: string
  headerComponentBox?: boolean
  marginHorizontal?: number
  enableBackButton?: boolean
}

const AnimatedHeaderContainer = ({
  title,
  description,
  children,
  withoutTab = false,
  headerUpperComponent,
  backDropComponent,
  headerComponent,
  headerLeft,
  headerRight,
  backgroundColor,
  headerComponentBox = false,
  marginHorizontal = 13,
  enableBackButton = false
}: AnimatedHeaderProps) => {
  const theme = useTheme()
  const insets = useSafeArea()
  const scrollView = useRef<Animated.ScrollView>(null)
  const scrollY = useMemorizedAnimatedValue(0)

  const transform = Animated.interpolate(scrollY, {
    inputRange: [0, 375 + insets.top],
    outputRange: [0, -375 + insets.top],
    extrapolate: Extrapolate.CLAMP
  })

  const transformWithoutClamp = Animated.interpolate(scrollY, {
    inputRange: [0, 375 + insets.top],
    outputRange: [0, -375 + insets.top]
  })
  const hideOpacity = Animated.interpolate(scrollY, {
    inputRange: [0, 40],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  })
  const scale = Animated.interpolate(scrollY, {
    inputRange: [0, 50, 200],
    outputRange: [1, 0.7, 0.5],
    extrapolate: Extrapolate.CLAMP
  })
  const backgroundScale = Animated.interpolate(scrollY, {
    inputRange: [0, 500],
    outputRange: [1, 1.5],
    extrapolate: Extrapolate.CLAMP
  })
  const hasHeaderComponentY = Animated.interpolate(scrollY, {
    inputRange: [0, 100, 375],
    outputRange: [wp(30), wp(4), 0],
    extrapolate: Extrapolate.CLAMP
  })

  return (
    <Division
      backgroundColor={backgroundColor ?? 'transparent'}
      position="relative"
      flex={1}>
      <Navigation
        insets={insets}
        scale={scale}
        offset={transform}
        headerLeft={enableBackButton ? LeftButton : headerLeft}
        headerComponent={headerComponent}
        headerRight={headerRight}
      />
      <Animated.View
        style={{
          elevation: 99,

          zIndex: 99,
          position: 'absolute',
          top: NAVIGATION_HEIGHT + insets.top - 48,
          left: 0,
          right: 0,
          transform: [
            {
              translateY: hasHeaderComponentY
            }
          ]
        }}>
        {headerComponent &&
          (headerComponentBox ? (
            <View
              style={{
                zIndex: 999
              }}>
              <Division
                marginHorizontal={marginHorizontal}
                borderTopLeftRadius={30}
                borderTopRightRadius={30}
                marginTop={20}
                zIndex={99999}
                overflow="hidden"
                backgroundColor={'white'}>
                {headerComponent()}
              </Division>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                zIndex: 999,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 5
              }}>
              <Division
                flex={1}
                marginHorizontal={25}
                height={44}
                borderRadius={30}
                marginVertical={25}
                zIndex={99999}
                overflow="hidden"
                withShadow
                backgroundColor={'white'}>
                {headerComponent()}
              </Division>
            </View>
          ))}
      </Animated.View>
      <View
        style={{
          zIndex: 8,
          elevation: 5,
          position: 'absolute'
        }}>
        <BackgroundRectangle insets={insets} />
      </View>
      <View
        style={{
          zIndex: 6,
          flex: 1,
          position: 'relative'
        }}>
        <BackgroundClipPath
          insets={insets}
          headerUpperComponent={headerUpperComponent}
          hideOpacity={hideOpacity}
          offset={transform}
          title={title}
          description={description}
        />
        {backDropComponent && (
          <Animated.View
            style={{
              position: 'relative',
              transform: [
                {
                  translateY: transformWithoutClamp
                },
                {
                  scaleX: backgroundScale
                },
                {
                  scaleY: backgroundScale
                }
              ]
            }}>
            {backDropComponent()}
          </Animated.View>
        )}
        {
          <ContentView
            ref={scrollView}
            onScroll={Animated.event([
              {
                nativeEvent: { contentOffset: { y: scrollY } }
              }
            ])}
            insets={insets}
            withoutTab={withoutTab}
            theme={theme}>
            {children}
          </ContentView>
        }
      </View>
    </Division>
  )
}

const LeftButton = () => {
  const { goBack } = useNavigation()
  return (
    <Touchable
      onPress={() => {
        goBack()
      }}>
      <Back fill="white" />
    </Touchable>
  )
}

const ContentView: React.PropsWithChildren<any> = React.forwardRef<
  Animated.ScrollView
>(({ onScroll, insets, withoutTab, children, theme }: any, ref) => {
  return (
    <Animated.ScrollView
      ref={ref}
      style={{
        position: 'relative',
        marginTop: NAVIGATION_HEIGHT + insets.top
      }}
      bounces={false}
      scrollEventThrottle={8}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: wp(42),
        paddingBottom: wp(5) + (withoutTab ? 0 : 60)
      }}
      onScroll={onScroll}>
      <Division paddingHorizontal={theme.spacing.bodyWrapper}>
        {children}
      </Division>
    </Animated.ScrollView>
  )
})

export default memo(AnimatedHeaderContainer)
