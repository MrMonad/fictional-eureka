import React from 'react';

const Hangman = ({hasWon, hasLost, lives}) => {
    if(hasWon) {
        return (
            <div>
                <h2 className="win">You've WON!</h2>
            </div>
        )
    } else if(hasLost) {
        return (
            <div>
                <h2 className="lose">You've LOST!</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>{`${lives} lives left`}</h2>
          </div>
        )
    }


}

  export default Hangman