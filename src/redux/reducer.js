import { data } from '../data/testData.js';
import dataJsn from '../data/popupData.json';

export const initialState = {
    dataTxt: data,
    dataJsn: dataJsn,
    cityName: ""
}

export const updateData = (data) => {
    return {
        type: "UPDATE_DATA",
        payload: data
    }
}

export const dataOfCity = (data) => {
    return {
        type: "CITY_NAME",
        payload: data
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_DATA":
            console.log( "city cell: " + action.payload.fromCity );
            console.log( action.payload.newUser );
        return action.payload.fromCity === "Kyivska" ? {
            ...state,
            dataJsn: state.dataJsn.map((cont, i) => i === 0 ?
                [...cont, action.payload.newUser]
             : cont )
        } : action.payload.fromCity === "Odeska" ? {
            ...state,
            dataJsn: state.dataJsn.map((cont, i) => i === 1 ?
                [...cont, action.payload.newUser]
             : cont )
        } : {
            dataJsn: state.dataJsn.map((cont, i) => i === 2 ?
                [...cont, action.payload.newUser]
             : cont )
        }

        case "CITY_NAME":
        return {
            ...state,
            cityName: action.payload
        }
        
        default: return state;
    }
}

export default reducer;