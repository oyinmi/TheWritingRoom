import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { CREATEACCOUNT, HOME } from '../../constants/routeNames';
import Button from '../../components/button';
import Input from '../../components/input';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { authContext } from '../../components/authContext';
import style from './style';


export default function Signin() {
  const {navigate} = useNavigation();
  const inset = useSafeAreaInsets();

  const { login } = React.useContext(authContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);


  function signin() {
    if (email.trim().length && password.trim().length) {
      login(email.trim().toLowerCase(), password.trim().toLowerCase());
    }
  }

  function onEmailChange(value) {
    setEmail(value)
  }

  function onPasswordChange(value) {
    setPassword(value);
  }
  
  function onIconClick() {
    setHidePassword(prevState => !prevState)
  }

  return (
    <ScrollView
      style={[
        style.container,
        {marginTop: inset.top, marginBottom: inset.bottom},
      ]}>


      <Text style={style.firstText}>Sign In</Text>

      <Input
        label="Email"
        value={email}
        onChange={onEmailChange}
        inputMode={email}
        required
      />
      <Input
        label="Password"
        value={password}
        onChange={onPasswordChange}
        secureTextEntry={hidePassword}
        required
        onIconClick={onIconClick}
        iconName={hidePassword ? 'eye' : 'lock'}
      />

      <Button style={style.btn} onPress={signin}> 
          <Text style={style.btnText}>Sign In</Text>   
      </Button>

      <View style={style.underline}>
        <View style={style.line} />
        <Text style={style.orText}>or</Text>
        <View style={style.line} />
      </View>
  
      <Button style={style.btn} onPress={() => navigate (CREATEACCOUNT)}>   
        <Text style={style.btnText}>Create Account</Text>
      </Button>
     
    </ScrollView>
  );
}
