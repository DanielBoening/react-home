import openhabAPI from '../../api/openhabAPI';
import { SET_WEATHER_NOW } from '../types';

export const getWeatherNow = () => async dispatch => {
    const temperature = await openhabAPI.getItem('Temperature');
    const rain = await openhabAPI.getItem('Rain');
    const icon = await openhabAPI.getItem('weathernow_condition');
    const wind = await openhabAPI.getItem('Wind_Speed');

    return dispatch({
    type: SET_WEATHER_NOW,
    payload: {
        temperature,
        rain,
        icon,
        wind
    }
  })
}