import React, {Component, Fragment} from 'react'
import {
  SafeAreaView,
  StyleSheet,Linking,
  View,
  Text,
  StatusBar,
} from 'react-native'
import WebView from 'react-native-webview'
const App = () => {
  return (
    <WebView
      source={{ uri: 'https://www.southernfacility.com' }}
      style={{}}
    />
  )
}

export default App