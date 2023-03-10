import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import style from './style';
import Header from '../../components/header'
import ViewAllPost from '../../components/viewAllPost';


export default function Home() {
  return (
    <>
    <StatusBar  barStyle="dark-content" animated />
    <View style={style.container}>
      <Header />
      <ViewAllPost  />
    </View>
    </>
  );
}
