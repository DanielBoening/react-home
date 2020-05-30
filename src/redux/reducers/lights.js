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
    bright: { 
    title: 'Hell', 
    id: 'Scene_Bright',
    active: false 
  }, 
  dusk: {
    title:'Dämmerung', 
    id: "Scene_Dusk",
    active: false
  }, 
  evening: {
    title:'Abends',
    id: 'Scene_Evening',
    active: false
  }, 
  chill: {
    title:'Chillen', 
    id: 'Scene_Chill',
    active: false
  },
  allLights: {
    title:'Alle Lichte', 
    id: 'Wohnzimmer_Color',
    active: false
  },
}
const lights = (state = initalState, action) => {
    const payload = action.payload;
    switch (action.type) {
      case SET_LIGHT_SCENE:
          switch(payload.scene) {
                case 'Scene_Bright':
                    return { ...state, bright: {... state.bright, active: payload.value === 'ON' ? true : false }}
                case 'Scene_Dusk': 
                    return { ...state, dusk: {... state.dusk, active: payload.value === 'ON' ? true : false } }
                case 'Scene_Evening': 
                    return { ...state, evening: {... state.evening, active: payload.value === 'ON' ? true : false } }
                case 'Scene_Chill': 
                    return { ...state, chill: {... state.chill, active: payload.value === 'ON' ? true : false } }
                case 'AllLights': 
                    return { ...state, allLights: {... state.allLights, active: payload.value === 'ON' ? true : false } }
            default:
                return state;
          }
      default:
        return state
    }
  }
  
  export default lights