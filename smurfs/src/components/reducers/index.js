import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'

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
        case FETCH_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
       
        default:
            return state;
    }
};
