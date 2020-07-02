import { SET_CURRENT_WEATHER } from "../types"

// }
const initalState = {
    now: { 
    temperature: '',
    icon: '',
    wind: '',
    rain: '',
  }, 

}
const weather = (state = initalState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return { ...state, now: payload };
        default:
            return state
    }
  }
  
  export default weather