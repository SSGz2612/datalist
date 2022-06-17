export const initialState = {
    dataPopup: [
        
    ]
}

export const updateData = (data) => {
    return {
        type: "UPDATE_DATA",
        payload: data
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_DATA":
        return {
            ...state,
            dataPopup: [ ...state.dataPopup, action.payload ]
        }

        default: return state;
    }
}

export default reducer;