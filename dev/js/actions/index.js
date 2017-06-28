import axios from 'axios';
import * as types from '../actions/actionTypes';

function receiveData(data) {
	return {type: types.RECV_DATA,payload:data}
};

function requestData() {
	return {type: types.REQ_DATA}
};


export function fetchData(requestParam,self) {
	console.log("requestParam",requestParam);
	return function(dispatch) {
		  return axios({
		    method: 'post',
		    url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyC8YVAkzSSKj2nN8hE96Ev4ua802UaBQfk',
		    data: JSON.stringify({
					  "request": {
					    "passengers": {
					      "adultCount": requestParam.NoOfAdults
					    },
					    "slice": [
					      {
					        "origin": requestParam.Origin_Code,
					        "destination": requestParam.Dest_Code,
					        "date": requestParam.start_Date
					      },
					      {
					        "origin": requestParam.Return_Origin_Code,
					        "destination": requestParam.Return_Dest_Code,
					        "date": requestParam.return_Date
					      }
					    ]
					  }
					}
              ),
		    headers: {'Content-Type': 'application/json'}
		    })
			.then(function(response) {
				self.setState({isLoading:false});
				debugger
				dispatch(receiveData(response.data));
				
			})
			.catch(function(response){
				debugger;
				//dispatch(receiveError(response.data));
				//dispatch(pushState(null,'/error'));
			})
	}
};
