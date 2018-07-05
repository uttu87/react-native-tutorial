
import React, { Component} from 'react'
import {View, Text,
        SectionList,                
        Alert,
        Platform,
        AppRegistry
} from 'react-native'

const apiGetAllFoods = 'https://next.json-generator.com/api/json/get/4kNy0-PfH'

async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods)
        let responseJson = await response.json()
        console.log(`responseJson: ${responseJson.data}`)
        return responseJson.data
    } catch (error){
        console.error(`Error is: ${error}`)
    }
}

export {getFoodsFromServer}