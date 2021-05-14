import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import Division from './Division'
import Search from '../SVGComponents/Search'
import { hp, wp } from '~/utils/responsive'
import useTheme from '~/hooks/useTheme'
import Touchable from './Touchable'

interface SearchbarProps {
  placeholder?: string | undefined
}

const SearchBar: React.StatelessComponent<TextInputProps> = (
  props: TextInputProps
) => {
  const theme = useTheme()
  //editable true olucak
  return (
    <Division
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingRight={10}
      width={wp(90)}
      height={wp(12)}
      borderRadius={wp(8)}
      backgroundColor='white'>
      <TextInput
        editable={true}
        allowFontScaling={false}
        style={{
          flex: 1,
          fontSize: theme.size.h4,
          borderColor: theme.colors.surface,
          paddingLeft: 20
        }}
        {...props}
      />
      <Touchable
        position='absolute'
        right={0}
        backgroundColor={'#185D81'/*#185D81*/}
        width={wp(15)}
        height={wp(12)}
        borderBottomRightRadius={wp(8)}
        borderTopRightRadius={wp(8)}
        justifyContent='center'
        alignItems='center'>
        <Search width={wp(5)} height={wp(5)} fill='white' />
      </Touchable>
    </Division >
  )
}

export default SearchBar
