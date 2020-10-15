import { fork } from 'redux-saga/effects';
import startupSaga from '@scenes/RootScreen/saga';

export default function* root() {
  yield fork(startupSaga);
}
