import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SIGNIN,
  CREATEACCOUNT,
} from '../constants/routeNames';
import Signin from '../screens/Signin';
import CreateAccount from '../screens/CreateAccount';

const UnAuthNavigation = createNativeStackNavigator();

export default function UnAuthNavigationContainer() {
  return (
    <UnAuthNavigation.Navigator initialRouteName={SIGNIN}>
      <UnAuthNavigation.Screen
        name={CREATEACCOUNT}
        component={CreateAccount}
        options={{
          headerShown: false,
          headerTitle: null,
        }}
      />

      <UnAuthNavigation.Screen
        name={SIGNIN}
        component={Signin}
        options={{
          headerShown: false,
          headerTitle: null,
        }}
      />

    </UnAuthNavigation.Navigator>
  );
}
