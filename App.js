import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './Screens/loginScreen'
import homeScreen from './Screens/homeScreen'
import register from './Screens/register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="home" component={homeScreen} options={{headerShown: false}} />
      <Stack.Screen name="register" component={register} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}