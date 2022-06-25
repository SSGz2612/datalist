import { data } from '../data/testData.js';
import dataJsn from '../data/popupData.json';

export const initialState = {
    dataTxt: data,
    dataJsn: dataJsn,
    cityName: []
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
            let namecell = action.payload.fromCity[0] + action.payload.fromCity[1] + action.payload.fromCity[2];
            // let namecellfrom = state.cityName[0] + state.cityName[1] + state.cityName[2];
            
            // console.log(state.cityName); // Kyiv 2018 XX
            // console.log(action.payload.newUser);
            // console.log(state.dataJsn);
            // console.log(state.dataJsn.filter((x) => (x.namecell === namecell) || (x.namecell === undefined) ? x : null))
        return {
            ...state,
            dataJsn: [...state.dataJsn, {...action.payload.newUser, namecell: namecell}]
        }

        // return action.payload.fromCity === city ? {
        //     ...state,
        //     dataJsn: state.dataJsn.map((cont, i) => i === numer ?
        //         [...cont, action.payload.newUser]
        //      : cont )
        // } : undefined

        case "CITY_NAME":
        return {
            ...state,
            cityName: action.payload
        }
        
        default: return state;
    }
}

export default reducer;