import { SET_CURRENT_WEATHER, SET_FORECAST } from "../types"

// }
const initalState = {
    now: { 
    temperature: '',
    icon: '',
    wind: '',
    rain: '',
  }, 
  forecasts: {
      1: {},
      2: {},
      3: {},
  }
}
const weather = (state = initalState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return { ...state, now: payload };
            case SET_FORECAST:
                return {...state, forecasts: {...state.forecasts, [payload.day]: payload.forecast} }
        default:
            return state
    }
  }
  
  export default weather