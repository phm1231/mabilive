import { combineReducers } from 'redux';
import { optionReducer, levelReducer, itemInfoReducer, enchantReducer } from './reducer';

const rootReducer = combineReducers({
  options: optionReducer,
  levels: levelReducer,
  itemInfo: itemInfoReducer,
  enchant: enchantReducer
});

export default rootReducer;