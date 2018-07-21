import React, {Component} from 'react'

//redux
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from '../reducers'

let store = createStore(allReducers)
export const ReduxExample = () => (
    <Provider store={store}>

    </Provider>
)