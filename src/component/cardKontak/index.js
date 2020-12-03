import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardKontak = ({id, kontakItem, navigation, removeData}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail Kontak', {id : id})}>
<View >

            <Text style={styles.nama}> {kontakItem.nama}</Text>
            <Text style={styles.nomor}> Nomor HP nya : {kontakItem.nomor}</Text>
</View>
<View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'green'} size={25} onPress={() => navigation.navigate('Edit Kontak', {id : id})}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={() => removeData(id)}></FontAwesomeIcon>
</View>
        </TouchableOpacity>
        
    )
}

export default CardKontak

const styles = StyleSheet.create({
container : {
    flexDirection: 'row',
    padding:15,
    backgroundColor: 'white',
    borderRadius:5, 
    marginBottom : 20,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 9,
},
    shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 19,
}, 
nama : {
    fontWeight : 'bold',
    fontSize : 16
},
nomor : {
color : 'grey',
    fontSize : 12
},
icon :{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems : 'center'        
}
})
