import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HOME, MYPOST, WRITEARTICLE } from '../constants/routeNames';
import Home from '../screens/Home';
import WriteArticle from '../screens/WriteArticle';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import MyPost from '../screens/MyPost';


// Tab Navigator
const Tab = createBottomTabNavigator();


const HomeNavigation = () => {
 return(
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ color, size }) => {
                let icon;

                if (route.name === HOME) {
                    icon = 'home';
                    size = 28;
                } else if (route.name === WRITEARTICLE) {
                    icon = 'edit';
                    size = 28;
                } else if (route.name === MYPOST) {
                    icon = 'book';
                    size = 28;
                }

                return <Icon name={icon} color={color} size={size} />;
            },

            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: colors.primary1,
        })}
        initialRouteName={HOME}
        backgroundColor={colors.cloudywhite}
    >
        <Tab.Screen 
            options={{headerShown: false}}
            name={HOME}
            component={Home}
        />

        <Tab.Screen 
            options={{headerShown: false}}
            name={WRITEARTICLE}
            component={WriteArticle}
        />

        <Tab.Screen 
            options={{headerShown: false}}
            name={MYPOST}
            component={MyPost}
        />

    </Tab.Navigator>
 );   
}


export default HomeNavigation;