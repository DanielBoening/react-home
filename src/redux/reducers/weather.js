import { SET_CURRENT_WEATHER, SET_FORECAST } from "../types"

// }
const initalState = {
    now: { 
    temperature: '',
    condition: 'wind',
    wind: '',
    rain: '',
  }, 
  forecasts: {
      1: {
        temperature: '',
        condition: 'wind',
        wind: '',
        rain: '',
      },
      2: {
        temperature: '',
        condition: 'wind',
        wind: '',
        rain: '',
      },
      3: {
        temperature: '',
        condition: 'wind',
        wind: '',
        rain: '',
      },
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