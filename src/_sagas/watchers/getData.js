import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_DATA_SAGA } from '../../_constants';
import { setData } from '../../_actions';
import getData from '../../lib/api';

function* workerGetDataSaga() {
  const data = yield call(getData);
  yield put(setData(data));
}

export default function* watchGetDataSaga() {
  yield takeLatest(GET_DATA_SAGA, workerGetDataSaga);
}
