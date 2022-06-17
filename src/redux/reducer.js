import { data } from '../data/testData.js';
import dataJsn from '../data/popupData.json';

export const initialState = {
    dataTxt: data,
    dataJsn: dataJsn
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
            dataJsn: [ ...state.dataJsn, action.payload ]
        }

        default: return state;
    }
}

export default reducer;