import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes';


 function reducer(state = {
	data: []}
, action = null) {
	switch(action.type) {
		case types.RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, data: action.payload, error: true});
		case types.RECV_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.payload, error: false });
		case types.REQ_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });
		default:
			return state;
	}
};

const allReducers = combineReducers({
    search: reducer
});

export default allReducers
