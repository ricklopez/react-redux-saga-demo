import * as types from '../constants/action.types';
import objectAssign from 'object-assign';


export default function(state = {header: 'Hello World!', counter: 0}, action) {
  console.log('Action received', action);

  switch (action.type) {
    case types.INCREMENT:
      const newState = objectAssign({}, state, {counter: state.counter + 1});
      console.log("NEW STATE",newState);
      return newState;
    case types.DECREMENT:
      return objectAssign({}, state, {counter: state.counter - 1});
    default:
      return state;
  }
}