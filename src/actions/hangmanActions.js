// // example of a thunk using the redux-thunk middleware
// export function saveFuelSavings(settings) {
//   return function (dispatch) {
//     // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
//     // in this case at this point we could call a service that would persist the fuel savings
//     return dispatch({
//       type: types.SAVE_FUEL_SAVINGS,
//       dateModified: getFormattedDateTime(),
//       settings
//     });
//   };
// }
import axios from 'axios';


const API_URL = 'http://localhost:4000/' 

export const init = () => {
    return (dispatch) => {
      return axios.get(API_URL, { headers: { 'crossDomain': true, 'Content-Type': 'application/json'}})
        .then((response) => {
            const wordBank = response.data
            const word = wordBank[Math.floor(Math.random()*wordBank.length)];
            console.log(word)
            console.log(response)
            dispatch({
                type: INIT,
                word: word.toLowerCase(),
                wordBank: wordBank
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const reset = () => {
    return {
        type: RESET
      }
}
  
export const guess = (word, letter) => {
    if(word.indexOf(letter) > -1) {
      return {
        type: CORRECT_GUESS,
        letter: letter
      }
    } else {
      return {
        type: WRONG_GUESS,
        letter: letter
      }
    }
  }
  
export const INIT = 'INIT'
export const RESET = 'RESET'
export const CORRECT_GUESS = 'CORRECT_GUESS'
export const WRONG_GUESS = 'WRONG_GUESS'
  