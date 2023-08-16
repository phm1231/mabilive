import { combineReducers } from 'redux';
import { optionReducer, levelReducer, itemInfoReducer } from './reducer';

const rootReducer = combineReducers({
  options: optionReducer,
  levels: levelReducer,
  itemInfo: itemInfoReducer
});

export default rootReducer;