import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Header } from 'semantic-ui-react';

import {
  getDataSaga,
  setUserAnswers,
  setStartPage,
  setCurrentQuestionId
} from '../../_actions';

import Quiz from '../Quiz';
import Result from '../Result';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  setCurrentQuestionId = (value) => {
    const { setQuestionId } = this.props;
    setQuestionId(value);
  }

  handleClick = () => {
    const { goStartPage } = this.props;
    goStartPage(false);
  }

  renderHomepage = () => (
    <div className="content">
      <Header as="h2">
        Welcome To the Trivia Challenge!
      </Header>
      <div className="homeText">
        You will be presented with 10 True or False questions.
      </div>
      <div className="homeText">
        Can you Score 100%?
      </div>
      <button
        className="btn eventBtn"
        type="button"
        onClick={this.handleClick}
      >
        BEGIN
      </button>
    </div>
  )

  render() {
    const { data, isStartPage, currentQuestionId } = this.props;

    return (
      <Container className="homePage" textAlign="center" fluid>
        {isStartPage
          ? this.renderHomepage()
          : currentQuestionId < 10
            ? <Quiz data={data} />
            : <Result />
        }
      </Container>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  goStartPage: PropTypes.func.isRequired,
  setQuestionId: PropTypes.func.isRequired,
  isStartPage: PropTypes.bool.isRequired,
  currentQuestionId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  data: state.dataReducer.data,
  isStartPage: state.dataReducer.isStartPage,
  currentQuestionId: state.dataReducer.currentQuestionId,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getDataSaga()),
  handleUserAnswers: value => dispatch(setUserAnswers(value)),
  goStartPage: value => dispatch(setStartPage(value)),
  setQuestionId: value => dispatch(setCurrentQuestionId(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
