import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const storeCreator = applyMiddleware(
    thunkMiddleware,
    createLogger
)(createStore);




