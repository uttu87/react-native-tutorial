import React, { Component} from 'react'
import {View} from 'react-native'

export default class FlexDimension extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 20, backgroundColor: 'mediumaquamarine'}}></View>
                <View style={{flex: 20, backgroundColor: 'springgreen'}}></View>
                <View style={{flex: 60, backgroundColor: 'salmon'}}></View>
            </View>
        )
    }
}