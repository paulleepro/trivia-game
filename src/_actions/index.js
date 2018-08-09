import { GET_DATA_SAGA, SET_DATA } from '../_constants';

export function setData(data) {
  return {
    type: SET_DATA,
    data
  };
}

//Sagas
export function getDataSaga() {
  return {
    type: GET_DATA_SAGA
  };
}
