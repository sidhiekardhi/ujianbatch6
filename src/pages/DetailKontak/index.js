import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FIREBASE from '../../config/firebase'

export default class DetailKontak extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kontak : {}
        }
    }

    componentDidMount(){
        FIREBASE.database()
        .ref("kontak/" + this.props.route.params.id)
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let kontakItem = {...data};

            this.setState({
                kontak : kontakItem,
            })
        })
    }

    
    render() {
        const {kontak} = this.state
        return (
            <View style={styles.pages}>
                <Text> Nama : </Text>
                <Text style={styles.text}>{kontak.nama}</Text>

                <Text> Nomor Handphone : </Text>
                <Text style={styles.text}> {kontak.nomor}</Text>
                <Text> Alamat : </Text>
                <Text style={styles.text}> {kontak.alamat}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages : {
        padding : 20,
        margin : 30,
        backgroundColor: 'white',
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 9,
},
    shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 19,
},
    text : {
        fontSize:16,
        fontWeight : 'bold',
        marginBottom : 10
    }
})
