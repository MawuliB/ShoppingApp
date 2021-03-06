import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, Pressable, Dimensions, StyleSheet, Image, Platform} from 'react-native';
import { Button, List, WhiteSpace } from '@ant-design/react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SafeAreaView from 'react-native-safe-area-context'

import { NavigationContext, useNavigation } from '@react-navigation/native';
import { Categories, Products, Convertible, Coupe, Hatchback, Sedan, Sport, Station }  from '../Data/ProductData'
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width, height } = Dimensions.get('window')


export default function HomeScreen ({navigation}) {

    let [cart, setCart] = useState([]);

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

    const { products } = Products;
    const [cartItems, setCartItems] = useState([]);


const [catergoryIndex, setCategoryIndex] = React.useState(1);


 function SetProductData () {
   if(catergoryIndex == '0' || catergoryIndex == '1'){
     return (
      <FlatList
      data={Products}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
     )
   }else if (catergoryIndex == '2') {
     return (
      <FlatList
      data={Convertible}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
     )
   }else if (catergoryIndex == '3') {
     return (
      <FlatList
      data={Coupe}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
     )
   }else if (catergoryIndex == '4') {
    return (
      <FlatList
      data={Hatchback}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
    )
  }else if (catergoryIndex == '5') {
    return (
      <FlatList
      data={Sedan}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
    )
  }else if (catergoryIndex == '6') {
    return (
      <FlatList
      data={Sport}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
    )
  }else if (catergoryIndex == '7') {
    return (
      <FlatList
      data={Station}
      renderItem={renderItem1}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={1}
      refreshing={true}
      showsVerticalScrollIndicator={false}
      //pagingEnabled
      scrollEnabled
      />
    )
  }
  }

  const Item = ({ Category }) => (

    <TouchableOpacity style={styles.item}  
    key={Category.id}
    activeOpacity={0.8}
    onPress={() => [setCategoryIndex(Category.id)]}>
        <Text style={[
                  styles.categoryText,
                  catergoryIndex === Category.id && styles.categoryTextSelected,
                ]}>
                  {Category.title}
                  </Text>
    </TouchableOpacity>
    
  );
  
const [favorite, toggleFavourite] = useState(false);

function FavouriteIcon (k) {
  if(favorite === false) {
    return (
      <MaterialIcons name="favorite-outline" size={25} color="red" />
    )
  }else {
    return (
    <MaterialIcons name='favorite' size={25} color={'red'}/>
    )
  }
 
}

const onPress = (item) => {
  if(favorite === true) {
    toggleFavourite(false)
  }else {
    toggleFavourite(true)
  }
}

  const renderItem = ({ item }) => (
    <Item Category={item}/>
  );

  const renderItem1 = ({ item }) => {
    return (
    <View style={styles.container} >

        <View style={styles.imageContainer}>

          <View style={styles.favourite}>
            <TouchableOpacity >
            <FavouriteIcon k={item}/>
            </TouchableOpacity>
          </View>

        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>    
            <Image style={styles.image} source={{uri: item.image}} />
        </TouchableOpacity>

        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          
          <TouchableOpacity style={styles.nameContent} onPress={() => navigation.navigate('Details', item)}>
                  <Text style={styles.name}>{item.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addContainer} onPress={() => addToCart(item) }>
            <Text style={styles.add}>ADD TO CART</Text>
          </TouchableOpacity>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price}</Text>
          </View>

        </View>
    </View>
    )
          }


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

        <Pressable onPress={() => navigation.navigate("Home")} >
        <FontAwesome name="car" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable onPress={() => navigation.navigate('Cart', products ) }>
            <AntDesign name='shoppingcart' size={20} color={'black'}/>
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
        />
        </View>
    <SetProductData/>
      
    </View>

    );

}

const styles = StyleSheet.create({
  container1: {
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
},
categoryContainer: {
  flexDirection: 'row',
  marginTop: 30,
  marginBottom: 20,
  justifyContent: 'space-between',
},
categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
categoryTextSelected: {
  color: 'orange',
  paddingBottom: 5,
  borderBottomWidth: 2,
  borderColor: 'darkorange',
},
container: {
  height: 300,
  width: 230,
  backgroundColor: "grey",
  marginRight: 10,
  marginTop: 20,
  marginLeft:5,
  borderRadius: 20,
  justifyContent: 'center',
  alignSelf: 'center',
  borderColor: 'grey',
  borderWidth: 1,
  marginBottom: 10,
  position: 'relative'
   
  //shadowColor: '#000',
  //shadowOffset: { width: 0.5, height: 0.5 },
  //shadowOpacity: 0.5,
  //shadowRadius: 3,
  },
  image: {
  height: 250,
  width: 230,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  resizeMode: "stretch",
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  alignContent: 'center',
  //position: 'absolute',
  //marginBottom: 10,
  },
  imageContainer: {
  height: 250,
  width: 230,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  },
  name: {   
  color: 'black',
  flexWrap: 'wrap',
  fontFamily:  Platform.OS == 'android'? 'serif': 'arial',
  fontWeight: 'bold'
  },
  nameContent: {
  marginBottom: 10,
  height: 48,
  width: 80,
  backgroundColor: 'orange',
  position: 'relative',
  borderBottomLeftRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',

  },
  priceContainer: {
  marginBottom: 10,
  height: 48,
  width: 80,
  backgroundColor: 'orange',
  position: 'relative',
  borderBottomRightRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',

  },
  price: {
  color: 'black',
  flexWrap: 'wrap',
  fontFamily:  Platform.OS == 'android'? 'serif': 'arial',
  fontWeight: 'bold'
  },
  add: {
  color: 'black',
  flexWrap: 'wrap',
  fontFamily:  Platform.OS == 'android'? 'serif': 'arial',
  fontWeight: 'bold',
  textAlign: 'center'
  },
  addContainer: {
  marginBottom: 10,
  height: 48,
  width: 60,
  backgroundColor: 'darkorange',
  position: 'relative',
  //borderBottomRightRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10
  },
  favourite: {
  position: 'absolute',
  zIndex: 2,
  alignSelf: 'flex-end',
  margin: 18,
  right: 15
  }
        
})