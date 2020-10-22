import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import firebase from './src/services/FirebaseConnection';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer > 
      <StatusBar backgroundColor="rgb(40, 153, 217)" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(40, 153, 217)',
    paddingTop: 0 + getStatusBarHeight(),
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
