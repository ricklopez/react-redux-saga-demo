import * as types from '../constants/action.types';
import * as env from '../constants/app.environment';
import axios from 'axios';

export function onIncrement() {
  return {type: types.INCREMENT, payload: 1};
}
export function onDecrement() {
  return {type: types.DECREMENT, payload: 1}
}
export function onIncrementAsync() {
  return {type: types.INCREMENT_ASYNC, payload: 1}
}


