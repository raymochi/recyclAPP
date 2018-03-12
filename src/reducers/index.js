import { combineReducers } from 'redux';
import chatLogReducer from './chatLog';

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    chatLog: chatLogReducer,
  });
}
