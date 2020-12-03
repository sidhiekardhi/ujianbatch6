import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { InputData } from '../../component'
import FIREBASE from '../../config/firebase'


export default class TambahKontak extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             nama : '',
             nomor : '',
             alamat: '',
        }
    }

    onChangeText= (namaState, value) => {
        this.setState({
            [namaState] : value
        })
    }

    onSubmit= () => {
        if (this.state.nama && this.state.nomor && this.state.alamat){
            console.log('masuk submit');
            console.log(this.state);
const kontakreferensi = FIREBASE.database().ref('kontak');
const kontak = {
    nama : this.state.nama,
    nomor : this.state.nomor,
    alamat : this.state.alamat
}
kontakreferensi
.push(kontak)
.then((data) => {
    Alert.alert('Sukses', 'Sukses');
this.props.navigation.replace('Home');
})
.catch((error) => {
    console.log('error :', error);
})
        } else {
            Alert.alert('Data Kosong', 'Silahkan isi semua datanya')
        }

    }
    
    render() {
        return (
            <View style={styles.pages}>  
                <InputData label="Nama" placeholder="Masukkan Nama" onChangeText={this.onChangeText} value={this.state.nama} namaState="nama"></InputData>
                
                <InputData label="No HP" placeholder="Masukkan No HP" keywordType="number-pad" onChangeText={this.onChangeText} value={this.state.nomor} namaState="nomor"></InputData>
                
                <InputData label="Alamat" placeholder="Masukkan Alamat" isTextArea={true} onChangeText={this.onChangeText} value={this.state.alamat} namaState="alamat"></InputData>

                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
                    <Text style={styles.textTombol}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages : {
        flex : 1,
        padding : 30
    },
    tombol : {
        backgroundColor: 'skyblue',
        padding:10,
        borderRadius : 5,
        marginTop: 10
    },
    textTombol : {
        color : 'white',
        fontWeight : 'bold',
        textAlign: 'center',
        fontSize : 16
    }
    
})
