import React, { Component} from 'react'
import {View, Text,
        FlatList,
        StyleSheet,
        Image,
        Alert,
        Platform,
        TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {horizontalStatus} from '../data/horizontalFlatListData'
import {horizontalFlatListData} from '../data/horizontalFlatListData'

class HorizontalFlatListItem extends Component{
    render() {
        return (
            <View
                style = {{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'grey',
                    margin: 4
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        alert(`You pressed: ${this.props.item.hour}`)
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}
                >

                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 20
                    }}
                >{this.props.item.hour}</Text>
                <Icon
                    name={(Platform.OS == 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={30}
                    color='white'
                />
                <Text
                    style={{
                        fontSize: 16,                        
                        color: 'white',
                        margin: 10
                    }}
                >{this.props.item.degrees} ℉</Text>
            </View>
        )
    }
}

export default class HorizontalFlatList extends Component {
    render() {
        return(
            <View 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: (Platform.OS == 'ios') ? 34 : 0
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                        source={require('../images/weather.jpeg')}
                    >

                    </Image>
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                        backgroundColor: 'transparent',
                        margin: 10,
                        alignItems: 'center'
                    }}
                >Weather forecast</Text>
                <View style={{height: 150}}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        horizontal={true}
                        data={horizontalFlatListData }
                        renderItem={({item, index}) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                </HorizontalFlatListItem>    
                            )
                        }}
                        keyExtractor={(item, index) => item.hour}
                    ></FlatList>
                </View>
            </View>
        )
    }
}