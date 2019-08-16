import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const MOVING_SMURF = 'MOVING_SMURF';
export const SMURF_MOVED = 'SMURF_MOVED';
export const SMURF_BROKE = 'SMURF_BROKE';





export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS});
    axios.get('http://localhost:3333/smurfs')
    .then(res =>dispatch({type: SMURFS_FETCHED, payload: res.data}))
    .catch(error => console.log('error:', error))
};



export const addSmurf = smurf => dispatch => {
    dispatch({type: MOVING_SMURF});
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({type: SMURF_MOVED, payload: res.data}))
    .catch(error => dispatch({type:SMURF_BROKE, payload: error}))
};