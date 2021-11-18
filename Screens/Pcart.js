import { WhiteSpace } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window')


export default function Pcart(props) {
    const { cartItems } = props;
    let [cart, setCart] = useState([]);


    const getCartData = async () => {
        let data = await AsyncStorage.getItem('CartData');
        setCart(JSON.parse(data));
    }
    useEffect(() => {
        getCartData();
    }, [])

    const removeItem = async () => {
        await AsyncStorage.removeItem('CartData');
        getCartData();
    }

    function CartDisplay() {
        if (cart) {
            return (
                cart.map((items, index) => 
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
                <TouchableOpacity style={styles.remove} onPress={() => removeItem() }>
                    <Text>REMOVE</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
        )
            )
        }else {
            return(
                <View style={{alignItems: 'center', marginTop: 100}}>
                    <Text style={{fontSize: 25, fontFamily:  Platform.OS == 'android'? 'serif': 'arial',
  fontWeight: 'bold'}}>Cart is Empty</Text>
                </View>
            )
            
        }
        
    }
    function Length() {
        if (cart) {
            return(
                cart.length
            )
        }else {
            return (
                '0'
            )
        }
    }

    return (
        <SafeAreaView style={
            {marginLeft: 20}
        }>
            <View style={styles.Cart}>
                <Text style={styles.CartText}>CART (<Length/>)</Text>
            </View>
            <View style={{height:100}} />
            <ScrollView>
            <CartDisplay/>

            <View style={{height:250}} />
            </ScrollView>

             <TouchableOpacity style={styles.Clear} onPress={() => removeItem()}>
               <Text style={styles.ClearText}>
                 CLEAR CART
               </Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.Checkout}>
               <Text style={styles.CheckoutText}>
                 CHECKOUT
               </Text>
             </TouchableOpacity>

             <View style={{height:50}} />
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
    },
    CartText: {
            fontSize:24,
            fontWeight:"bold",
            color:'white'
    },
    Cart: {
        backgroundColor:"orange",
        width:width-100,
        alignItems:'center',
        padding:10,
        borderRadius:5,
        marginTop: 50,
        position: 'absolute',
        alignSelf: 'center'
    },
    Checkout: {
        backgroundColor:"orange",
        width:width-40,
        alignItems:'center',
        padding:10,
        borderRadius:5,
        marginTop: height - 60,
        position: 'absolute'
    },
    CheckoutText: {
        fontSize:24,
        fontWeight:"bold",
        color:'white'
    },
    Clear : {
        backgroundColor:"orange",
        width:width-120,
        alignItems:'center',
        padding:10,
        borderRadius:5,
        marginTop: height - 120,
        position: 'absolute',
        alignSelf: 'center'
    },
    ClearText: {
        fontSize:24,
        fontWeight:"bold",
        color:'black'
    }
})
