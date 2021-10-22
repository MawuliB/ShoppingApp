import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function loginScreen(params) {
  const navigation = params.navigation;
  return (
    <SafeAreaView
      style={styles.body}
    >
      <Image
        style={styles.image}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/allbikes-1539286251.jpg?crop=0.880xw:1.00xh;0.0561xw,0&resize=1600:*",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Power Bike Shop</Text>
      

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
        <Text style={{ paddingLeft: 10, color: "red" }}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={styles.login1}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login with Apple</Text>
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
    width: 200,
    height: 200,
  },
  login: {
    padding: 15,
    paddingHorizontal: 80,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    
  },
  login1: {
    padding: 15,
    paddingHorizontal: 80,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "black",
    
  }

})