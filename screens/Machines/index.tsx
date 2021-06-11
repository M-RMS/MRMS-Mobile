import React, { useState, useEffect } from 'react'
import Division from '~/components/Division'
import Typography from '~/components/Typography'
import Touchable from '~/components/Touchable'
import { wp, hp } from '~/utils/responsive'
import Crown from '~/SVGComponents/Crown'
import DotsVertical from '~/SVGComponents/DotsVertical'
import RiskManagement from '~/SVGComponents/RiskManagement'
import { View } from 'react-native'
import TabNavSupervisor from '~/components/TabNavSupervisor'
import TabNavMaintainer from '~/components/TabNavMaintainer'
import { useDispatch, useSelector } from 'react-redux'
import TabNavAdmin from '~/components/TabNavAdmin'
import { useNavigation } from '@react-navigation/native'
import { Modal, RefreshControl } from 'react-native'
import Image from '~/components/Image'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { ScrollView } from 'react-native-gesture-handler'
import { MenuProvider } from 'react-native-popup-menu'
import axios from 'axios'
export default () => {
  const [data, setData] = useState([])
  const [id, setId] = useState('1')
  const [steps, setSteps] = useState([])
  const [search, setSearch] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { navigate } = useNavigation()
  useEffect(() => {
    axios
      .request({
        method: 'post',
        url: 'http://10.0.2.2:3333/categories/getSubs',
        data: {
          category_id: id
        }
      })
      .then((response) => {
        setData(response.data.data)//, console.log(response.data.data)
      })
      .catch((error) => console.log(error))
  }, [id])
  /*
    useEffect(() => {
      setFilteredCategories(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, data])
  */
  return (
    <>
      <MenuProvider>
        <Division>
          <Division
            height={wp(30)}
            alignSelf='stretch'
            backgroundColor='#1FB9FC'
            justifyContent='center'
            alignItems='flex-start'>
            <Division
              marginTop={wp(3)}
              flexDirection='row'
              justifyContent='space-around'
              marginHorizontal={wp(5)}
            >
              <Division
                alignItems='center'
                justifyContent='center'
                width={wp(17)}
                height={wp(13)}
                marginRight={wp(2)}
              >
                <RiskManagement />
              </Division>
              <Division
                borderColor='#ffffff'
                borderStyle='solid'
                borderLeftWidth={1}
                opacity={0.5}
              />
              <Division marginLeft={wp(2)}>
                <Typography
                  fontSize={wp(5)}
                  fontWeight='bold'
                  letterSpacing={0.33}
                  color='#ffffff'>
                  Makineler
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
              <View>
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
              </View>
            </Touchable>
          </Division>


          <Division
            borderRadius={8}
            marginTop={wp(50)}
            height={hp(80)}
            width={wp(92)}
            marginHorizontal={wp(4)}
            backgroundColor="#fff"
            paddingVertical={25}
            paddingHorizontal={20}>
            <Division
              backgroundColor="#fff"
              paddingVertical={15}
              paddingHorizontal={20}>
              {steps.length == 0 && (
                <Typography
                  //  color={theme.colors.accent}
                  fontWeight="semi-bold"
                  fontSize={18}
                  paddingBottom={15}>
                  Select Your Category
                </Typography>
              )}
              {steps.length == 1 && (
                <Division flexDirection="row">
                  <Touchable
                    onPress={() => {
                      setId('1'), setSteps([])
                    }}>
                    <Typography
                      //   color={theme.colors.text}
                      fontWeight="semi-bold"
                      fontSize={18}
                      paddingBottom={15}>
                      Category
                      </Typography>
                  </Touchable>
                  <Typography
                    // color={theme.colors.accent}
                    fontWeight="semi-bold"
                    fontSize={18}
                    paddingBottom={15}>
                    {/*' > ' + steps[0].title*/}
                  </Typography>
                </Division>
              )}
              {steps.length == 2 && (
                <Division flexDirection="row">
                  <Touchable
                    onPress={() => {
                      //setId(steps[0].id), setSteps([steps[0]])
                    }}>
                    <Typography
                      // color={theme.colors.text}
                      fontWeight="semi-bold"
                      fontSize={18}
                      paddingBottom={15}>
                      {/*steps[0].title*/}
                    </Typography>
                  </Touchable>
                  <Typography
                    // color={theme.colors.accent}
                    fontWeight="semi-bold"
                    fontSize={18}
                    paddingBottom={15}>
                    {/*' > ' + steps[1].title*/}
                  </Typography>
                </Division>
              )}
              <Division
                borderWidth={1}
                borderRadius={6}
                borderColor="#e4e4e4"
                flexDirection="row"
                alignItems="center"
                paddingRight={10}
                paddingVertical={10}>
                {/*<Searchbar
              // onChangeText={(e) => setSearch(e.target.value)}
              onChangeText={text => setSearch(text)}
              value={filteredCategories}
              placeholder="Enter keyword, ad or store number"
            />*/}
              </Division>
            </Division>
            <Division>

            </Division>
            <Division>
              { /* <FlatList
            keyExtractor={(item: DataProps) => item.id.toString()}
            data={filteredCategories}//filtered data
            renderItem={({ item }) => {
              return (
                <Touchable
                  borderBottomWidth={0.2}
                  borderColor="#e4e4e4"
                  paddingTop={17}
                  paddingBottom={17}
                  paddingLeft={5}
                  // onPress={item.onPress}
                  onPress={() => {
                    item.subCategories.length == 0
                      ? (props.SaveCategoryData(item.id),
                        props.RandomNumberAction(Math.random()),
                        navigate('AddAdvertisement')//, console.warn('category_id: ' + props.category_id)
                      )

                      : setId(item.id),
                      steps.length < 2
                        ? setSteps([
                          ...steps,
                          { id: item.id, title: item.title }
                        ])
                        : ''
                  }}>
                  <Typography
                    fontSize={16}
                    color="accent"
                    fontWeight="semi-bold">
                    {item.title}
                  </Typography>
                </Touchable>
              )
            }}
          />*/}
            </Division>
          </Division>





        </Division>
      </MenuProvider>
      <TabNavAdmin />
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