import React, { Component} from 'react'
import {View, Text} from 'react-native'

export default class JustifyContentExample  extends Component {
    render() {
        return (
            <View style={
                {
                    backgroundColor: 'cyan',
                    flex: 1,
                    flexDirection: 'column',
                    //flexDirection: 'row',
                    //justifyContent: 'flex-start',
                    //justifyContent: 'flex-end',
                    //justifyContent: 'space-between',
                    //justifyContent: 'space-around',
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }}>
                <Text style={{width: 50, height: 50, backgroundColor: 'red'}}>Goku</Text>
                <Text style={{width: 50, height: 50, backgroundColor: 'yellow',}}>Ronaldo</Text>
                <Text style={{height: 50, backgroundColor: 'blue'}}>Messi</Text>
            </View>
        )
    }
}