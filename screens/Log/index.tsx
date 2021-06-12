import React, { useState } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp } from '~/utils/responsive'
import DoneLog from './DoneLog'
import FaultLog from './FaultLog'
import NotDoneLog from './NotDoneLog'
import Home from '~/SVGComponents/Home'
import { useNavigation } from '@react-navigation/native'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import TabNavAdmin from '~/components/TabNavAdmin'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { MenuProvider } from 'react-native-popup-menu'
import Header from '~/components/Header'
export default () => {
  const { navigate } = useNavigation()
  const yetki = useSelector((state) => state.Role.str)
  const [loop, setLoop] = useState('fault')

  return (
    <>
      <MenuProvider>
        <Header title='Bakım Geçmişi' />
        <Division
          position='absolute'
          zIndex={999}
          right={wp(0)}
          top={wp(10)}>
          <Menu>
            <MenuTrigger children={<Division
              width={wp(10)}
              height={wp(10)}
              justifyContent='center'
              alignItems='center'>
              <DotsVertical />
            </Division>} />
            <MenuOptions customStyles={optionsStyles}>

              <MenuOption onSelect={() => { }} text='Yenile' />

            </MenuOptions>
          </Menu>
        </Division>
        <Division
          width={wp(100)}
          height={wp(15)}
          flexDirection='row'>
          <Touchable
            width={wp(100 / 3)}
            height={wp(15)}
            justifyContent='center'
            onPress={() => {
              setLoop('fault')
            }}>
            <Typography
              fontWeight={loop == 'fault' ? 'boldest' : 'normal'}
              color={loop == 'fault' ? '#1FB9FC' : '#8F8F8F'}
              letterSpacing={0.2}
              textAlign='center'>
              Arızalı
            </Typography>
          </Touchable>
          <Division
            borderColor='#A7A9B3'
            borderLeftWidth={1}
            marginVertical={wp(3)}
          />
          <Touchable
            width={wp(100 / 3)}
            height={wp(15)}
            justifyContent='center'
            onPress={() => {
              setLoop('done')
            }}>
            <Typography
              letterSpacing={0.2}
              fontWeight={loop == 'done' ? 'boldest' : 'normal'}
              color={loop == 'done' ? '#1FB9FC' : '#8F8F8F'}
              textAlign='center'>
              Başarılı
            </Typography>
          </Touchable>
          <Division
            borderColor='#A7A9B3'
            borderLeftWidth={1}
            marginVertical={wp(3)}
          />
          <Touchable
            width={wp(100 / 3)}
            height={wp(15)}
            justifyContent='center'
            onPress={() => {
              setLoop('notDone')
            }}>
            <Typography
              fontWeight={loop == 'notDone' ? 'boldest' : 'normal'}
              color={loop == 'notDone' ? '#1FB9FC' : '#8F8F8F'}
              letterSpacing={0.2}
              textAlign='center'>
              Yapılmamış
            </Typography>
          </Touchable>

        </Division>
        <Division
          borderColor='#A7A9B3'
          borderBottomWidth={1}
          marginHorizontal={wp(5)}
        />
        {loop == 'fault' ? <FaultLog />
          : loop == 'done' ? <DoneLog />
            :
            <NotDoneLog />}

      </MenuProvider>

      { yetki.userDefine == 'Bakımcı' ? <TabNavMaintainer /> : yetki.userDefine == 'Gözlemci' ? <TabNavSupervisor /> : yetki.userDefine == 'Yönetici' ? <TabNavAdmin /> : <Division />}
    </>
  )
}
const optionsStyles = {
  optionsContainer: {
    backgroundColor: '#ffffff',
    padding: 1,
  },
  optionsWrapper: {
    backgroundColor: '#ffffff',
  },
  optionWrapper: {
    backgroundColor: '#ffffff',
    margin: 5,
  },
  optionTouchable: {
    underlayColor: '#ffffff',
    activeOpacity: 70,
  },
  optionText: {
    color: '#222F5A',
    fontSize: wp(3.5)
  },
}