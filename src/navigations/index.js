import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import UnAuthNavigation from './unauthNavigation';
import {authContext} from '../components/authContext';

const AppNavContainer = () => {
  const authData = React.useContext(authContext);


  if (!authData?.user) {
  // if (authData?.user) {
    return (
      <NavigationContainer>
        <UnAuthNavigation />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default AppNavContainer;
