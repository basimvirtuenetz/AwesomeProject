import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login';
import Signin from '../screens/Signin';
import OnBoard from '../screens/onBoard';
import Phone from '../screens/Phone';

const Auth = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Auth.Navigator screenOptions={{
            headerShown: false
        }}>
            <Auth.Screen name='Onboard' component={OnBoard} />
            <Auth.Screen name='Login' component={Login} />
            <Auth.Screen name='Signin' component={Signin} />
            <Auth.Screen name='Phone' component={Phone} />
        </Auth.Navigator>
    )
}

export default AuthStack