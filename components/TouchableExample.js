import React, { Component} from 'react'
import {View, Text, Alert,
        Image,
        TouchableHighlight,
        TouchableNativeFeedback,
        TouchableOpacity,
        TouchableWithoutFeedback
        } from 'react-native'

export default class TouchableExample extends Component {
    _onPressButton = () => {

    }
    render () {
        return (
            <View style = {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

            <TouchableHighlight 
                onPress={this._onPressButton}
                underlayColor='red'
                
            >
                <View style={{backgroundColor: 'green'}}>
                    {/* <Image 
                        style={{width: 100,height: 40}}
                        source={require('../images/button_green.png')}
                    ></Image> */}
                    <Text style={{
                        color: 'white',
                        padding: 10,
                        fontSize: 18
                    }}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>

            <TouchableOpacity
                onPress={this._onPressButton}
                activeOpacity={0.5}//default 0.2
            >
                <View style={{
                        backgroundColor: 'red',
                        margin: 10,
                    }}>
                    {/* <Image 
                        style={{width: 100,height: 40}}
                        source={require('../images/button_green.png')}
                    ></Image> */}
                    <Text style={{
                        color: 'white',
                        padding: 10,
                        fontSize: 18
                    }}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>

            <TouchableNativeFeedback
                onPress={this._onPressButton}
            >
                <View style={{
                        backgroundColor: 'red',
                        margin: 10,
                    }}>
                    {/* <Image 
                        style={{width: 100,height: 40}}
                        source={require('../images/button_green.png')}
                    ></Image> */}
                    <Text style={{
                        color: 'white',
                        padding: 10,
                        fontSize: 18
                    }}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableWithoutFeedback
                //onPress={this._onPressButton}
                onLongPress={()=>{
                    Alert.alert('onLongPress')
                }}
                //onPressIn={()=>{Alert.alert('onPressIn')}}
                //onPressOut={()=>{Alert.alert('onPressOut')}}
                disabled={false}
            >
                <View style={{
                        backgroundColor: 'blue',
                        margin: 10,
                    }}>
                    {/* <Image 
                        style={{width: 100,height: 40}}
                        source={require('../images/button_green.png')}
                    ></Image> */}
                    <Text style={{
                        color: 'white',
                        padding: 10,
                        fontSize: 18
                    }}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>

            </View>
        )
    }
}