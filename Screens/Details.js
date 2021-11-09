import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions, ScrollView, Pressable, Platform, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window')

const Details = ({navigation, route}) => {
    const Product = route.params;
  const ExtraImages = ({Images}) => {
      <View style={{height: height / 4, borderRadius: 15}}>
          <Image source={{uri: Images.extraImages}}/>
      </View>
  }
  const renderItem = ({ item }) => (
    <ExtraImages Images={item}/>
  );
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.button} >
                    <Pressable onPress={() => navigation.goBack()} >
                        <Ionicons name="arrow-back-circle" size={35} />
                    </Pressable>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}} >
                    <Image style={styles.image} source={{uri:Product.image}} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText} >{Product.title}</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText} >Category: {Product.categories}</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText} >Price: {Product.price}</Text>
                </View>
                
                    <FlatList
                    data={Product}
                    renderItem={renderItem}
                    horizontal
                    scrollEnabled
                    />
                
                <View style={styles.title}>
                    <Text style={styles.titleText} >Details: {Product.description}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        height: height / 3.5,
        width: width / 1.2,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    button: {
        justifyContent: 'flex-start' ,
        marginLeft: 20,
        marginTop: 10,
      },
      title: {
          margin: 20,
      },
      titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: Platform.OS === 'android'? 'monospace': 'Cochin'
      }
})

export default Details;