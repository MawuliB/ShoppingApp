import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeScreen from '../Screens/homeScreen'
import Cart from '../Screens/Cart'
import Favourite from '../Screens/Favourite'
import Settings from '../Screens/Settings'

const { width, height } = Dimensions.get('window')
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    const navigation = props.navigation;


    const [name, setName] = useState('');

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    try {
      AsyncStorage.getItem('UserName')
      .then(value => {
        if (value != null) {
          setName(value);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem style={{  }} label={'Welcome ' + name} > <Text>Hello</Text> </DrawerItem>
      <DrawerItem label="Cart" onPress={() => navigation.navigate('Cart')} />
      <DrawerItem label="Favourites" onPress={() => navigation.navigate('Favourite')} />
      <DrawerItem label="Settings" onPress={() => navigation.navigate('Settings')} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNav() {
    return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />} 
    screenOptions={{
        drawerStyle: {
            marginTop: 20, 
            width: width / 1.5,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 1
        }, 
        drawerItemStyle: { height: 0 }     
    }} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}}      
    />
        <Drawer.Screen name="Cart" component={Cart} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
        <Drawer.Screen name="Favourite" component={Favourite} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
        <Drawer.Screen name="Settings" component={Settings} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
    </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    main: {
        
    }
})
