/*dependencies*/
import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const CALL_FAILURE = 'CALL_FAILURE';
export const SENT_SUCCESS = 'SENT_SUCCESS';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: CALL_FAILURE, payload: err}))
}

export const sendSmurfs = smurf  => dispatch => {

dispatch({ type: START_FETCHING });

axios
.post('http://localhost:3333/smurfs', smurf)
.then(res => dispatch({ type: SENT_SUCCESS, payload: res.data }))
.catch(err => dispatch({ type: CALL_FAILURE, payload: err }))

}