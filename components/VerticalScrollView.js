import React, { Component} from 'react'
import {View, Text,
        TextInput,
        Image,
        ScrollView,
        Dimensions
} from 'react-native'

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width
        return (
           <ScrollView
                keyboardDismissMode='on-drag'
                maximumZoomScale={3}
                minimumZoomScale={0.5}
                contentContainerStyle={{paddingLeft:5, paddingRight: 5}}
           >
               <Image
                source={require('../images/songoku.png')}
                style={{
                    width: screenWidth,
                    height: screenWidth * 1115/800,
                    marginTop: 20
                }}
               ></Image>
               <Text
                    style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        backgroundColor: 'green',
                        textAlign: 'center'
                    }}
               >This is a text</Text>
               <TextInput
                    style={{
                        padding: 10,
                        margin: 10,
                        borderWidth: 1
                    }}
                    placeholder='Please enter a text'
               >
               </TextInput>

               <View 
                    style={{
                        backgroundColor: 'purple',
                        height: 50
                    }}
               >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center'
                    }}>Text inside View</Text>
               </View>
               <Image
                source={require('../images/songoku.png')}
                style={{
                    width: screenWidth,
                    height: screenWidth * 1115/800,
                    marginTop: 20
                }}
               ></Image>
               <Image
                source={require('../images/songoku.png')}
                style={{
                    width: screenWidth,
                    height: screenWidth * 1115/800,
                    marginTop: 20
                }}
               ></Image>
               <Image
                source={require('../images/songoku.png')}
                style={{
                    width: screenWidth,
                    height: screenWidth * 1115/800,
                    marginTop: 20
                }}
               ></Image>
               <Image
                source={require('../images/songoku.png')}
                style={{
                    width: screenWidth,
                    height: screenWidth * 1115/800,
                    marginTop: 20
                }}
               ></Image>
           </ScrollView> 
        )
    }
}