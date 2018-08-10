import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import he from 'he';

import {
  setUserAnswers,
  setCorrectAnswers,
  setResult,
  setCurrentQuestionId,
} from '../../_actions';

import './Quiz.css';

class Quiz extends Component {
  componentWillMount() {
    const {
      data,
      handleUserAnswers,
      handleCorrectAnswers,
    } = this.props;
    handleUserAnswers(data.results.map(() => null));
    handleCorrectAnswers(data.results.map(item => item.correct_answer));
  }

  handleAnswer = (value) => {
    const {
      handleUserAnswers,
      handleResult,
      setQuestionId,
      currentQuestionId,
      userAnswers,
      correctAnswers,
      countResult,
    } = this.props;

    userAnswers[currentQuestionId] = value;
    handleUserAnswers(userAnswers);

    if (correctAnswers[currentQuestionId] === value) {
      handleResult(countResult + 1);
    }
    setQuestionId(currentQuestionId + 1);
  }

  render() {
    const { data, currentQuestionId } = this.props;

    return (
      <div className="content">
        <h2>
          {unescape(data.results[currentQuestionId].category)}
        </h2>
        <div className="question">
          <div className="questionText">
            {he.decode(data.results[currentQuestionId].question)}
          </div>
          <div className="questioinCount">
            {`${currentQuestionId + 1} of 10`}
          </div>
        </div>
        <div>
          <button className="btn" type="button" onClick={() => this.handleAnswer('True')}>
            true
          </button>
          <button type="button" onClick={() => this.handleAnswer('False')}>
            false
          </button>
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  data: PropTypes.object.isRequired,
  userAnswers: PropTypes.array.isRequired,
  correctAnswers: PropTypes.array.isRequired,
  countResult: PropTypes.number.isRequired,
  handleUserAnswers: PropTypes.func.isRequired,
  handleResult: PropTypes.func.isRequired,
  setQuestionId: PropTypes.func.isRequired,
  currentQuestionId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  userAnswers: state.dataReducer.userAnswers,
  correctAnswers: state.dataReducer.correctAnswers,
  countResult: state.dataReducer.countResult,
  currentQuestionId: state.dataReducer.currentQuestionId,
});

const mapDispatchToProps = dispatch => ({
  handleUserAnswers: value => dispatch(setUserAnswers(value)),
  handleCorrectAnswers: value => dispatch(setCorrectAnswers(value)),
  handleResult: value => dispatch(setResult(value)),
  setQuestionId: value => dispatch(setCurrentQuestionId(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
