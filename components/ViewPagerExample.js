import React, { Component} from 'react'
import {View, Text,
        TextInput,
        Image,
        ScrollView,
        Dimensions,
        Alert,
        ViewPagerAndroid,
        StyleSheet
} from 'react-native'

export default class ViewPagerExample extends Component {
    render () {
        return (
            <ViewPagerAndroid 
                style={{flex: 1}}
                initialPage={0}
                onPageScroll={(event)=>{
                    //console.log(`onPageScroll offset = ${event.nativeEvent.offset}`)
                }}
                onPageScrollStateChanged={(state)=>{
                    console.log(`onPageScrollStateChanged state = ${state}`)
                }}
                onPageSelected={(event)=>{
                    console.log(`onPageSelected event = ${event.nativeEvent.state}`)
                }}
                >
                <View 
                    style={{
                        backgroundColor: 'lightseagreen'
                    }}
                >
                    <Text style={styles.textStyle}>Screen 1</Text>
                </View>
                <View 
                    style={{
                        backgroundColor: 'salmon'
                    }}
                >
                    <Text style={styles.textStyle}>Screen 2</Text>
                </View>
                <View 
                    style={{
                        backgroundColor: 'purple'
                    }}
                >
                    <Text style={styles.textStyle}>Screen 3</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center',
    }
})