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

            let city = "";
            let numer = 0;

            if( action.payload.fromCity === "Kyivska" ){
                city = "Kyivska";
                numer = 0;
            } else if( action.payload.fromCity === "Odeska" ){
                city = "Odeska";
                numer = 1;
            } else if( action.payload.fromCity === "Lvivska" ){
                city = "Lvivska";
                numer = 2;
            }

        return action.payload.fromCity === city ? {
            ...state,
            dataJsn: state.dataJsn.map((cont, i) => i === numer ?
                [...cont, action.payload.newUser]
             : cont )
        } : undefined

        case "CITY_NAME":
        return {
            ...state,
            cityName: action.payload
        }
        
        default: return state;
    }
}

export default reducer;