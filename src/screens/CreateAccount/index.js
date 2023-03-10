import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/colors';
import { SIGNIN, HOME } from '../../constants/routeNames';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import Back from '../../assets/icons/back';
import Input from '../../components/input';
import { showMessage } from 'react-native-flash-message';
import Button from '../../components/button';
import { authContext } from '../../components/authContext';


export default function CreateAccount() {
  const {navigate} = useNavigation();
  const inset = useSafeAreaInsets();

  const { register } = React.useContext(authContext);
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = React.useState(true);


  function createAccount() {
    if (firstname.trim().length && lastname.trim().length && email.trim().length && password.trim().length && confirmPassword.trim().length) {
      register(firstname, lastname, email.trim().toLowerCase(), password, confirmPassword);
      navigate(SIGNIN);
    }
  }

  function onFirstnameChange(value) {
    setFirstname(value)
  }

  function onLastnameChange(value) {
    setLastname(value);
  }

  function onEmailChange(value) {
    setEmail(value)
  }

  function onPasswordChange(value) {
    setPassword(value);
  }

  function onConfirmPasswordChange(value) {
    setConfirmPassword(value);
  }
  
  // function onToggleHidePassword() {
  //   setHidePassword(prevState => !prevState);
  // }

  // function onToggleHideConfirmPassword() {
  //   setHideConfirmPassword(prevState => !prevState);
  // }

  

  return (
    <ScrollView
      style={[
        style.container,
        {marginTop: inset.top, marginBottom: inset.bottom},
      ]}
    >

      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 50,
          marginRight: 340,
          marginLeft: 15,
        }}
        onPress={() => {
          navigate(SIGNIN);
        }}>
        <Back />
      </TouchableOpacity>

        <Text style={style.firstText}>
          Kindly fill in your personal information
        </Text>

        <Text style={style.secondText}>
          Who do we have the pleasure of welcoming you to
          <Text style={{color: colors.primary1}}> MVend</Text>
        </Text>

        <View style={{marginHorizontal: 30}}>
          <Input
            label="First Name"
            value={firstname}
            onChange={onFirstnameChange}
            required
          />

          <Input
            label="Last Name"
            value={lastname}
            onChange={onLastnameChange}
            required
          />

          <Input
            label="Email"
            value={email}
            onChange={onEmailChange}
            inputMode='email'
            required
          />

          <Input
            label="Password"
            value={password}
            onChange={onPasswordChange}
            secureTextEntry={hidePassword}
            required
            // iconName={hidePassword ? 'ios-eye-outline' : 'ios-eye-off-outline'}
          />

          <Input
            label="Confirm Password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            secureTextEntry={hideConfirmPassword}
            required
            // iconName={hideConfirmPassword ? 'ios-eye-outline' : 'ios-eye-off-outline'}
          />

          <View style={{marginTop: 30}}> 
              <Button style={style.btn} onPress={createAccount}> 
                  <Text style={style.btnText}>Create Account</Text>   
            </Button>
          </View>
      </View>
     
    </ScrollView>
  );
}
