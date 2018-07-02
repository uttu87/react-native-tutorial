import React, { Component} from 'react'
import {View, Text, Alert} from 'react-native'
import Button from 'react-native-button'

export default class ButtonExample extends Component {
    _onPressButton = () => {
        Alert.alert('You pressed a button!')
    }
    render () {
        return (
              <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                    <Button style={{
                        fontSize: 20,
                        backgroundColor: 'green',
                        color: 'white',
                        padding: 10,
                        borderRadius: 20,
                        shadowRadius: 5
                    }}
                    onPress={this._onPressButton}
                    >This is a button</Button>

                 {/*
                    <View style={{ 
                        backgroundColor: 'green', 
                        padding: 10,
                        borderRadius: 10,
                        shadowRadius: 10,
                        shadowOpacity: 0.5
                     }}>
                        <Button onPress={this._onPressButton}
                            title='This is a button'
                            color='white'
                            >
                        </Button>
                    </View>
                    */}
                    
              </View>  
        )
    }
}