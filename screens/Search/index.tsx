import React from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import RiskManagement from '~/SVGComponents/RiskManagement'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavAdmin from '~/components/TabNavAdmin'
import Searchbar from '~/components/Searchbar'
import PieceCards from './PieceCards'
import { MenuProvider } from 'react-native-popup-menu'
import Header from '~/components/Header'
import { useDispatch, useSelector } from 'react-redux'
export default () => {
  const yetki = useSelector((state) => state.Role.str)
  return (
    <>
      <MenuProvider>
        <Header title='Parça Ara' />
        <Division marginTop={wp(6)} />
        <PieceCards />
      </MenuProvider>
      { yetki.userDefine == 'Bakımcı' ? <TabNavMaintainer /> : yetki.userDefine == 'Gözlemci' ? <TabNavSupervisor /> : yetki.userDefine == 'Yönetici' ? <TabNavAdmin /> : <Division />}

    </>
  )
}
