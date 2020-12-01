import React, { Component } from 'react';
import {Text, View, Image, TextInput, Button, Alert, ouchableNativeFeedback, TouchableHighlight,TouchableOpacity,
  TouchableWithoutFeedback, StyleSheet} from 'react-native';


class App extends Component{
  
  onPressTouchableHighlight(){
    alert('TouchableHighlight')
  }
  onPressTouchableOpacity(){
    alert('TouchableOpacity')
  }    
render(){
  return (
    <View style = {styles.container}>
          <Text>Belajar tampilan desain dan flexbox</Text>
          <View style={styles.garis}></View>
          {/* isi */}
          <View>
            <Text style={styles.title}>Flex direction Row</Text>
          </View>
          <View style={styles.flexvertical}>
            <View style={styles.kotakmerah}></View>
            <View style={styles.kotakhijau}></View>
            <View style={styles.kotakbiru}></View>
          </View>
          <View style={styles.flexhorizontal}>
            <View style={styles.kotakmerah}></View>
            <View style={styles.kotakhijau}></View>
            <View style={styles.kotakbiru}></View>
          </View>
    </View>
    
  ) 
}
}

const styles = StyleSheet.create ({
  container: {
     padding:50
  },
  title:{
    margin:10,
  },
  garis : {
    borderBottomWidth:1
  },
  kotakmerah: {
    marginTop:10,
height:100,
width: 100,
backgroundColor:'red'
  },
  flexvertical: {
    flexDirection :'row'
  },
  flexhorizontal : {
flexDirection:'column'
  },
  kotakhijau: {
    
    height:100,
    width: 100,
    backgroundColor:'green'
      },
      kotakbiru: {
        height:100,
        width: 100,
        backgroundColor:'blue'
          },

});


export default App;