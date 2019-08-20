import React from 'react';
import { FETCH_SMURFS, SMURFS_FETCHED, SMURF_BROKE, MOVING_SMURF, SMURF_MOVED } from '../actions'


export const initialState = {
    smurfArray: [
       
    ],
    isLoading: false,
    errors: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return {
                ...state,
                isLoading: true,
                errors: ''
            };
         
        case SMURFS_FETCHED:
            return{
                ...state,
                smurfArray:[...action.payload],
                isLoading: false,
                errors: ''
            }    
        case SMURF_MOVED:
            return {
                smurfArray:[...action.payload],
                isLoading: false,
                errors: ''
        };
        case SMURF_BROKE:
            return {
               isLoading: false,
                errors: action.payload 
            }
        case MOVING_SMURF: 
            return{
                ...state,
                isLoading: true,
                errors: ''
            }

        
        default:
            return state;
    }
}