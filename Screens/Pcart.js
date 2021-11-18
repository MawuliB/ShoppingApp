import { WhiteSpace } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window')


export default function Pcart(props) {
    const { cartItems } = props;
    const [cart, setCart] = useState([]);


    const getCartData = async () => {
        let data = await AsyncStorage.getItem('CartData');
        setCart(JSON.parse(data));
        const id = cart.id;
    }
    useEffect(() => {
        getCartData();
    }, [])

    const renderCart = cart.map((items, index) => 
        <View key={index} style={styles.container}>
            <Image resizeMode={"stretch"} style={styles.image} source={{uri: items.image}} />
            <View style={styles.items}>
            <View>
                <Text style={{fontWeight:"bold", fontSize:20}}>{items.title}</Text>
                <Text>{items.category}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.price}>${items.price}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity style={styles.remove}>
                    <Text>REMOVE</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
        )
    

    return (
        <SafeAreaView style={
            {marginLeft: 20}
        }>
            <Text>
                {cart.length}
            </Text>
            {renderCart}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        width:width-20,
        margin:10,
        backgroundColor:'transparent', 
        flexDirection:'row', 
        borderBottomWidth:2, 
        borderColor:"#cccccc", 
        paddingBottom:10
    },
    image: {
    width:width/3,
    height:width/3
    },
    items: {
        flex:1, 
        backgroundColor:'whitesmoke', 
        padding:10, 
        justifyContent:"space-between"
    },
    remove: { 
        borderRadius: 10, 
        borderColor: 'grey', 
        borderWidth: 1, 
        paddingHorizontal:8, 
        fontWeight:'bold', 
        fontSize:18, 
        backgroundColor: 'orange'
    },
    price: {
        fontWeight:'bold',
        color:"orange",
        fontSize:20
    }
})
