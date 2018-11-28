import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import hangman from './hangmanReducer'

const rootReducer = combineReducers({
  fuelSavings,
  hangman
});

export default rootReducer;
