import React from 'react'
import { TextField as RNTextField } from 'react-native-ui-lib'
import { TextFieldProps } from 'react-native-ui-lib/typings/components/Inputs'

import useTheme from '~/hooks/useTheme'

const TypedTextField: React.StatelessComponent<TextFieldProps> = (
  props: TextFieldProps
) => <RNTextField {...props} />

const TextField: React.StatelessComponent<TextFieldProps> = (
  props: TextFieldProps
) => {
  const theme = useTheme()
  //TODO: fontFamily ayarla

  return (
    <TypedTextField
      enableErrors={false}
      allowFontScaling={false}
      floatingPlaceholder
      style={{ fontSize: theme.fontSize.h5 }}
      floatOnFocus
      floatingPlaceholderColor={{
        focus: theme.colors.primary,
        default: '#888'
      }}
      underlineColor={{
        focus: theme.colors.primary,
        error: 'red',
        default: theme.colors.text
      }}
      {...props}
    />
  )
}

export default TextField
