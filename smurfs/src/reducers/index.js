import { ADD_SMURF } from '../actions'

export const initialState = {
    smurfArray: [
        {
            "name": "",
            "age": null,
            "height": "",
            "id": null
        }
    ]
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_SMURF:
            return {
                smurfArray:[...action.payload]
        };
        
        default:
            return state;
    }
}