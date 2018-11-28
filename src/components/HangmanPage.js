import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/hangmanActions';
import Hangman from './Hangman';
import Word from './Word';
import Keyboard from './Keyboard';

export class HangmanPage extends React.Component {

  componentDidMount() {
    this.props.actions.reset()
  }

  render() {
    return (
      <div>
        <Hangman 
          lives={this.props.hangman.get('lives')}
        />
        <Word
          word={this.props.hangman.get('word')}
          correctGuesses={this.props.hangman.get('correctGuesses')}
        />
        <Keyboard 
          correctGuesses={this.props.hangman.get('correctGuesses')}
          wrongGuesses={this.props.hangman.get('wrongGuesses')}
          guess={ this.props.actions.guess}
          word={this.props.hangman.get('word')}
        />
        <br />
        {this.props.hangman.get('word')}
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
