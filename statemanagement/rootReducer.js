import { combineReducers } from 'redux';
// import * as loggedInUser from './Authentication';
import * as userData from './User';
// import * as jobsData from './Jobs';
// import * as appData from './app';




const allReducers = combineReducers({
	userData: userData.reducer,
	// jobsData: jobsData.reducer,
	// appData:appData.reducer
});

export default allReducers;