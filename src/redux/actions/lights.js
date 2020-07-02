import openhabAPI from '../../api/openhabAPI';
import { SET_LIGHT_SCENE } from '../types';

export const getLightScene = scene => async dispatch => {
    const value = await openhabAPI.getItem(scene);
    return dispatch({
    type: SET_LIGHT_SCENE,
    payload: {
        scene,
        value
    }
  })
}

export const switchLightScene = scene => async dispatch => {
    const value = scene.active ? 'OFF' : 'ON';
    // if(value === 'ON');
    dispatch({
        type: SET_LIGHT_SCENE,
        payload: {
            scene,
            value
        }
    })
    openhabAPI.setItem(scene.id, value);
}