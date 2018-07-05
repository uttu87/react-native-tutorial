
import React, { Component} from 'react'
import {View, Text,
        SectionList,                
        Alert,
        Platform,
        AppRegistry
} from 'react-native'

const apiGetAllFoods = 'https://next.json-generator.com/api/json/get/4kNy0-PfH'
const apiInsertNewFood = 'https://next.json-generator.com/api/json/get/4kNy0-PfH'
const apiUpdateFood = 'https://next.json-generator.com/api/json/get/4kNy0-PfH'

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

async function insertNewFoodToServer(params) {
    try{
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        let responseJson = await response.json()
        return responseJson.result
    } catch (error){
        console.error(`Error is: ${error}`)
    }
}

async function updateFoodToServer(params) {
    try{
        let response = await fetch(apiUpdateFood, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        let responseJson = await response.json()
        return responseJson.result
    } catch (error){
        console.error(`Error is: ${error}`)
    }
}

export {getFoodsFromServer}
export {insertNewFoodToServer}
export {updateFoodToServer}