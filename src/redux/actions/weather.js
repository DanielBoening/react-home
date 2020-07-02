import openhabAPI from '../../api/openhabAPI';
import { SET_CURRENT_WEATHER } from '../types';

export const getCurrentWeather = () => async dispatch => {
    const temperature = await openhabAPI.getItem('Temperature');
    const rain = await openhabAPI.getItem('Rain');
    const icon = await openhabAPI.getItem('weathernow_condition');
    const wind = await openhabAPI.getItem('Wind_Speed');

    return dispatch({
    type: SET_CURRENT_WEATHER,
    payload: {
        temperature,
        rain,
        icon,
        wind
    }
  })
}