/* @flow */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { normalizePreloadedState } from 'lib/normalize';
import containers from 'containers/reducer';
import sidebars from 'sidebars/reducer';
import baseForeman from 'containers/sagas/base';

const preloadedState = normalizePreloadedState(window.carbon_json);
const saga = createSagaMiddleware();
const reducer = combineReducers({ containers, sidebars });
const store = createStore(reducer, preloadedState, applyMiddleware(saga));

saga.run(baseForeman);

export default store;
