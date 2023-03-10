// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */


import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContextProvider} from './src/components/authContext';


const App = () => {
  return (

      <SafeAreaProvider>
        <AuthContextProvider>
          <AppNavContainer />
        </AuthContextProvider>
        <FlashMessage position="bottom" icon="auto" />
      </SafeAreaProvider>
 
  );
};

export default App;
