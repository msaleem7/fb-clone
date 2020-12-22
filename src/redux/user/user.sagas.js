import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  
} from '../user/user.actions';

import {auth,googleProvider} from '../../firebase';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error));
  }
}


export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithGoogle);
}


export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignOutStart),
  ]);
}
