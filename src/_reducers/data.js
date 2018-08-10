import {
  SET_DATA,
  USER_ANSWERS,
  CORRECT_ANSWERS,
  COUNT_RESULT,
  START_PAGE,
  CURRENT_QUESTION_ID,
} from '../_constants';

const initialState = {
  data: [],
  userAnswers: [],
  correctAnswers: [],
  countResult: 0,
  isStartPage: true,
  currentQuestionId: 0,
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case USER_ANSWERS:
      return {
        ...state,
        userAnswers: action.payload,
      };

    case CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: action.payload,
      };

    case COUNT_RESULT:
      return {
        ...state,
        countResult: action.payload,
      };

    case START_PAGE:
      return {
        ...state,
        isStartPage: action.payload,
      };

    case CURRENT_QUESTION_ID:
      return {
        ...state,
        currentQuestionId: action.payload,
      };

    default:
      return state;
  }
}
