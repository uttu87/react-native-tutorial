import React, { Component} from 'react'
import {View, Text} from 'react-native'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log(`${Date.now()}. This is contructor`)
        this.state = {
            numberOfRefresh: 0
        }
        setInterval(()=>{
            console.log(`${Date.now()}. Change state each 2 seconds`)
            this.setState(previousState => {
                return {numberOfRefresh: previousState.numberOfRefresh + 1}
            })
        }, 2000)
    }

    componentWillMount() {
        console.log(`${Date.now()}. This is componentWillMount`)
    }

    componentDidMount() {
        console.log(`${Date.now()}. This is componentDidMount`)
    }

    shouldComponentUpdate() {
        console.log(`${Date.now()}. This is shouldComponentUpdate`)
        return true
    }

    componentWillUpdate() {
        console.log(`${Date.now()}. This is componentWillUpdate`)
    }

    componentDidUpdate() {
        console.log(`${Date.now()}. This is componentDidUpdate `)
    }

    render() {
        console.log(`${Date.now()}. This is render function`)
        let textToDisplay=`Number of refresh: ${this.state.numberOfRefresh}`
        return(
            <View
                style={{
                    flex: 1,
                    margin: 100
                }}
            >
                <Text>LifeCycle test</Text>
                <Text>{textToDisplay}</Text>
            </View>
        )
    }
}
export default class LifeCycleComponent extends Component {
    render () {
        const lifeCycle=<LifeCycle propA='abc'></LifeCycle>        
        return (
            <View>
                {lifeCycle}
            </View>
        )
    }
}