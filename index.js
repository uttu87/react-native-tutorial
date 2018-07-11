import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
//import App from './App';
//import Robot from './components/Robot'
//import MultipleGreetings from './components/MultipleGreetings'
//import TextBlink from './components/TextBlink'
//import FixedDimension from './components/FixedDimension'
//import FlexDimension from './components/FlexDimension'
//import FlexExample from './components/FlexExample'
//import JustifyContentExample from './components/JustifyContentExample'
//import TextInputExample from './components/TextInputExample'
//import ButtonExample from './components/ButtonExample'
//import TouchableExample from './components/TouchableExample'
//import VerticalScrollView from './components/VerticalScrollView'
//import HorizontalScrollView from './components/HorizontalScrollView'
//import ViewPagerExample from './components/ViewPagerExample'
//import BasicFlatList from './components/BasicFlatList'
//import HorizontalFlatList from './components/HorizontalFlatList'
//import BasicSectionList from './components/BasicSectionList'
//import LifeCycleComponent from './components/LifeCycleComponent'
//import LoginComponent from './components/LoginComponent'
import ToDoComponent from './components/ToDoComponent'

export default class App extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.firstText}>First line</Text>
                <Text style={styles.secondText}>Second line</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#28B463',
        borderWidth: 2,
        borderColor: '#1F618D',
    },
    firstText: {
        margin: 5,
        color: 'white'
    },
    secondText: {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
AppRegistry.registerComponent('learningProject', () => ToDoComponent);
