import { START_FETCHING, FETCH_SUCCESS, CALL_FAILURE, SENT_SUCCESS } from '../actions'

const initialState = {
    smurfs:[
        
            {
              "name": "Brainey",
              "age": 200,
              "height": "5cm",
              "id": 0,
              isFetching: false,
              error: ''
            }
          
    ]
};

export const reducer = (state=initialState, action) => {
    switch(action.type){
       case START_FETCHING:
           return {
               ...state,
               isFetching: true,
               error: ''
           };
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        case CALL_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        case SENT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
       
        default:
            return state;
    }
};
