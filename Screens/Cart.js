import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Icon } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window')

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataCart:[],
        };
     }
     componentDidMount() {
    AsyncStorage.getItem('cart').then((cart)=>{
      if (cart !== null) {
        // We have data!!
        const car = JSON.parse(cart)
        this.setState({dataCart:car})
      }
    })
    .catch((err)=>{
      alert(err)
    })
  }

  

  render() {
    const show = () => {
        console.log(this.state)
    }
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <View style={{height:20}} />
         <Text style={{fontSize:32,fontWeight:"bold",color:"orange"}}>Cart</Text>
         <View style={{height:10}} />

         <View style={{flex:1}}>

           <ScrollView>

             {
               this.state.dataCart.map((item)=>{
                 return(
                     
                   <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                     <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.image}} />
                     <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                       <View>
                         <Text style={{fontWeight:"bold", fontSize:20}}>{item.title}</Text>
                         <Text>{item.category}</Text>
                       </View>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text style={{fontWeight:'bold',color:"orange",fontSize:20}}>${item.price}</Text>
                         <View style={{flexDirection:'row', alignItems:'center', backgroundColor: 'grey', borderRadius: 5}}>
                           <Text style={{fontWeight:'bold',color:"orange",fontSize:20, padding: 5}} >Remove</Text>
                         </View>
                       </View>
                     </View>
                   </View>
                 )
               })
             }

             <View style={{height:20}} />

             <TouchableOpacity style={{
                 backgroundColor:"orange",
                 width:width-40,
                 alignItems:'center',
                 padding:10,
                 borderRadius:5,
                 margin:20
               }}>
               <Text style={{
                   fontSize:24,
                   fontWeight:"bold",
                   color:'white'
                 }}>
                 CHECKOUT
               </Text>
             </TouchableOpacity>

             <Text style={{fontWeight:'bold',color:"orange",fontSize:20, padding: 5}} onPress={show} >Show Data</Text>

             <View style={{height:20}} />
           </ScrollView>
         </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({})
