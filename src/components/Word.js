import React from 'react';

const Words = ({correctGuesses, word}) => {
  let letters = word.split('').map((char) => {
    if(correctGuesses.has(char)) {
      return char
    } else {
      return "_"
    }
  })
  
  return (
    <div>
      <h2>{letters.join(" ")}</h2>
    </div>
  )

};

export default Words