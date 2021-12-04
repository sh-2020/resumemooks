import logger from 'redux-logger'
import RcReduxModel  from 'rc-redux-model'
import globalModel from './globalModel'
import { applyMiddleware, combineReducers, createStore } from 'redux';

const reduxModel = new RcReduxModel([globalModel]);

const reducerList = combineReducers(reduxModel.reducers)

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger))