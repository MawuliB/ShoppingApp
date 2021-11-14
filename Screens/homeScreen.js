import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, Pressable, Dimensions, StyleSheet, Image} from 'react-native';
import { Button, List, WhiteSpace } from '@ant-design/react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SafeAreaView from 'react-native-safe-area-context'


import { NavigationContext, useNavigation } from '@react-navigation/native';
import { Categories }  from '../Data/ProductData'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Items from "../components/Items";
import DrawerNav from '../components/Drawer'

const { width, height } = Dimensions.get('window')


const Item = ({ Category }) => (

  <TouchableOpacity style={styles.item} >
      <Text style={styles.title}>{Category.title}</Text>
  </TouchableOpacity>
  
);

const renderItem = ({ item }) => (
  <Item Category={item}/>
);



export default function HomeScreen ({navigation}) {
  <DrawerNav/>

//const Data = GetData();


   return (
<View
      style={styles.main}
    >
      <View
        style={styles.top}
      >
        <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="ios-menu-outline" size={24} color="black">
        </Ionicons>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate("home")} >
        <FontAwesome name="motorcycle" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable>
          <AntDesign name="search1" size={20} color="black" />
          </Pressable>
          <Pressable>
          <Ionicons name="notifications-outline" size={20} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={{paddingTop: 15, paddingLeft: 5}}>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "grey"}}>The World's 
          <Text style={{color: "orange", fontSize: 20}} > Best Cars</Text>
        </Text>
        <Text style={{paddingTop: 10, fontWeight: "bold", fontSize: 15}}>Categories</Text>
      </View>

      <View style={{ marginBottom: 15 }}>
      <FlatList
        data={Categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        //pagingEnabled
        //scrollEnabled
        />
        </View>
        
      <Items/>
      
    </View>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
        flex: 1,
        paddingHorizontal: 8,
        width: "auto",
        height: height * 0.04,
        backgroundColor: 'whitesmoke',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignSelf: "flex-start",
  },
  itemSelected: {
    flex: 1,
        paddingHorizontal: 9,
        width: "auto",
        height: height * 0.05,
        backgroundColor: 'orange',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignSelf: "flex-start",
  },
  title: {
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center"
  },
flatlist: {
  justifyContent: "space-between"
}
       
})