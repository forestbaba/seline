import { all } from 'redux-saga/effects';
// import { userAuthSaga } from './Authentication';
import { userPropSaga } from './User';
// import { jobsPropSaga } from './Jobs';
// import { merchantPropSaga } from './Merchant';

export default function* rootSaga() {
	yield all([
		userPropSaga(),
		// jobsPropSaga(),
	]);
}