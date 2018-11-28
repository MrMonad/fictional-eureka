import { combineReducers } from 'redux';
import hangman from './hangmanReducer'

const rootReducer = combineReducers({
  hangman
});

export default rootReducer;
