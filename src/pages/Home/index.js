import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CardKontak } from '../../component'
import FIREBASE from '../../config/firebase'

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             kontaks : {},
             kontaksKey : []
        }
    }

    componentDidMount(){
       this.ambilData();
    }

    ambilData= () =>{
        FIREBASE.database()
        .ref("kontak")
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let kontakItem = {...data};

            this.setState({
                kontaks : kontakItem,
                kontaksKey : Object.keys(kontakItem)
            })
        })
    }

    removeData = (id) => {
        Alert.alert(
            "Info",
            "Apakah anda ingin menghapus data ini?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {  
                  console.log("OK Pressed", id),
                FIREBASE.database()
                .ref('kontak/'+id)
                .remove()

                Alert.alert('Hapus', 'sukses hapus data');
                this.ambilData();
            }

            }
            ],
            { cancelable: false }
          );
    }
    
    render() {
        const {kontaks, kontaksKey} = this.state;
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}> Daftar Kontak</Text>
                    <View style={styles.garis}/>
                </View>
                <View style={styles.listKontak}>
                    {kontaksKey.length > 0 ? (
                        kontaksKey.map((key) => (
                        <CardKontak key={key} kontakItem={kontaks[key]} id={key} {...this.props} removeData={this.removeData}></CardKontak>
                        ))
                    ) : (
                        <Text>Daftar Kosong</Text>
                    )}
                </View>
                <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.btnTambah} onPress={() => this.props.navigation.navigate('Tambah Kontak') }>
                    <FontAwesomeIcon  icon={faPlus} size={20} color={'white'}></FontAwesomeIcon>
                </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page : {
        flex : 1
    },
    header: {
paddingHorizontal: 30,
paddingTop : 30
    },
    garis: {
        borderWidth: 1,
        marginTop : 10
    },
    listKontak :{
paddingHorizontal: 30,
marginTop: 20
    },
    title : {
        fontSize:20,
fontWeight: 'bold'
    },
    wrapperButton : {
flex: 1,
position:"absolute",
bottom: 0, right: 0, margin: 50
    }, btnTambah :{
        padding: 20,
        backgroundColor : 'skyblue',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 9,
},
    shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 19,
    },
})
