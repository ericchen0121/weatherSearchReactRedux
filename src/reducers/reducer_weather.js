import { FETCH_WEATHER } from '../actions/index';

// state = [] since we will probably have a list of weather data
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
  }

  return state;
}
