import { INIT, RESET, CORRECT_GUESS, WRONG_GUESS} from '../actions/hangmanActions'
import { fromJS, Set } from 'immutable'

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

const initialState = fromJS({
    word: '',
    correctGuesses: Set(),
    wrongGuesses: Set(),
    lives: 6,
    wordBank: []
})

const hangmanReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return initialState.merge({
                word: action.word,
                wordBank: action.wordBank
            })
        case RESET:
            const wordBank = state.get('wordBank')
            const word = wordBank[Math.floor(Math.random()*wordBank.length)];
            return state.merge({
                word: word,
                correctGuesses: Set(),
                wrongGuesses: Set(),
                lives: 6
            })
        case CORRECT_GUESS:
            const correctGuesses = state.get('correctGuesses').add(action.letter)
            return state.merge({
                correctGuesses
            })
        case WRONG_GUESS:
            const wrongGuesses = state.get('wrongGuesses').add(action.letter)
            const lives = state.get('lives') - 1
            return state.merge({
                wrongGuesses,
                lives
            })
    default:
        return state
    }
}

export default hangmanReducer
