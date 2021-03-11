import React from 'react'
import { Picker as RNPicker } from 'react-native-ui-lib'
import {
  PickerProps,
  PickerItemProps
} from 'react-native-ui-lib/typings/components/Picker'

import Division from './Division'

import ArrowDown from '~/SVGComponents/BackArrow'
import useTheme from '~/hooks/useTheme'
import { wp } from '~/utils/responsive'

interface PickerPropsWithOnChange extends Omit<PickerProps, 'onChange'> {
  onChange?: (e: { value?: string; label: string }) => void
}

const TypedPicker: React.StatelessComponent<PickerPropsWithOnChange> = (
  props: PickerPropsWithOnChange
) => <RNPicker {...props} />

export const PickerChild: React.StatelessComponent<PickerItemProps> = (
  props: PickerItemProps
) => <RNPicker.Item {...props} />

const PickerSelect: React.StatelessComponent<PickerPropsWithOnChange> = (
  props: PickerPropsWithOnChange
) => {
  //TODO: fontFamily ayarla
  const theme = useTheme()
  return (
    <Division flexDirection="row" alignItems="center">
      <Division flex={1}>
        <TypedPicker
          enableErrors={false}
          floatingPlaceholder
          placeholderTextColor="#888"
          floatingPlaceholderColor={{
            focus: theme.colors.text,
            default: '#888'
          }}
          searchPlaceholder="Search By Word"
          underlineColor={{ focus: theme.colors.accent, error: 'red' }}
          {...props}
        />
      </Division>
      <Division position="absolute" right={10}>
        <ArrowDown width={wp(4)} height={wp(4)} />
      </Division>
    </Division>
  )
}

export default PickerSelect
