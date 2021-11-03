import React from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, Pressable, Dimensions, StyleSheet, Image} from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SafeAreaView from 'react-native-safe-area-context'

import { NavigationContext, useNavigation } from '@react-navigation/native';

import Items from "../components/Items";

const { width, height } = Dimensions.get('window')

import { Categories }  from '../Data/ProductData'

const Item = ({ title, next, navigation}) => (
  
  <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('description')}>
      <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
  

);

const renderItem = ({ item, navigation }) => (
  <Item title={item.title} next={item.next}/>
);


export default class homeScreen extends React.Component {
  
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }
  render() {
    const itemArr = Array.apply(null, Array(5))
      .map(function(_, i) {
        return i;
      })
      .map((_i, index) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}

              style={{}}
              multipleLine
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 50,
                  marginTop: 50,


                }}
              >
                <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{uri: "https://scontent.facc8-1.fna.fbcdn.net/v/t1.6435-9/137227368_3572206719539558_5987327469211060924_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFTAlKB5hlclK1R6kQMPaIYcmNCF8lcws9yY0IXyVzCz9c2EhhFtffDF3brBYJkQuuGxIHeWkxovG1uJzc5gpIq&_nc_ohc=bu1_1pcnrmkAX_C8-8a&_nc_ht=scontent.facc8-1.fna&oh=3e216d7c7a4492c2d4e4a626183bca0c&oe=61A5B823"}} />
                <Text style={{ fontSize: 20, marginLeft: 60, position: 'absolute' }}>Profile</Text>
                <View style={{ alignItems: 'flex-end', }} >
                <AntDesign name='closecircle' size={20} onPress={() => this.drawer.closeDrawer()}/>
                </View>
              </View>
            </List.Item>
          );
        } else if (index === 1) {
          return (
            <List.Item
              key={index}
            >
              <View style={{ flexDirection: 'row', }} > 
                <AntDesign name='shoppingcart' size={20} />
              <Text style={{marginLeft: 30, position: 'absolute'}} >Cart</Text>
              </View>
              
            </List.Item>
          );
        }  else if (index === 2) {
          return (
            <List.Item
              key={index}
            >
              <View style={{ flexDirection: 'row', }} > 
              <MaterialIcons name='favorite' size={20} color={'red'} />
              <Text style={{marginLeft: 30, position: 'absolute'}} >Favourite</Text>
              </View>

            </List.Item>
          );
        }  else if (index === 3) {
          return (
            <List.Item
              key={index}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: width - 50}} > 
                <AntDesign name='setting' size={20} />
              <Text style={{marginLeft: 30, position: 'absolute'}} >Settings</Text>
              </View>

            </List.Item>
          );
        }

      });
    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List>{itemArr}</List>
      </ScrollView>
    );
    
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="white"
        drawerWidth={width / 1.5}
      >
<View
      style={styles.main}
    >
      <View
        style={styles.top}
      >
        <Pressable onPress={() => this.drawer && this.drawer.openDrawer()}>
        <Ionicons name="ios-menu-outline" size={24} color="black">
        </Ionicons>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate("home")} >
        <FontAwesome name="motorcycle" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable>
          <AntDesign name="search1" size={20} color="black" />
          </Pressable>
          <Pressable>
          <Ionicons name="notifications-outline" size={20} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={{paddingTop: 15, paddingLeft: 5}}>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "grey"}}>The World's 
          <Text style={{color: "orange", fontSize: 20}} > Best Bike</Text>
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
        
        //pagingEnabled
        //scrollEnabled
        />
        </View>
        
      <Items/>
      
    </View>
    </Drawer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center"
  },
flatlist: {
  justifyContent: "space-between"
}
       
})