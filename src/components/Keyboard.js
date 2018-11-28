import React from 'react';

const Keyboard = ({correctGuesses, wrongGuesses}) => {
    const letters = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ];

    const Key = ({char, mode}) => {
    }

    const KeyboardLetter = (char) => {
        if(correctGuesses.has(char)) {
            return (<div className='keyboard-key'>$</div>)
        } else if (wrongGuesses.has(char)) {
            return (<div className='keyboard-key'>#</div>)
        } else {
            return (<div className='keyboard-key'>{char}</div>)
        }
    }

    const KeyboardRow = (letters) => (
        <div className='keyboard-row' >
            letters.map((char) => <KeyboardLetter char={char} />)
        </div>
    )


    return (
        <div>
            {letters.map((row) => <KeyboardRow letters={row} />)}
        </div>
    )
}

export default Keyboard;

