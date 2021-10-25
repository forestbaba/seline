import actionTypes from './actionTypes';

const {
	AUTHENTICATE_PHONE,
	AUTHENTICATE_PHONE_FAILURE,
	AUTHENTICATE_PHONE_SUCCESS,

	VERIFY_PHONE,
	VERIFY_PHONE_FAILURE,
	VERIFY_PHONE_SUCCESS,

	UPLOAD_PICTURE,
	UPLOAD_PICTURE_SUCCESS,
	UPLOAD_PICTURE_FAILURE,

	CREATE_USER_DETAILS,
	CREATE_USER_DETAILS_SUCCESS,
	CREATE_USER_DETAILS_FAILURE,

	LOGIN,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,

	GET_USER_DETAILS,
	GET_USER_DETAILS_FAILURE,
	GET_USER_DETAILS_SUCCESS,

	UPDATE_USER_EMAIL,
	UPDATE_USER_EMAIL_FAILURE,
	UPDATE_USER_EMAIL_SUCCESS,

	UPDATE_USER_PASSWORD,
	UPDATE_USER_PASSWORD_SUCCESS,
	UPDATE_USER_PASSWORD_FAILURE,

	ACCOUNT_SET_UP_DONE,
	ACCOUNT_SET_UP_DONE_FAILURE,
	ACCOUNT_SET_UP_DONE_SUCCESS,
	ALL_USERS,
	ALL_USERS_FAILURE,
	ALL_USERS_SUCCESS


} = actionTypes;

const initialState = {
	authUserDetails: {},
	codeVerifyAuthDetails:{},
	autherror: {},
	pictureUpload: {},
	uploadError: {},
	userDet: {},
	updateError: {},
	userEmailUpdate: {},
	updateEmailError: {},

	userPasswordUpdate: {},
	updatePasswordError: {},

	allUsers:[],
	loadUserError:{}


	//	clean the rest,
};

const reducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case AUTHENTICATE_PHONE:
			return { ...state, loading: true, autherror:{} };

		case AUTHENTICATE_PHONE_SUCCESS:
			return { ...state, loading: false, codeVerifyAuthDetails: payload };

		case AUTHENTICATE_PHONE_FAILURE:
			return {
				...state,
				loading: false,
				autherror: payload
			};

		case VERIFY_PHONE:
			return { ...state, loading: true,autherror:{} };

		case VERIFY_PHONE_SUCCESS:
			return { ...state, loading: false, authUserDetails: payload };

		case VERIFY_PHONE_FAILURE:
			return {
				...state,
				loading: false,
				autherror: payload
			};
		case UPLOAD_PICTURE:
			return { ...state, loading: true };

		case UPLOAD_PICTURE_SUCCESS:
			return { 
				...state, 
				loading: false,
				pictureUpload: payload 
			};

		case UPLOAD_PICTURE_FAILURE:
			return {
				...state,
				loading: false,
				uploadError: payload
			};

		case CREATE_USER_DETAILS:
			return { ...state, loading: true };

		case CREATE_USER_DETAILS_SUCCESS:
			return { ...state, loading: false, userDet: payload };

		case CREATE_USER_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
				updateError: payload
			};

		case UPDATE_USER_EMAIL:
			return { ...state, loading: true };

		case UPDATE_USER_EMAIL_SUCCESS:
			return { ...state, loading: false, userEmailUpdate: payload };

		case UPDATE_USER_EMAIL_FAILURE:
			return {
				...state,
				loading: false,
				updateEmailError: payload,
			};


		case UPDATE_USER_PASSWORD:
			return { ...state, loading: true };

		case UPDATE_USER_PASSWORD_SUCCESS:
			return { ...state, loading: false, userPasswordUpdate: payload };

		case UPDATE_USER_PASSWORD_FAILURE:
			return {
				...state,
				loading: false,
				updatePasswordError: payload,
			};


		case ACCOUNT_SET_UP_DONE:
			return { ...state, loading: true };

		case ACCOUNT_SET_UP_DONE_SUCCESS:
			return { ...state, loading: false, authUserDetails: payload };

		case ACCOUNT_SET_UP_DONE_FAILURE:
			return {
				...state,
				loading: false,
				autherror: payload,
			};

		case LOGIN:
			return { ...state, loading: true };

		case LOGIN_SUCCESS:
			return { ...state, loading: false, authUserDetails: payload };

		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				autherror: payload,
			};
		case LOGIN:
			return { ...state, loading: true };

		case LOGIN_SUCCESS:
			return { ...state, loading: false, authUserDetails: payload };

		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				autherror: payload,
			};

		case ALL_USERS:
			return { ...state, loading: true };

		case ALL_USERS_SUCCESS:
			return { ...state, loading: false, allUsers: payload.allUsers };

		case ALL_USERS_FAILURE:
			return {
				...state,
				loading: false,
				loadUserError: payload,
			};
		default:
			return state;
	}
};
export default reducer;