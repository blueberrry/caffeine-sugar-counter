import localSaveSaga from './localSaveSaga';

//https://github.com/redux-saga/redux-saga/issues/760
export default function* rootSaga() {
  yield [localSaveSaga()];
}
