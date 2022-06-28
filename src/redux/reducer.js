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

export const updateTxt = (data) => {
    return {
        type: "UPDATE_TXT",
        payload: data
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_DATA":
            let namecell = action.payload.fromCity.city + action.payload.fromCity.year + action.payload.fromCity.title;
            console.log(action.payload.newUser);
            console.log(state.dataJsn);
        return {
            ...state,
            dataJsn: [...state.dataJsn, {...action.payload.newUser, namecell: namecell}]
        }

        case "UPDATE_TXT":
            // dataTxt: {...state.dataTxt, Kyivska: {...state.dataTxt.Kyivska, id: action.payload.id}}
        return {
            ...state,
            dataTxt: {...state.dataTxt,
                [action.payload.fromCity.city]: {...state.dataTxt[action.payload.fromCity.city], G:
                    {...state.dataTxt[action.payload.fromCity.city].G, [action.payload.fromCity.year]:
                        {...state.dataTxt[action.payload.fromCity.city].G[action.payload.fromCity.year],
                            [action.payload.fromCity.title]:
                            {...state.dataTxt[action.payload.fromCity.city].G[action.payload.fromCity.year][action.payload.fromCity.title],
                                id: action.payload.id
                            }
                        }
                    }
                }
            }
        }
        
        default: return state;
    }
}

export default reducer;