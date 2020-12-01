import React, { Component } from 'react';
import {Text, View, Image, TextInput, Button, Alert, ouchableNativeFeedback, TouchableHighlight,TouchableOpacity,
  TouchableWithoutFeedback, StyleSheet} from 'react-native';


class Operand extends Component{
  



      
  
render(){
    const {sekolah} = this.props
  return (
   
          <View>
  <Text>Ini adalah props adalah {sekolah}</Text>
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
  tombol : {
      backgroundColor:'skyblue',
      borderRadius:10,
      marginTop:10,
      padding:10
  }
  

});


export default Operand;