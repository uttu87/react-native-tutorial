
import React, { Component} from 'react'
import {View} from 'react-native'

export default class FixedDimesion extends Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                <View style={{width: 100, height: 50, backgroundColor: 'red'}}></View>
                <View style={{width: 150, height: 50, backgroundColor: 'cyan'}}></View>
            </View>            
        )
    }
}