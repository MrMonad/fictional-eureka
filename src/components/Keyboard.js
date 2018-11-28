import React from 'react';
import { Set } from 'immutable';

const Keyboard = ({word, guess, correctGuesses = Set(), wrongGuesses = Set()}) => {
    const rows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ];

    const KeyboardLetter = ({char}) => {
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
                        guess(word, char)
                    }}
                >
                    {char}
                </div>)
        }
    }

    const KeyboardRow = ({letters}) => (
        <div className='keyboard-row' >
            {letters.map((char) => <KeyboardLetter char={char} />)}
        </div>
    )


    return (
        <div>
            {rows.map((row) => <KeyboardRow letters={row} />)}
        </div>
    )
}

export default Keyboard;

