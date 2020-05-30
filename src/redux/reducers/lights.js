// const intialState = {
//     now: {
//         temp: '-',
//         rain: '-',
//         wind: '-'
//     },
//     forecast1: {
//         temp: '-',
//         rain: '-',
//         wind: '-'
//     },
//     forecast2: {
//         temp: '-',
//         rain: '-',
//         wind: '-'
//     },
//     forecast3: {
//         temp: '-',
//         rain: '-',
//         wind: '-'
//     },

import { SET_LIGHT_SCENE } from "../types"

// }
const initalState = {
    bright: false,
    dusk: false,
    evening: false,
    chill: false,
    allLights: false
}
const lights = (state = initalState, action) => {
    const payload = action.payload;
    switch (action.type) {
      case SET_LIGHT_SCENE:
          switch(payload.scene) {
                case 'Scene_Bright': 
                    return { ...state, bright: payload.value === 'ON' ? true : false }
                case 'Scene_Dusk': 
                    return { ...state, dusk: payload.value === 'ON' ? true : false }
                case 'Scene_Evening': 
                    return { ...state, evening: payload.value === 'ON' ? true : false }
                case 'Scene_Chill': 
                    return { ...state, chill: payload.value === 'ON' ? true : false }
                case 'AllLights': 
                    return { ...state, allLights: payload.value === 'ON' ? true : false }
            default:
                return state;
          }
      default:
        return state
    }
  }
  
  export default lights