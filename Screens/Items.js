import React from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image } from "react-native";


const { width, height } = Dimensions.get('window')



const DATA1 = [
    {
      id: '1',
      title: 'Mx 36',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      id: '2',
      title: 'Mxla 3',
      image: 'https://cdn.shopify.com/s/files/1/1245/1481/products/2_DIAMOND_BLACK_1_1024x1024.jpg?v=1597774901'
    },
    {
      id: '3',
      title: 'Cha 390',
      image: 'https://cremecycles.com/images/glowne/12.jpg'
    },
    {
      id: '4',
      title: 'lahs',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Fat_Tire_Bike_by_Ensey_Motorized_Bikes.jpg'
    },
    {
      id: '5',
      title: 'jds',
      image: 'https://media.wired.com/photos/6116c71586407d6dcacb9272/2:1/w_2399,h_1199,c_limit/Gear-Cannondale-Adventure-Neo-3.jpg'
    }
  ]

  const Item1 = ({ title, image }) => (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.containerImage} source={{uri: image}} />
        <Text style={styles.textView}>{title}</Text>
    </TouchableOpacity>
  
  
  );
  
  const renderItem1 = ({ item }) => (
    <Item1 title={item.title} image={item.image}/>
  );


export default function Items() {
    return (
        <FlatList
        data={DATA1}
        renderItem={renderItem1}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        refreshing={true}
        showsVerticalScrollIndicator={false}
        //pagingEnabled
        scrollEnabled
    
        />
    )
}

const styles = StyleSheet.create({
    container: {
        height: height / 2.5,
        width: width / 2.7,
        backgroundColor: "whitesmoke",
        margin: 10,
        borderRadius: 20,
        //shadowColor: '#000',
        //shadowOffset: { width: 0.5, height: 0.5 },
        //shadowOpacity: 0.5,
        //shadowRadius: 3,
      },
      containerImage: {
        height: height / 2.5,
        margin: 10,
        width: width / 2.7,
        borderRadius: 20,
        resizeMode: "stretch",
      },
      textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
})
