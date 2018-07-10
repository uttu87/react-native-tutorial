import React, { Component} from 'react'
import {View, Text,
        SectionList,                
        Alert,
        Platform,
        AppRegistry,
        TextInput
} from 'react-native'
import firebase from 'react-native-firebase'
import Button from 'react-native-button'
import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.unsubscriber = null
        this.state = {
            isAuthenticated: false,
            typedEmail: '',
            typedPassword: '',
            user: null
        }
    }

    componentDidMount () {
        this.unsubscriber = firebase.auth().onAuthStateChanged(((changedUser) => {
            this.setState({user: changedUser})
        }))
    }

    componentWillUnmount () {
        if(this.unsubscriber){
            this.unsubscriber()
        }
    }

    onAnonymousLogin = () => {
        firebase.auth().signInAnonymouslyAndRetrieveData()
        .then( () => {
            console.log(`Login successfully`)
            this.setState({
                isAuthenticated: true
            })
        })
        .catch((error) => {
            console.log(`Login failed. Error = ${error}`)
        })
    }

    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then( (loggedInUser) => {
            
            console.log(`Register with user : ${JSON.stringify(loggedInUser.toJSON())}`)
            this.setState({
                user: loggedInUser
            })
        })
        .catch((error) => {
            console.log(`Register failed. Error = ${error}`)
        })
    }

    onLogin = () => {
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then( (currentUser) => {
            console.log(`Login with user : ${JSON.stringify(currentUser.toJSON())}`)
            //console.log(`Logged in successful`)
        })
        .catch((error) => {
            console.log(`Login failed. Error = ${error}`)
        })
    }

    onLoginFacebook = () => {
        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if(result.isCancelled){
                    return Promise.reject(new Error('The user canceled the request'))
                }
                console.log(`Login success with premissions: ${result.grantedPermissions.toString()}`)
                return AccessToken.getCurrentAccessToken()
            })
            .then((data) => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
                return firebase.auth().signInWithCredential(credential)
            })
            .then((currentUser) => {
                console.log(`Facebook Login success with user: ${JSON.stringify(currentUser.toJSON())}`)
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`)
            })
    }

    render() {
        return(
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: Platform.OS == 'ios' ? 30 : 0
                }}
            >
                <Text 
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        margin: 40
                        }}>Login with Firebase</Text>
                <Button containerStyle={{
                        padding: 10,
                        borderRadius: 4,
                        backgroundColor: 'rgb(226, 161, 84)'
                }}
                        style={{
                            fontSize: 18,
                            color: 'white'
                        }}
                        onPress={this.onAnonymousLogin }
                        >Login anonymous</Button>
                <Text style={{margin: 20, fontSize: 15}}>{this.state.isAuthenticated == true ? 'Logged in Anonymous' : ''}</Text>
                <TextInput
                        style={{
                            width: 200,
                            height: 40,
                            margin: 10,
                            padding: 10,
                            borderColor: 'gray',
                            borderWidth: 1,
                            color: 'black'
                        }}
                        keyboardType='email-address'
                        placeholder='Enter your email'
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            this.setState({
                                typedEmail: text
                            })
                        }}
                ></TextInput>
                <TextInput
                        style={{
                            width: 200,
                            height: 40,
                            margin: 10,
                            padding: 10,
                            borderColor: 'gray',
                            borderWidth: 1,
                            color: 'black'
                        }}
                        keyboardType='default'
                        placeholder='Enter your password'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                typedPassword: text
                            })
                        }}
                ></TextInput>
                <View style={{flexDirection: 'row'}}>
                        <Button containerStyle={{
                                padding: 10,
                                borderRadius: 4,
                                margin: 10,
                                backgroundColor: 'green'
                        }}
                                style={{
                                    fontSize: 18,
                                    color: 'white'
                                }}
                                onPress={this.onRegister }
                                >Register</Button>
                        <Button containerStyle={{
                                padding: 10,
                                borderRadius: 4,
                                margin: 10,
                                backgroundColor: 'blue'
                        }}
                                style={{
                                    fontSize: 18,
                                    color: 'white'
                                }}
                                onPress={this.onLogin }
                                >Login</Button>
                </View>
                <Button containerStyle={{
                        padding: 10,
                        width: 150,
                        margin: 20,
                        borderRadius: 4,
                        backgroundColor: 'rgb(73, 104, 173)'
                }}
                        style={{
                            fontSize: 18,
                            color: 'white'
                        }}
                        onPress={this.onLoginFacebook }
                        >Login Facebook</Button>
            </View>
        )
    }
}