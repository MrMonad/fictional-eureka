import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/hangmanActions';
import Hangman from './Hangman';
import Word from './HiddenWord';
import Keyboard from './Keyboard';

export class HangmanPage extends React.Component {

  componentDidMount() {
    this.props.actions.init()
  }

  render() {
    const lives = this.props.hangman.get('lives')
    const word = this.props.hangman.get('word')
    const correctGuesses = this.props.hangman.get('correctGuesses')
    const wrongGuesses = this.props.hangman.get('wrongGuesses')

    const hasLost = lives < 1
    const hasWon = word ? word
      .split('')
      .map((char) => correctGuesses.has(char))
      .reduce(( acc, curr) => acc && curr, true) : false

    return (
      <div>
        <h2 className="title"> HANGMAN </h2>
        <Hangman
          hasWon={hasWon}
          hasLost={hasLost}
          lives={lives}
        />
        <Word
          word={word}
          correctGuesses={correctGuesses}
        />
        <Keyboard 
          correctGuesses={correctGuesses}
          wrongGuesses={wrongGuesses}
          guess={this.props.actions.guess}
          word={word}
          disable={hasWon || hasLost || !word}
        />
        <button onClick={this.props.actions.reset}>Reset</button>
        <br />
        {<span>{word}</span>}
      </div>
    );
  }
}

HangmanPage.propTypes = {
  actions: PropTypes.object.isRequired,
  hangman: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    hangman: state.hangman
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HangmanPage);
