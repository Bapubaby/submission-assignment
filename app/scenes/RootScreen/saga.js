import { takeLatest, put, call } from 'redux-saga/effects';
import { rootScreenTypes, rootScreenActions } from './reducer';
import { fetchBankData } from '../../services/UserService';

export function* fetchData(query) {
  // console.log(query.query)
  const response = yield call(fetchBankData, query.query);
  // console.log(`response :  ${response}`)
  if (response.status === 200) {
    yield put(rootScreenActions.successFetchData(response.data));
  } else {
    yield put(
      rootScreenActions.failureFetchData(
        'IFSC Code wrong or Server not Responding'
      )
    );
  }
}

export default function* startupSaga() {
  yield takeLatest(rootScreenTypes.REQUEST_FETCH_DATA, fetchData);
}
