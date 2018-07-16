import React, { Component} from 'react'
import {View, Text, Image,
        SectionList,                
        Alert,
        Platform,
        AppRegistry,
        TextInput,
        FlatList, RefreshControl, StyleSheet,
        TouchableHighlight
} from 'react-native'
import firebase from 'react-native-firebase'

//pluck value from 'GoogleService-info.plist'
const iosConfig = {
    clientId: '1082758095941-k6jg8143766nvm8le6p8j2kgdqfoultv.apps.googleusercontent.com',
    appId: '1:1082758095941:ios:02d52fe550d9b8d2',
    apiKey:'AIzaSyB3bP2fmUb_mQkxWK7t7jo17pyIdFbPSs4',
    databaseURL: 'https://reactnativefirebasetutor-7fe7b.firebaseio.com',
    storageBucket: 'reactnativefirebasetutor-7fe7b.appspot.com',
    messagingSenderId: '1082758095941',
    projectId: 'reactnativefirebasetutor-7fe7b',
    //persistence: true,
}

//pluck value from 'Google-Service.json '
const androidConfig = {
    clientId: '1082758095941-cs1anoq32p8vjeekcp1palskenrar7v5.apps.googleusercontent.com',
    appId: '1:1082758095941:android:a8ead8c40e2ac585',
    apiKey:'AIzaSyAwXa9yQ3trQXX7iWxK_ksD8cZNP3EKNFw',
    databaseURL: 'https://reactnativefirebasetutor-7fe7b.firebaseio.com',
    storageBucket: 'reactnativefirebasetutor-7fe7b.appspot.com',
    messagingSenderId: '1082758095941',
    projectId: 'reactnativefirebasetutor-7fe7b',
    //persistence: true,
}

const animalApp = firebase.initializeApp(
    Platform.OS == 'ios' ? iosConfig : androidConfig,
    'animalApp'
)
const rootRef = firebase.database().ref();
const animalRef = rootRef.child('animals')

export default class DatabaseComponent extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            animals: [],
            newAnimalName: '',
            loading: false
        }       
    }

    componentDidMount() {
        animalRef.on('value', (childSnapshot) => {
            const animals = []
            childSnapshot.forEach((doc) => {
                animals.push({
                    key: doc.key,
                    animalName: doc.toJSON().animalName
                })
                this.setState({
                    animals: animals.sort((a, b) => {
                        return (a.animalName < b.animalName)
                    }) ,
                    loading: false
                })
            })
        })
    }

    onPressAdd = () => {
        if(this.state.newAnimalName.trim() == ''){
            alert('Animal name is blank')
            return
        }

        animalRef.push({
            animalName: this.state.newAnimalName
        }) 
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS == 'ios'? 34: 0}}>
                <View
                    style={{
                      backgroundColor: 'green',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      height: 64  
                    }}
                >
                    <TextInput
                        style={{
                            height: 40,
                            width: 200,
                            margin: 10,
                            padding: 10,
                            borderColor: 'white',
                            borderWidth: 1,
                            color: 'white'
                        }}
                        keyboardType='default'
                        placeholderTextColor='white'
                        placeholder='Enter task name'
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            this.setState({
                                newAnimalName: text
                            })
                        }}
                        value={this.state.newAnimalName}
                    />
                    <TouchableHighlight
                        style={{margin: 10}}
                        underlayColor='green'
                        onPress={this.onPressAdd}
                    >
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../icons/icons-add.png')}
                        ></Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={this.state.animals}
                    renderItem={({item, index}) => {
                        return (
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    margin: 10
                                }}
                            >{item.animalName}</Text>
                        )
                    }}
                    keyExtractor={(item, index) => item.taskName}
                >

                </FlatList>
            </View>
        )
    }

}