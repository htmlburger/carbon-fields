/* @flow */

import { createStore, combineReducers } from 'redux';
import containers from 'reducers/containers';
import sidebars from 'reducers/sidebars';

export default createStore(combineReducers({ containers, sidebars }), window.carbon_json);
