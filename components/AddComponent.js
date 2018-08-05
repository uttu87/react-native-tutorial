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
import {addNewTask} from '../actions'

export default class ToDoComponent extends Component {
    constructor(props){
        super(props)
        this.state = ({
            newTaskName: '' 
        })
    }

    onPressAdd = (event) => {
        if(this.state.newTaskName.trim() == ''){
            alert('Task name is blank')
            return
        }
        //Call click event => use Container
        this.props.onClickAdd(this.state.newTaskName);
    }

    render() {
        return (
            <View
                style={{
                      backgroundColor: 'tomato',
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
                            newTaskName: text
                        })
                    }}
                />
                <TouchableHighlight
                    style={{margin: 10}}
                    underlayColor='blue'
                    onPress={this.onPressAdd}
                >
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('../icons/icons-add.png')}
                    ></Image>
                </TouchableHighlight>
            </View>
        )
    }
}