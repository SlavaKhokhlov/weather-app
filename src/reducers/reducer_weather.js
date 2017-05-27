/*
export default function(state = null, action) {
    console.log('Action received', action);
    return state;
}
*/

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //return [ action.payload.data ];
            //return state.push(action.payload.data); // NEVER DO THAT!
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ]; // [city, city, city] NOT [city, [city, city]]
    }
    
    return state;
}