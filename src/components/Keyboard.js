import React from 'react';
import { Set } from 'immutable';

const Keyboard = ({disable, word, guess, correctGuesses = Set(), wrongGuesses = Set()}) => {
    const rows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ];

    const KeyboardLetter = ({char, disable}) => {
        if(correctGuesses.has(char)) {
            return (<div className='keyboard-key correct'>-</div>)
        } else if (wrongGuesses.has(char)) {
            return (<div className='keyboard-key wrong'>-</div>)
        } else {
            return (
                <div 
                    className='keyboard-key'
                    onClick={() => {
                        console.log(`click ${char}`)
                        if(!disable) guess(word, char)
                    }}
                >
                    {char}
                </div>)
        }
    }

    const KeyboardRow = ({letters, disable}) => (
        <div className='keyboard-row' >
            {letters.map((char) => <KeyboardLetter char={char} disable={disable} />)}
        </div>
    )


    return (
        <div>
            {rows.map((row) => <KeyboardRow letters={row} disable={disable} />)}
        </div>
    )
}

export default Keyboard;

