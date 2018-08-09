import { SET_DATA } from '../_constants';

const initialState = { data: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
