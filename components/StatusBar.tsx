import React, { Component } from 'react'
import { StatusBar as RNStatusBar, View, Platform } from 'react-native'

export default class StatusBar extends Component<any> {
  static stack = [
    {
      animated: false,
      backgroundColor: 'transparant',
      barStyle: 'default',
      hidden: false,
      networkActivityIndicatorVisible: true,
      showHideTransition: 'fade',
      translucent: true
    }
  ]

  static getCurrentEntry() {
    return StatusBar.stack[StatusBar.stack.length - 1]
  }

  static pushStackEntry(entry: any) {
    const merged = { ...StatusBar.getCurrentEntry(), ...entry }
    StatusBar.stack.push(merged)
    StatusBar.updateStatusBar()
  }

  static popStackEntry() {
    if (StatusBar.stack.length > 1) {
      const entry = StatusBar.stack.pop()
      StatusBar.updateStatusBar()
      return entry
    } else {
      return StatusBar.getCurrentEntry()
    }
  }

  static updateStatusBar() {
    const entry: any = StatusBar.getCurrentEntry()
    if (Platform.OS === 'android') {
      RNStatusBar.setBarStyle(entry.barStyle, entry.animated)
      RNStatusBar.setHidden(entry.hidden, entry.showHideTransition)
      //StatusBar.setNetworkActivityIndicatorVisible(
      //  entry.networkActivityIndicatorVisible
      //)
      RNStatusBar.setTranslucent(entry.translucent)
    }
    if (Platform.OS === 'ios') {
      //StatusBar.setBackgroundColor(entry.backgroundColor, entry.animated)
      RNStatusBar.setBarStyle(entry.barStyle, entry.animated)
      RNStatusBar.setHidden(entry.hidden, entry.showHideTransition)
      RNStatusBar.setNetworkActivityIndicatorVisible(
        entry.networkActivityIndicatorVisible
      )
      //StatusBar.setTranslucent(entry.translucent)
    }
  }

  componentDidMount() {
    StatusBar.pushStackEntry(this.props)
  }

  componentWillUnmount() {
    StatusBar.popStackEntry()
  }

  render() {
    return <View />
  }
}
