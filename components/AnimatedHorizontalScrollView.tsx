/*
    ! Bu dosya MapView'da bulunan CustomMarker dosyasındaki Marker ve
    ! HorizontalScrollView'in Animated olarak birlikte çalışması için hazırlandı(kopyalanıp değiştirildi).
*/

import React, { ReactNode, useEffect, useState, useRef, Ref } from 'react'
import { Animated, ViewStyle } from 'react-native'
// import Animated from 'react-native-reanimated'

import MapView, { MapViewProps } from 'react-native-maps'

import Division from '~/components/Division'
import { Advertisement } from '~/hooks/useAdvertisements'
import useTheme from '~/hooks/useTheme'
import { wp, hp } from '~/utils/responsive'

interface Props {
    data: Advertisement[]
    renderItem({ item, key }: { item: Advertisement; key: number }): ReactNode
    loading?: boolean
    animation: Animated.AnimatedValue
}

const CARD_WIDTH = wp(83.4)

const AnimatedHorizontalScrollView = ({
    data,
    renderItem,
    loading,
    animation,
    ...rest
}: Props) => {
    const theme = useTheme()

    return (
        <Animated.ScrollView
            {...rest}
            horizontal
            // pagingEnabled
            // scrollEventThrottle={1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            decelerationRate={'normal'}
            scrollEnabled={!loading}
            // snapToInterval={CARD_WIDTH}
            contentContainerStyle={{
                paddingVertical: theme.spacing.itemGutter,
                paddingHorizontal: theme.spacing.bodyWrapper
            }}
            style={{
                overflow: 'visible',
                marginHorizontal: -(
                    theme.spacing.bodyWrapper + theme.spacing.itemGutter
                )
            }}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: animation
                            }
                        }
                    }
                ],
                { useNativeDriver: true }
            )}>
            {data.map((item, key) => (
                <Division
                    withShadow
                    key={key}
                    marginHorizontal={theme.spacing.itemGutter}>
                    {renderItem({ item, key })}
                </Division>
            ))}
        </Animated.ScrollView>
    )
}

export default AnimatedHorizontalScrollView
