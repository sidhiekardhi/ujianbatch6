import React, { Component } from 'react';
import {Text, View, Image, TextInput, Button, Alert, ouchableNativeFeedback, TouchableHighlight,TouchableOpacity,
  TouchableWithoutFeedback, StyleSheet} from 'react-native';


class ContohForm extends Component{
  
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            isLogin: false
        }
    }
    
    Login=()=> {
        if (!this.state.username && !this.state.password){
            Alert.alert('error','username dan password harus di isi');
        } else {
            this.setState({
                isLogin: true
            })
        }
    }

        

    
      
  
render(){
    const { username, password, isLogin}  = this.state;
  return (
    <View style = {styles.container}>
          <Text>Belajar buat Form</Text>
          <View style={styles.garis}></View>
          {/* isi */}
          <View style={{marginTop: 10}}>
           <Text>Username :</Text>
           <TextInput style= {styles.textInput} placeholder='Masukkan Username' value={username} onChangeText={(username) => this.setState({username}) }></TextInput>
          </View>

          <View style={{marginTop: 10}} >
           <Text>Password :</Text>
           <TextInput style= {styles.textInput} placeholder='Masukkan Password' value={password} onChangeText={(password) => this.setState({password}) } secureTextEntry={true}></TextInput>
          </View>
          
          <TouchableOpacity style={styles.tombol}>
                <Text style={{textAlign: 'center'}} onPress={()=> this.Login()}>Login</Text>
           
            </TouchableOpacity>
            {isLogin && (
                    <Text style={{marginTop:20}}>
                    Selamat Berhasil Login {username}
                    </Text>
            )}
    
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
      marginTop:20,
      padding:10
  },
  textInput: {
      borderRadius:5,
      borderColor: 'green',
      padding: 10,
      borderWidth:1,
      height:40
  }
  

});


export default ContohForm;