import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, ScrollView, Pressable, Platform, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { WhiteSpace } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window')


const Details = ({navigation, route}) => {
    const Product = route.params;
    // const routeName = state.routeNames[2]
    const [addCartTextPressed, setAddCartTextPressed] = useState(false)
    const [savedItemId, setSavedItemID] = useState([])

    const [cart, setCart] = useState([]);

    const addToCart = async (item) => {
        console.log('Adding');
        const cartData = {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            category: item.categories
        };
        try {
            const status = AsyncStorage.getItem('CartData');
            if (status === null) {
                setCart([...cart, cartData]);
                await AsyncStorage.setItem('CartData', JSON.stringify(cart))
                console.log(cart);
                console.log('Added');
            }else {
                const convert = JSON.stringify(status);
                if (!convert.id) {
                    setCart([...cart, cartData]);
                    await AsyncStorage.setItem('CartData', JSON.stringify(cart))
                    console.log(cart);
                    console.log('Added');
                }else{
                    console.log('Already Added')
                }
            }
        } catch (error) {
            console.log("This is a Add to Cart Error: " + error);
        }
    }
     
      

  /*    const save = () => {
        if (!savedItemId.includes(Products.id)) {
            setCart([...cart, Products])
        }
    }


    const saveSavedItem = async () => {
        setSavedItemID([...savedItemId, Products.id])
        try {
            await AsyncStorage.setItem("savedItem", JSON.stringify(savedItemId))
        } catch(err) {
            alert(err)
        }
    }

    const loadSavedItem = async() => {
        try {
            let item = await AsyncStorage.getItem("savedItem")
            item = JSON.parse(item)
            if (item !== null) [
                setSavedItemID(item)
            ]
        } catch(err) {
            alert(err)
        }
    }

    const saveToCart = async () => {
        try {
            if (addCartTextPressed === true) {
                await AsyncStorage.setItem("MyCart", JSON.stringify(cart))
                console.log(cart);
            }
        }catch(err) {
            alert(err)
        }
    }

    const loadCart = async () => {
        try{
            let cart = await AsyncStorage.getItem("MyCart")
            cart = JSON.parse(cart)
            if (cart !== null) {
                setCart(cart)
            }
        }catch(err) {
            alert(err)
        }
    }

    const clearCart = async() => {
        try {
            await AsyncStorage.removeItem("MyCart")
        } catch(e) {
            alert(e)
        } finally {
            setCart([])
        }
    }

    const clearSaved = async() => {
        try {
            await AsyncStorage.removeItem("savedItem")
        } catch(e) {
            alert(e)
        } finally {
            setCart([])
        }
    }

    useEffect(() =>{
        loadCart()
        loadSavedItem()
    }, [])



    const renderCorrectAddItemFunction = () => {
      setAddCartTextPressed(true)
      if (savedItemId.includes(Products.id)) {
          navigation.navigate('Cart', {Products, cart})
      }
  }

  const renderCorrectText = () => {
      if (addCartTextPressed === true || savedItemId.includes(Products.id)) {
          return (
              <Text>go to cart</Text>
          )
      } else {
          return (
              <Text>Add To Cart</Text>
          )
      }
  }*/

  const ExtraImages = ({Images}) => {
      const img = Images.extraImages;
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {img.map((item, index) => (<Image key={index} style={{height: height / 4, borderRadius: 15}} source={{uri: item}}/>))}
      </View>
  }
  const renderItem = ({ item }) => (
    <ExtraImages Images={item}/>
  );
    return (
        <SafeAreaView>
                <View style={styles.button} >
                    <Pressable onPress={() => navigation.goBack()} >
                        <Ionicons name="arrow-back-circle" size={35} />
                    </Pressable>
                </View>
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center'}} >
                    <Image style={styles.image} source={{uri:Product.image}} />
                </View>
                <View style={styles.details}>
                    <View style={styles.title}>
                        <Text style={styles.titleText} >{Product.title}</Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.text} >Category: {Product.categories}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.text} >Price: ${Product.price}</Text>
                    </View>
                
                    <FlatList
                    data={Product}
                    renderItem={renderItem} 
                    keyExtractor={item => item.id}
                    horizontal
                    scrollEnabled
                    />
                
                    <View style={styles.detailsT}>
                        <Text style={styles.text}>Details</Text>
                        <Text style={styles.text} >{Product.description}</Text>
                    </View>
<WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/>
                </View>
            </ScrollView>
                <TouchableOpacity style={styles.addContainer} onPress={() => addToCart(Product)} >
                    <Text style={styles.add}>ADD TO CART</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        height: 220,
        width: 230,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        resizeMode: 'stretch',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: 'orange',
        borderWidth: 1,
        paddingBottom: 50
    },
    button: {
        justifyContent: 'flex-start' ,
        marginLeft: 20,
        marginTop: 10,
    },
    title: {
        margin: 10,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: Platform.OS === 'android'? 'monospace': 'Cochin'
    },
    category: {
        margin: 10,
    },
    price: {
        margin: 10,
    },
    text: {
        fontFamily: Platform.OS == 'android'? 'serif': 'arial',
        fontWeight: 'bold',
        fontSize: 15,
    },
    detailsT: {
        margin: 10,
    },
        details: {
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        borderBottomColor: 'whitesmoke',
        borderTopColor: 'orange',
    },
    add: {
        color: 'black',
        flexWrap: 'wrap',
        fontFamily:  Platform.OS == 'android'? 'serif': 'arial',
        fontWeight: 'bold',
        textAlign: 'center'
        },
    addContainer: {
        bottom: 60,
        height: 48,
        width: 150,
        backgroundColor: 'darkorange',
        position: 'absolute',
        //borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10
        }
})

export default Details ;
