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

export default class ToDoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             todoTasks: [],
             newTaskName: '',
             loading: false
        }

        this.ref = firebase.firestore().collection('todoTasks')
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot((querySnapshot) => {
            const todos = []
            querySnapshot.forEach((doc) => {
                todos.push({
                    taskName: doc.data().taskName
                })
            })
            this.setState({
                todoTasks: todos.sort((a, b) => {
                    return a.taskName > b.taskName
                }),
                loading: false
            })
        })
    }

    onPressAdd = () => {
        if(this.state.newTaskName.trim() == ''){
            alert('Task name is blank')
            return
        }
        this.ref.add({
            taskName: this.state.newTaskName
        })
        .then((data) => {
            console.log(`Added data = ${data}`)
            this.setState({
                newTaskName: '',
                loading: true
            })
        })
        .catch((error) => {
            console.log(`Error adding FireStore document = ${error}`)
            this.setState({
                newTaskName: '',
                loading: true
            })
        })
    }

    render () {
        return (
            <View style={{
                    flex: 1,                    
                    marginTop: Platform.OS == 'ios' ? 30 : 0
                }}>
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
                        underlayColor='tomato'
                        onPress={this.onPressAdd}
                    >
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../icons/icons-add.png')}
                        ></Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={this.state.todoTasks}
                    renderItem={({item, index}) => {
                        return (
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    margin: 20
                                }}
                            >{item.taskName}</Text>
                        )
                    }}
                    keyExtractor={(item, index) => item.taskName}
                >

                </FlatList>
            </View>
        )
    }
}