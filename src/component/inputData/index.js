import React, { Component } from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'


const InputData=({label, placeholder, keywordType, isTextArea, onChangeText, namaState, value}) => {

    if (isTextArea) {
        return (
        <>
        <Text style={styles.label}> {label}  :</Text>
        <TextInput placeholder={placeholder} multiline={true} numberOfLines={4} style={styles.textInputArea} keyboardType={keywordType} value={value} onChangeText={(text) => onChangeText( namaState, text)}></TextInput>
    
    
    </>
        )
    }
    return (
        <>
            <Text style={styles.label}> {label}  :</Text>
            <TextInput placeholder={placeholder} style={styles.textInput} keyboardType={keywordType} value={value} onChangeText={(text) => onChangeText( namaState, text)}></TextInput>
        
        
        </>
    )

}

export default InputData; 

const styles = StyleSheet.create({
    label : {
        fontSize: 16,
  
      },
      textInput : {
          borderWidth : 1,
          borderColor : 'grey',
          marginTop :10,
          borderRadius : 5,
          padding : 10,
          marginBottom : 10
      },
      textInputArea : {
          textAlignVertical : 'top',
        borderWidth : 1,
        borderColor : 'grey',
        marginTop :10,
        borderRadius : 5,
        padding : 10,
        marginBottom : 10
    }
})
