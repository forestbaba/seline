import actionTypes from './actionTypes';

const {
	AUTHENTICATE_PHONE,
	AUTHENTICATE_PHONE_FAILURE,
	AUTHENTICATE_PHONE_SUCCESS,

	VERIFY_PHONE,
	VERIFY_PHONE_FAILURE,
	VERIFY_PHONE_SUCCESS,

	UPLOAD_PICTURE,
	UPLOAD_PICTURE_FAILURE,
	UPLOAD_PICTURE_SUCCESS,

	CREATE_USER_DETAILS,
	CREATE_USER_DETAILS_FAILURE,
	CREATE_USER_DETAILS_SUCCESS,

	UPDATE_USER_EMAIL,
	UPDATE_USER_EMAIL_FAILURE, 
	UPDATE_USER_EMAIL_SUCCESS,

	UPDATE_USER_PASSWORD,
	UPDATE_USER_PASSWORD_SUCCESS,
	UPDATE_USER_PASSWORD_FAILURE,

	ACCOUNT_SET_UP_DONE,
	ACCOUNT_SET_UP_DONE_FAILURE,
	ACCOUNT_SET_UP_DONE_SUCCESS,

	LOGIN,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	ALL_USERS,
	ALL_USERS_FAILURE,
	ALL_USERS_SUCCESS


} = actionTypes;


export const verifyPhone = payload => ({
	payload,
	type: VERIFY_PHONE,
});

export const verifyPhoneSuccess = payload => ({
	payload,
	type: VERIFY_PHONE_SUCCESS,
});

export const verifyPhoneFailure = payload => ({
	payload,
	type: VERIFY_PHONE_FAILURE,
});


export const authenticatePhone = payload => ({
	payload,
	type: AUTHENTICATE_PHONE,
});

export const authenticatePhoneSuccess = payload => ({
	payload,
	type: AUTHENTICATE_PHONE_SUCCESS,
});

export const authenticatePhoneFailure = payload => ({
	payload,
	type: AUTHENTICATE_PHONE_FAILURE
});



export const uploadPicture = payload => ({
	payload,
	type: UPLOAD_PICTURE,
});

export const uploadPictureSuccess = payload => ({
	payload,
	type: UPLOAD_PICTURE_SUCCESS,
});

export const uploadPictureFailure = payload => ({
	payload,
	type: UPLOAD_PICTURE_FAILURE,
});


export const createUserDetails = payload => ({
	payload,
	type: CREATE_USER_DETAILS,
});

export const createUserDetailsSuccess = payload => ({
	payload,
	type: CREATE_USER_DETAILS_SUCCESS,
});

export const createUserDetailsFailure = payload => ({
	payload,
	type: CREATE_USER_DETAILS_FAILURE,
});


export const updateUserEmail = payload => ({
	payload,
	type: UPDATE_USER_EMAIL,
});

export const updateUserEmailSuccess = payload => ({
	payload,
	type: UPDATE_USER_EMAIL_SUCCESS,
});

export const updateUserEmailFailure = payload => ({
	payload,
	type: UPDATE_USER_EMAIL_FAILURE,
});


export const updateUserPassword = payload => ({
	payload,
	type: UPDATE_USER_PASSWORD,
});

export const updateUserPasswordSuccess = payload => ({
	payload,
	type: UPDATE_USER_PASSWORD_SUCCESS,
});

export const updateUserPasswordFailure = payload => ({
	payload,
	type: UPDATE_USER_PASSWORD_FAILURE,
});

export const accountSetUp = payload => ({
	payload,
	type: ACCOUNT_SET_UP_DONE,
});

export const accountSetUpSuccess = payload => ({
	payload,
	type: ACCOUNT_SET_UP_DONE_SUCCESS,
});

export const accountSetUpFailure = payload => ({
	payload,
	type: ACCOUNT_SET_UP_DONE_FAILURE,
});

export const loginAttemp = payload => ({
	payload,
	type: LOGIN,
});

export const loginAttempSuccess = payload => ({
	payload,
	type: LOGIN_SUCCESS,
});

export const loginAttempFailure = payload => ({
	payload,
	type: LOGIN_FAILURE,
});

export const loadAllUsers = payload => ({
	payload,
	type: ALL_USERS,
});

export const loadAllUsersSuccess = payload => ({
	payload,
	type: ALL_USERS_SUCCESS,
});

export const loadAllUsersFailure = payload => ({
	payload,
	type: ALL_USERS_FAILURE,
});
