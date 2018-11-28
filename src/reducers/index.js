import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import hangmanReducer from './hangmanReducer'

const rootReducer = combineReducers({
  fuelSavings,
  hangmanReducer
});

export default rootReducer;
