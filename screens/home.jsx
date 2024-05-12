import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper'
import React from 'react';
export default function Home({navigation}) {
   const getToast =()=>{
    ToastAndroid.show('You are Pressing About Component', ToastAndroid.SHORT)
    navigation.navigate("About")
   }
  return (
    <View  style={style.container}>
      <Text style={style.header}>Home</Text>
      <Button textColor='white' style={style.button} title='Click Me!' onPress={getToast}>Press Me!</Button>
      <StatusBar style="auto" />
    </View>
  );
}

 const style= StyleSheet.create({
  container:{
    flex:1,
    marginTop:50
  },
  header:{
    backgroundColor:'pink',
    fontSize:30,
    color:'black',
    padding:10,
    borderRadius:5
},
button:{
  marginTop:10,
  backgroundColor:'green',
  width:150,
  height:40,

}
 
 })

