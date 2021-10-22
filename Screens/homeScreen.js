import React from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window')

const DATA = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'RoadBike',
  },
  {
    id: '3',
    title: 'Mountain',
  },
  {
    id: '4',
    title: 'Urban',
    next: 'About'
  },
  {
    id: '5',
    title: 'Buzanga',
  },
];


const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>

);

const renderItem = ({ item }) => (
  <Item title={item.title} />
);


export default function homeScreen(params) {
  return (
    <View
      style={styles.main}
    >
      <View
        style={styles.top}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
      <View style={{paddingTop: 15, paddingLeft: 5}}>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "grey"}}>The World's 
          <Text style={{color: "orange", fontSize: 20}} > Best Bike</Text>
        </Text>
        <Text style={{paddingTop: 10, fontWeight: "bold", fontSize: 15}}>Categories</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled
        />

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
        flex: 1,
        paddingHorizontal: 8,
        width: 'auto',
        height: height * 0.04,
        backgroundColor: 'whitesmoke',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignSelf: "flex-start"
  },
  title: {
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center"
  },
       
})