import React from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import RiskManagement from '~/SVGComponents/RiskManagement'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import Searchbar from '~/components/Searchbar'
import PieceCards from './PieceCards'
import { MenuProvider } from 'react-native-popup-menu'

export default () => {
  return (
    <>
      <MenuProvider>
        <Division
          height={wp(32)}
          alignSelf='stretch'
          backgroundColor='#1FB9FC'
          justifyContent='center'
          alignItems='flex-start' >
          <Division
            marginTop={wp(3)}
            flexDirection='row'
            justifyContent='space-around'
            marginHorizontal={wp(5)}>
            <Division
              alignItems='center'
              justifyContent='center'
              width={wp(17)}
              height={wp(13)}
              marginRight={wp(2)}>
              <RiskManagement />
            </Division>
            <Division
              borderColor='#ffffff'
              borderStyle='solid'
              borderLeftWidth={1}
              opacity={0.5} />
            <Division marginLeft={wp(2)}>
              <Typography
                fontSize={wp(5)}
                fontWeight='bold'
                letterSpacing={0.33}
                color='#ffffff'>
                Parça Ara
            </Typography>
              <Typography
                opacity={0.6}
                fontSize={wp(4)}
                color='#ffffff'
                letterSpacing={0.4}
                lineHeight={wp(5)}>
                Mert Mehmet Ezgin
              </Typography>
            </Division>
          </Division>
          <Division
            width={wp(100)}
            alignItems='center'
            position='absolute'
            bottom={-wp(6)}>
          </Division>
          <Touchable
            activeOpacity={1}
            position='absolute'
            zIndex={999}
            right={wp(0)}
            top={wp(10)}>
          </Touchable>
        </Division>
        <Division marginTop={wp(6)} />
        <PieceCards />
      </MenuProvider>
      <TabNavMaintainer />
    </>
  )
}
