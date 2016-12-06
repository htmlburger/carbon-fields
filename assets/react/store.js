/* @flow */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { normalizePreloadedState } from 'lib/normalize';
import containers from 'containers/reducer';
import sidebars from 'sidebars/reducer';
import baseForeman from 'containers/sagas/base';
import postMetaForeman from 'containers/sagas/post-meta';
import termMetaForeman from 'containers/sagas/term-meta';
import userMetaForeman from 'containers/sagas/user-meta';
import themeOptionsForeman from 'containers/sagas/theme-options';

const preloadedState = normalizePreloadedState(window.carbon_json);
const saga = createSagaMiddleware();
const reducer = combineReducers({ containers, sidebars });
const store = createStore(reducer, preloadedState, applyMiddleware(saga));

saga.run(baseForeman);
saga.run(postMetaForeman);
saga.run(termMetaForeman);
saga.run(userMetaForeman);
saga.run(themeOptionsForeman);

export default store;
