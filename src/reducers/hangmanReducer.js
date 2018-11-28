import { RESET, CORRECT_GUESS, WRONG_GUESS} from '../actions/hangmanActions'
import { fromJS } from 'immutable'

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

const initialState = fromJS({
    word: '',
    correctGuesses: [],
    wrongGuesses: [],
    lives: 6
})

const hangmanReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return initialState
        case CORRECT_GUESS:
            const correctGuesses = state.get('correctGuesses').push(action.letter)
            return state.merge({
                correctGuesses
            })
        case WRONG_GUESS:
            const wrongGuesses = state.get('wrongGuesses').push(action.letter)
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
