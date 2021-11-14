import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../Screens/loginScreen'
import HomeScreen from '../Screens/homeScreen'
import register from '../Screens/register'
import Login from '../Screens/loginForm'
import Details from '../Screens/Details'
import DrawerNav from './Drawer'

const Stack = createNativeStackNavigator();

export default function Nav() {
    return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="register" component={register} options={{headerShown: false}} />
      <Stack.Screen name="loginForm" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
       <Stack.Screen name="Drawer" component={DrawerNav} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}
