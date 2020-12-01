import React, { Component } from 'react';
import {Text, View, Image, TextInput, Button, Alert, ouchableNativeFeedback, TouchableHighlight,TouchableOpacity,
  TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Operand from './Operand';


class StateProps extends Component{
  
    constructor(props){
        super(props)
        this.state = {
            sekolah : 'wahidev academy'
        }
    }

    gantiState(){
        this.setState({
            sekolah : 'wahidev'
        })
    }
      
  
render(){
    const {sekolah} = this.state
  return (
    <View style = {styles.container}>
          <Text>Belajar State dan Props</Text>
          <View style={styles.garis}></View>
          {/* isi */}
          <View>
            <Text>Ini adalah state : {sekolah}</Text>
            <Operand sekolah={sekolah}></Operand>
            <TouchableOpacity style={styles.tombol} onPress={() => this.gantiState()}>
                <Text style={{textAlign: 'center'}}>Ganti state</Text>
           
            </TouchableOpacity>
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
  tombol : {
      backgroundColor:'skyblue',
      borderRadius:10,
      marginTop:10,
      padding:10
  }
  

});


export default StateProps;