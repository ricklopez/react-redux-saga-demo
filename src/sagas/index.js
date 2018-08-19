// eslint-disable-next-line
import { delay } from 'redux-saga';
// eslint-disable-next-line
import { all, put, takeEvery, take } from 'redux-saga/effects';
import * as types from '../constants/action.types';


export function* helloSaga() {
  yield delay(1000);
  console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(5000)
  yield put({ type: types.INCREMENT })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync)
}



// Single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    incrementAsync(),
    watchIncrementAsync()
  ]);
} 
