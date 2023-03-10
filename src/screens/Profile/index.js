import React from 'react';
import {
  View,
  StatusBar,
  Text
} from 'react-native';
import style from './style';
import Header from '../../components/header'
import MyPost from '../MyPost';
import { authContext } from '../../components/authContext';


export default function Profile() {
  const {logout} = React.useContext(authContext);
  return (
    <>
      <StatusBar  barStyle="dark-content" animated />
      <View style={style.container}>
        <MyPost />
        <Text style={style.logout} onPress={logout}>Logout</Text>
      </View>
    </>
  );
}
