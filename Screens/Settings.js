import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-context'

export default function Settings() {

  const Color = [
    {background : 'whitesmoke'},
    {text: 'black'}
  ];
  
    return (
        <View style={styles.main}>
          <Text>Settings</Text>
          </View>
    )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})