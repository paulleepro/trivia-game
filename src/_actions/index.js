import {
  GET_DATA_SAGA,
  SET_DATA,
  USER_ANSWERS,
  CORRECT_ANSWERS,
  COUNT_RESULT,
  START_PAGE,
  CURRENT_QUESTION_ID,
} from '../_constants';

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

//Sagas
export function getDataSaga() {
  return {
    type: GET_DATA_SAGA,
  };
}

export function setUserAnswers(value) {
  return {
    type: USER_ANSWERS,
    payload: value,
  };
}


export function setCorrectAnswers(value) {
  return {
    type: CORRECT_ANSWERS,
    payload: value,
  };
}

export function setResult(value) {
  return {
    type: COUNT_RESULT,
    payload: value,
  };
}

export function setStartPage(value) {
  return {
    type: START_PAGE,
    payload: value,
  };
}

export function setCurrentQuestionId(value) {
  return {
    type: CURRENT_QUESTION_ID,
    payload: value,
  };
}
