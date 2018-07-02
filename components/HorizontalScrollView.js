import React, { Component} from 'react'
import {View, Text,
        TextInput,
        Image,
        ScrollView,
        Dimensions,
        Alert
} from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width
        let screenHeight = Dimensions.get('window').height
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                scrollIndicatorInsets={{top: 10, left: 10, right: 10, bottom: 10}}//iOS only
                onMomentumScrollBegin={()=>{
                    //alert('onScrollBegining')
                }}
                onMomentumScrollEnd={()=>{
                    //alert('onScrollEnding')
                }}
                onScroll={(event)=>{
                    let logData=`Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
                    console.log(logData)
                }}
                scrollEventThrottle={10}
            >
                <View style={{
                    backgroundColor: 'purple',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        //backgroundColor: 'green',
                        textAlign: 'center'
                    }}>
                        Screen 1
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        //backgroundColor: 'green',
                        textAlign: 'center'
                    }}>
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'chocolate',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        //backgroundColor: 'green',
                        textAlign: 'center'
                    }}>
                        Screen 3
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'gold',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        //backgroundColor: 'green',
                        textAlign: 'center'
                    }}>
                        Screen 4
                    </Text>
                </View>
            </ScrollView>
        )
    }
}