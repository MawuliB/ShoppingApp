import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Dimensions, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
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
import Details from '../Screens/Details';
import Pcart from '../Screens/Pcart';
import { Products } from '../Data/ProductData';

const { width, height } = Dimensions.get('window')
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    const navigation = props.navigation;
    const [greet, setGreet] = useState('');

    const findGreet = () => {
      const hrs = new Date().getHours();
      if (hrs === 0 || hrs < 12) return setGreet('Morning');
      if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
      setGreet('Evening');
    };
  
    useEffect(() => {
      findGreet();
    }, []);

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
    <ScrollView style={styles.main} >
        <TouchableOpacity style={styles.welcome} onPress={() => navigation.navigate('Home') }>
          <MaterialCommunityIcons name='face-profile' size={25} color={'red'}/>
          <Text style={ styles.welcomeText } >{`Good ${greet} `}</Text>
          <Text style={{ fontSize: 25, fontFamily: Platform.OS == 'android'? 'serif': 'arial', alignSelf: 'center' }}>{name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cart} onPress={() => navigation.navigate('Cart', Products) }>
          <AntDesign name='shoppingcart' size={20} />
          <Text style={styles.text} >Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favourite} onPress={() => navigation.navigate('Favourite')}>
          <MaterialIcons name='favorite' size={20} color={'red'} />
          <Text style={styles.text} >Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate('Settings')}>
          <AntDesign name='setting' size={20} />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
      
    </ScrollView>
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
        <Drawer.Screen name="Cart" component={Pcart} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
        <Drawer.Screen name="Favourite" component={Favourite} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
        <Drawer.Screen name="Settings" component={Settings} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
        <Drawer.Screen name="Details" component={Details} options={{headerShown: false, drawerLabel: () => null, title: null, drawerIcon: () => null}}
    />
    </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    main: {
      marginTop: 20
    },
    welcome: {
      marginLeft: 10,
      height: 70,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'

    },
    welcomeText: {
      fontSize: 20,
      lineHeight: 30,
      marginLeft: 5
    },
    cart: {
      marginTop: 30,
      marginLeft: 10,
      height: 30,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    text: {
      marginLeft: 8,
      fontSize: 20
    },
    favourite: {
      marginTop: 30,
      marginLeft: 10,
      height: 30,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    settings: {
      marginTop: width -50,
      marginLeft: 10,
      height: 50,
      borderRadius: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderTopColor: 'grey',
      borderWidth: 1,
      alignItems: 'center',
      alignContent: 'center',
      //borderBottomColor: 'white',
      borderLeftColor: 'white'
    },

})
