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