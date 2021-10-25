import { put, take, takeEvery } from 'redux-saga/effects';
import { channel } from 'redux-saga';
import RNFetchBlob from 'react-native-fetch-blob';
import Axios from 'axios';
import * as actions from './action';
import actionTypes from './actionTypes';
import api from './axiosInstance';
import { BASE_URL } from '../../utility/utilities';

const {
	verifyPhoneSuccess,
	verifyPhoneFailure,
	authenticatePhoneFailure,
	authenticatePhoneSuccess,

	uploadPictureSuccess,
	uploadPictureFailure,

	createUserDetailsSuccess,
	createUserDetailsFailure,

	updateUserEmailSuccess,
	updateUserEmailFailure,

	updateUserPasswordSuccess,
	updateUserPasswordFailure,

	accountSetUpSuccess,
	accountSetUpFailure,

	loginAttempFailure,
	loginAttempSuccess,

	loadAllUsersFailure,
	loadAllUsersSuccess

} = actions;
const {
	AUTHENTICATE_PHONE,
	VERIFY_PHONE,
	CREATE_USER_DETAILS,
	UPDATE_USER_EMAIL,
	UPDATE_USER_PASSWORD,
	UPLOAD_PICTURE,
	ACCOUNT_SET_UP_DONE,
	LOGIN,
	ALL_USERS
} = actionTypes;

function* verifyPhone({ payload: { phoneNumber } }) {
	const verify = channel();

	try {
		yield api.post('/auth/verify-phone', { phoneNumber }).then(function(response) {
			verify.put(verifyPhoneSuccess(response.data));
		});

		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(verifyPhoneFailure(error.response.data));
	}
}

function* authenticatePhone({ payload: { phoneNumber, code } }) {
	const verify = channel();

	try {
		yield api.post('/auth/authenticate-code', { phoneNumber, code }).then(function(response) {
			verify.put(authenticatePhoneSuccess(response.data));
		});

		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(authenticatePhoneFailure(error.response.data));
	}
}

function* uploadPicture({ payload: { user, data } }) {
	const verify = channel();
	try {
		yield RNFetchBlob.fetch(
			'POST',
			`${BASE_URL}auth/upload/${user}`,
			{ 'Content-Type': 'multipart/form-data' },
			data
		).then((response) => {
			console.log('UPLOAD RESPONSE: ',  response.json());
			verify.put(uploadPictureSuccess(response.json()));
		});

		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(uploadPictureFailure(error.response.data));
	}
}

function* createUserDetails({ payload: { gender,name, birthday, userId } }) {
	const verify = channel();

	try {
		yield api.post('/auth/create-user-details', { gender,name, birthday, userId }).then(function(response) {
			verify.put(createUserDetailsSuccess(response.data));
		});
		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(createUserDetailsFailure(error.response.data));
	}
}
function* createUserEmail({ payload: {email, userId } }) {
	const verify = channel();

	try {
		yield api.post('/auth/update-user-email', { email, userId }).then(function(response) {
			verify.put(updateUserEmailSuccess(response.data));
		});
		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(updateUserEmailFailure(error.response.data));
	}
}
function* createUserPassword({ payload: {password, userId } }) {
	const verify = channel();
	console.log( password +'+++'+ userId)

	try {
		yield api.post('/auth/update-user-password', { password, userId }).then(function(response) {
			verify.put(updateUserPasswordSuccess(response.data));
		});
		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(updateUserPasswordFailure(error.response.data));
	}
}
function* accountSetUpDone({ payload: {userId} }) {
	const verify = channel();
	try {
		yield api.post('/auth/shallow-login', {userId }).then(function(response) {
			verify.put(accountSetUpSuccess(response.data));
		});
		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(accountSetUpFailure(error.response.data));
	}
}

function* initiateLogin({ payload: {phone,password} }) {
	const verify = channel();
	try {
		yield api.post('/auth/login', {phone, password }).then(function(response) {
			verify.put(loginAttempSuccess(response.data));
		});
		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(loginAttempFailure(error.response.data));
	}
}
function* fetchAllUsers() {
	const verify = channel();
	try {
		yield api.get('/users/all-users').then(function(response) {
			verify.put(loadAllUsersSuccess(response.data));
		});
		while (true) {
			const action = yield take(verify);
			yield put(action);
		}
	} catch (error) {
		yield put(loadAllUsersFailure(error.response.data));
	}
}

export default function* userPropSaga() {
	yield takeEvery(VERIFY_PHONE, verifyPhone);
	yield takeEvery(AUTHENTICATE_PHONE, authenticatePhone);
	yield takeEvery(UPLOAD_PICTURE, uploadPicture);
	yield takeEvery(CREATE_USER_DETAILS, createUserDetails);
	yield takeEvery(UPDATE_USER_EMAIL, createUserEmail);
	yield takeEvery(UPDATE_USER_PASSWORD, createUserPassword);
	yield takeEvery(ACCOUNT_SET_UP_DONE, accountSetUpDone);
	yield takeEvery(LOGIN, initiateLogin);
	yield takeEvery(ALL_USERS, fetchAllUsers);
}
