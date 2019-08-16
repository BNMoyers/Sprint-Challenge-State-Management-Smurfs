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
        default:
            return state;
    }
}