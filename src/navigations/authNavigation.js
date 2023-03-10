import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { EDITPOST, HOMENAVIGATION, MYPOST, PROFILE, SIGNIN, UPDATEPOST, WRITEARTICLE, VIEWARTICLE } from '../constants/routeNames';
import HomeNavigation from './homeNavigation';
import WriteArticle from '../screens/WriteArticle';
import Profile from '../screens/Profile';
import MyPost from '../screens/MyPost';
import UpdatePost from '../screens/UpdatePost'
import ViewArticle from '../screens/ViewArticle';


// Stack Navigator
const Stack = createNativeStackNavigator();


const AuthNavigation = () => {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={SIGNIN}>
            <Stack.Screen 
                name={HOMENAVIGATION} 
                component={HomeNavigation} 
            />
           
            <Stack.Screen
                name={WRITEARTICLE}
                component={WriteArticle}
                options={{
                headerShown: false,
                headerTitle: null,
                }}
            />
           
            <Stack.Screen
                name={EDITPOST}
                component={UpdatePost}
                options={{
                headerShown: false,
                headerTitle: null,
                }}
            />

            <Stack.Screen
                name={PROFILE}
                component={Profile}
                options={{
                headerShown: false,
                headerTitle: null,
                }}
            />

            <Stack.Screen
                name={VIEWARTICLE}
                component={ViewArticle}
                options={{
                headerShown: false,
                headerTitle: null,
                }}
            />

            <Stack.Screen
                name={MYPOST}
                component={MyPost}
                options={{
                headerShown: false,
                headerTitle: null,
                }}
            />

            <Stack.Screen
                name={UPDATEPOST}
                component={UpdatePost}
                options={{
                headerShown: false,
                headerTitle: null,
                }}
            />

        </Stack.Navigator>
    );
}


export default AuthNavigation;