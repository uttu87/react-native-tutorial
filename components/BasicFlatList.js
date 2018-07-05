import React, { Component} from 'react'
import {View, Text,
        FlatList,
        StyleSheet,
        Image,
        Alert,
        Platform,
        TouchableHighlight,
        RefreshControl
} from 'react-native'
import flatListData from '../data/flatListData'
import Swipeout from 'react-native-swipeout'
import AddModal from './AddModal';
import EditModal from './EditModal';
import {getFoodsFromServer} from '../networking/Server'

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        }       
    }
    refreshFlatListItem = () => {
        this.setState((previousState) => {
            return{
                numberOfRefresh: previousState.numberOfRefresh + 1
            }            
        })
    }
    render() {
        const swipeoutSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction)=>{
                    if(this.state.activeRowKey != null){
                        this.setState({activeRowKey: null})
                    }
                },
            onOpen: (secId, rowId, direction)=>{
                this.setState({activeRowKey: this.props.item.key})
            },
            right: [
                {
                    onPress: () => {
                        //alert("Update item")
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey 
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: ()=>console.log('Cancel Press'), type: 'cancel'},
                                {text: 'Yes', onPress: ()=>{
                                    flatListData.splice(this.props.index, 1)
                                    this.props.parentFlatList.refreshFlatList(deletingRow)
                                }}
                            ],
                            {cancelable: true}
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return(
            <Swipeout {...swipeoutSetting}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        //backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
                        backgroundColor: 'mediumseagreen',
                        //borderRadius: 10,
                        //borderWidth: 2,
                        //borderColor: 'gray',
                        //margin: 3,
                    }}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        ></Image>
                        <View style={{
                                flex: 1,
                                flexDirection: 'column'
                            }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>                
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }} >

                    </View>
                </View>         
            </Swipeout>               
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
})

export default class BasicFlatList extends Component {
    constructor(props){
        super(props)
        this.state = {
            deletedRowKey: null,
            refreshing: false,
            foodsFromServer: []
        }
        this._onPressAdd = this._onPressAdd.bind(this)  
    }

    componentDidMount() {
        this.refreshFoodsFromServer()
    }

    refreshFoodsFromServer = () => {
        this.setState({refreshing: true})
        getFoodsFromServer().then((foods) => {
            this.setState({foodsFromServer: foods})
            this.setState({refreshing: false})
        }).catch((error) => {
            this.setState({foodsFromServer: []})
            this.setState({refreshing: false})
        })
    }

    onRefresh = () => {
        this.refreshFoodsFromServer()
    }

    refreshFlatList = (deletedKey) => {
        this.setState((previousState) => {
            return {
                deletedRowKey: deletedKey
            }
        })
        this.refs.flatList.scrollToEnd()
    }

    _onPressAdd () {
        //alert("You add itemss")
        this.refs.addModal.showAddModal()
    }
    render() {
        return(
            <View style={{flex: 1, marginTop: Platform.OS == 'ios'? 34 : 0}}>
                <View style={{
                    backgroundColor: 'tomato',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{marginRight: 10}}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                        >
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../icons/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={'flatList'}
                    //data={flatListData}
                    data={this.state.foodsFromServer}
                    renderItem={({item, index})=>{
                        //console.log(`Item = ${JSON.stringify(item)}, Index = ${index}`)
                        return(
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>
                        )
                    }}  
                    refreshControl={<RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this.onRefresh}
                                    ></RefreshControl>}                  
                >
                </FlatList>    
                <AddModal ref={'addModal'} parentFlatList={this}></AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}></EditModal>
            </View>
        )
    }
}