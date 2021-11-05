import React, { useEffect, useState } from "react";
import { Pressable, View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image, Modal } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";


const { width, height } = Dimensions.get('window')

import  { Products } from '../Data/ProductData'

 
export default function Items() {
  const [modalVisible, setModalVisible] = useState(false);

  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalColor, setModalColor] = useState(['']);
  const [modalImages, setModalImages] = useState(['']);
  const [modalCategory, setModalCategory] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  
  const setData = (title, description, colors, extraImages, category, price) => {
      setModalVisible(true)
      setModalTitle(title)
      setModalDescription(description)
      setModalColor(colors)
      setModalImages(extraImages)
      setModalCategory(category)
      setModalPrice(price)

  }

  const Item = ({ extraImages }) => (
    <Pressable style={styles.item}  >
        <Image
        source={{uri: extraImages}}
        />
    </Pressable>

);

const renderItem = ({ item }) => (
  <Item extraImages={modalImages} />
);

  const Item1 = ({ title, image, description, id }) => (


    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        key={id}
      >
        <View style={styles.centeredView}>
          <View style={[styles.button, styles.buttonClose]} >
        <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="close" size={35} />
            </Pressable>
            </View>
            <View>
              <Text> {modalTitle} </Text>
            </View>
            <View>
              <Text> {modalCategory} </Text>
            </View>
            <View>
              <Text> {modalPrice} </Text>
            </View>
            <FlatList
              data={modalImages}
              renderItem={renderItem}
              horizontal
              scrollEnabled
            />
            <View>
              <Text> {modalDescription} </Text>
            </View>
        </View>

      </Modal>
    <TouchableOpacity onPress={() => setData(title, description,  ) } style={styles.container}>
      <Image style={styles.containerImage} source={{uri: image}} />
        <Text style={styles.textView}>{title}</Text>
    </TouchableOpacity>
    </View>
  
  );
  
  const renderItem1 = ({ item }) => (
    <Item1 title={item.title} image={item.image} description={item.description} id={item.id} colors={item.colors} extraImages={item.extraImages} category={item.category} price={item.price}/>
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
    },
    item: {
        flex: 1,
        width: width - 20,
        height: height / 5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: "center",
      },
      title: {
        fontSize: 32,
        alignSelf: "center"
      },
})
