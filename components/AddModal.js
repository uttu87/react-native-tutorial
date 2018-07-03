import React, { Component} from 'react'
import {View, Text,
        FlatList,
        StyleSheet,
        Image,
        Alert,
        Platform,
        TouchableHighlight,
        Dimensions,
        TextInput
} from 'react-native'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'
import flatListData from '../data/flatListData'

var screen = Dimensions.get('window')
export default class AddModal extends Component {
    constructor(props){
        super(props)        
    }
    showAddModal = () => {
        this.refs.myModal.open()
    }
    render() {
        return (
            <Modal 
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS == 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    //alert('Modal close')
                }}
            >   
                <Text>New food's infomation</Text>                
            </Modal>
        )
    }
}
