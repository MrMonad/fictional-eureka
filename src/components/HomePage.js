import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/hangmanActions';

export class HangmanPage extends React.Component {

  componentDidMount() {
    this.props.actions.reset()
  }

  render() {
    return (
      <div>
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
  console.log(state)
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
