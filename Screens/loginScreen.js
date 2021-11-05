import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

const { width, height } = Dimensions.get('window')

export default function loginScreen(params) {
  const navigation = params.navigation;
  return (
    <SafeAreaView
      style={styles.body}
    >
      <Image
        style={styles.image}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/koenigsegg-gemera-101-1583247403.jpg?crop=1xw:1xh;center,top&resize=480:*",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 37, fontWeight: "bold" }}>Mawuli's Car Shop</Text>
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("loginForm");
        }}
        style={styles.login0}
      >
        <AntDesign name="login" size={24} color="black" />
        <Text style={{ paddingLeft: 30, color: "black", fontSize: 20 }}>Login</Text>
      </TouchableOpacity>

<TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={styles.login}
      >
        <Image
        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"}}
        style={{width: 24, height: 24}}
        />
        <Text style={{ paddingLeft: 10, color: "red", fontSize: 15 }}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={styles.login1}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white", fontSize: 15 }}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("register")} >
      <Text style={{color: "gainsboro", paddingTop: 15,  }}>
          Not a Member? <Text style={{color: "orange"}}> Sign up</Text>
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    transform: [{ rotate: "45deg" }],
    borderRadius: 20,
    marginBottom: 60,
    width: width > 320 ? 200: 160 ,
    height: height > 600 ? 200: 160,
  },
  login: {
    height: height/ 10,
    width: Platform.OS === 'ios' || 'android'? width/ 1.2: 100,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    
  },
  login1: {
    height: height/ 10,
    width: Platform.OS === 'ios' || 'android'? width/ 1.2: 100,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "black",
    
  },
  login0: {
    height: height/ 10,
    width: Platform.OS === 'ios' || 'android'? width/ 1.2: 100,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "cornsilk",
    
  }

})