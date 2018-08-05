import React, {Component} from 'react'

//redux
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from '../reducers'
import TaskManagerComponent from './TaskManagerComponent'

let store = createStore(allReducers)
export const ReduxExample = () => (
    <Provider store={store}>
        <TaskManagerComponent/>
    </Provider>
)