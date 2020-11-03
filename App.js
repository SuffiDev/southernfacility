import React, {Component, Fragment} from 'react'
import {
  SafeAreaView,
  StyleSheet,Linking,
  View,
  Text,
  StatusBar,
} from 'react-native'
import WebView from 'react-native-webview'
import SplashScreen from 'react-native-splash-screen'
export default class WelcomePage extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }render() {
    return (
      <WebView
        source={{ uri: 'https://www.southernfacility.com/app/' }}
        style={{}}
      />
    )
  }
}