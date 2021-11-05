import Toast from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window')

export default function Login ({navigation}) {

  const [username, setUsername] = useState('');
  
const setData = (user) => {
    const username = user;
}

const onLogin = () => {
  Toast.show({
    type: 'success',
    text1: 'Welcome' + {username},
    position: 'bottom',
    visibilityTime: 5,
    onPress: () => navigation.navigate('home')
  });
  navigation.navigate('home')
}


    return (
      <SafeAreaView style={styles.home}>
            <View style={styles.box}>
        <TextInput
          style={styles.inputText}
          onChangeText={setData}
          placeholder={'Username'}
        />
        <TextInput
          style={styles.inputText}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <TouchableOpacity 
        style={styles.loginBtn} 
        onPress={onLogin}>
                    <Text style={styles.loginText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
},
  box: {
      justifyContent: "center",
      backgroundColor: 'transparent',
      alignItems: "center",
      flex: 1,
  },
  inputText: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      padding: 15,
      borderRadius: 10,
      borderWidth: 0.7,
      width: 200,
      height: 44,
      },
  loginBtn: {
          padding: 15,
          backgroundColor:"#fb5b5a",
          borderRadius:25,
          alignItems:"center",
          justifyContent:"center",
          marginTop:40,
          marginBottom:10
      },
  loginText: {
          color:"#FFFFFF",
          fontSize:13
      }
});
