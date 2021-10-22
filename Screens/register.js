import React from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function register() {
    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.box}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your username"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Enter your password"
        />
        <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
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
})
