import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import he from 'he';

import {
  setStartPage,
  setCurrentQuestionId,
  setUserAnswers,
  setCorrectAnswers,
  setResult,
} from '../../_actions';

import './Result.css';

class Result extends Component {
  onClick = () => {
    const {
      goStartPage,
      setQuestionId,
      handleUserAnswers,
      handleCorrectAnswers,
      handleResult,
    } = this.props;
    goStartPage(true);
    setQuestionId(0);
    handleUserAnswers([]);
    handleCorrectAnswers([]);
    handleResult(0);
  }

  render() {
    const {
      data,
      userAnswers,
      correctAnswers,
      countResult,
    } = this.props;
    return (
      <div className="content">
        <h2>
          {`You scored ${countResult} / 10`}
        </h2>
        <div className="result">
          {data.results.map((item, idx) => (
            <div className="resultsRow" key={`result_${idx}`}>
              <div className="result__mark">
                {userAnswers[idx] === correctAnswers[idx] ? 'O' : 'X'}
              </div>
              <div>
                {he.decode(item.question)}
              </div>
            </div>
          ))}
        </div>
        <button className="btn eventBtn" type="button" onClick={this.onClick}>
          PLAY AGAIN?
        </button>
      </div>
    );
  }
}

Result.propTypes = {
  data: PropTypes.object.isRequired,
  userAnswers: PropTypes.array.isRequired,
  correctAnswers: PropTypes.array.isRequired,
  countResult: PropTypes.number.isRequired,
  goStartPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.dataReducer.data,
  isStartPage: state.dataReducer.isStartPage,
  userAnswers: state.dataReducer.userAnswers,
  correctAnswers: state.dataReducer.correctAnswers,
  countResult: state.dataReducer.countResult,
});

const mapDispatchToProps = dispatch => ({
  goStartPage: value => dispatch(setStartPage(value)),
  setQuestionId: value => dispatch(setCurrentQuestionId(value)),
  handleUserAnswers: value => dispatch(setUserAnswers(value)),
  handleCorrectAnswers: value => dispatch(setCorrectAnswers(value)),
  handleResult: value => dispatch(setResult(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
