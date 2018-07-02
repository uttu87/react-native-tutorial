import React, { Component} from 'react'
import {View, Text, TextInput, Keyboard} from 'react-native'

export default class TextInputExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'Please type your text',
            typedPassword: '',
            typedDescription: ''
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {
                    typedText: 'Keyboard is shown'
                }
            })
        })

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {
                    typedText: 'Keyboard is hiden'
                }
            })
        })
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove() 
    }

    render() {
        return (
            <View>
              <TextInput style = {{
                  height: 40,
                  margin: 20,
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1
              }}
              keyboardType='email-address'
              placeholder='Enter your email'
              placeholderTextColor='blue'
              autoFocus={true}
              onChangeText={
                  (text) => {
                      this.setState(
                          (previuosState) => {
                              return {
                                typedText: text   
                                }
                          }
                      )
                  }
              }
              />
              <Text style={{marginLeft: 20}}>{this.state.typedText}</Text>

              <TextInput style = {{
                  height: 40,
                  margin: 20,
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1
              }}
              keyboardType='default'
              placeholder='Enter your password'
              placeholderTextColor='blue'
              secureTextEntry={true}
              onChangeText={
                  (text) => {
                      this.setState(
                          (previuosState) => {
                              return {
                                typedPassword: text   
                                }
                          }
                      )
                  }
              }
              />

              <TextInput
                style={{
                    height: 200,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                multiline={true}
                borderBottomColor='green' 
                borderBottomWidth={3}
                borderLeftColor='green'
                borderLeftWidth={3}
                borderRightColor='green'
                borderRightWidth={3}
                editable={true}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={
                  (text) => {
                      this.setState(
                          (previuosState) => {
                              return {
                                typedDescription: text   
                                }
                          }
                      )
                  }
              }
              />
            </View>
        )
    }
} 