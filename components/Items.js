import React, { useEffect, useState } from "react";
import { Pressable, View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image, Modal } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

import { AsyncStorage } from "react-native";

const { width, height } = Dimensions.get('window')

import  { Products } from '../Data/ProductData'

 
export default function Items() {
  const [modalVisible, setModalVisible] = useState(false);

  const des = '';

  const newAssign = () => {
    const des = ""
  }

  const assign = (description) => {
        const des = description;
  }


  const Item1 = ({ title, image, description, id }) => (

    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.button, styles.buttonClose]} >
        <Pressable
              onPress={() => {setModalVisible(!modalVisible); newAssign() }}
            >
              <Ionicons name="close" size={35} />
            </Pressable>
            </View>
            <View>
              <Text> {des} </Text>
            </View>
        </View>

      </Modal>
    <TouchableOpacity onPress={() => {setModalVisible(true); assign(description)}} style={styles.container}>
      <Image style={styles.containerImage} source={{uri: image}} />
        <Text style={styles.textView}>{title}</Text>
    </TouchableOpacity>
    </View>
  
  );
  
  const renderItem1 = ({ item }) => (
    <Item1 title={item.title} image={item.image} description={item.description} id={item.id}/>
  );

    return (
        <FlatList
        data={Products}
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
        width: width / 2.5,
        backgroundColor: "white",
        marginRight: 10,
        marginBottom: 20,
        marginTop: 10,
        marginLeft:5,
        borderRadius: 20,
        //shadowColor: '#000',
        //shadowOffset: { width: 0.5, height: 0.5 },
        //shadowOpacity: 0.5,
        //shadowRadius: 3,
      },
      containerImage: {
        height: height / 2.5,
        margin: 5,
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
    centeredView: {
      flex: 1,
      //alignItems: "center",
      marginTop: 10,
      height: '80%',
      width: '90%',
      backgroundColor: 'white',
      marginLeft: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderRadius: 20,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      justifyContent: 'flex-start' ,
      borderRadius: 10,
      height: 35,
      width: 35,
      elevation: 2,
      marginLeft: 20,
      marginTop: 10
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
})
