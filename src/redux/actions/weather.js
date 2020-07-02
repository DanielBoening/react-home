import openhabAPI from '../../api/openhabAPI';
import { SET_CURRENT_WEATHER, SET_FORECAST } from '../types';

export const getCurrentWeather = () => async dispatch => {
    const temperature = await openhabAPI.getItem('Temperature');
    const rain = await openhabAPI.getItem('Rain');
    const condition = await openhabAPI.getItem('weathernow_condition');
    const wind = await openhabAPI.getItem('Wind_Speed');

    return dispatch({
    type: SET_CURRENT_WEATHER,
    payload: {
        temperature,
        rain,
        condition,
        wind
    }
  })
}

export const getForecast = (day) => async dispatch => {
    const temperature = await openhabAPI.getItem(`Forecast_${day}_Temp_MinMax`);
    const condition = await openhabAPI.getItem(`Forecast_${day}_condition`);
    const date = await openhabAPI.getItem(`Forecast_${day}_ObservationTime`);

    return dispatch({
    type: SET_FORECAST,
    payload: {
        day,
        forecast: {
        temperature,
        condition,
        date
    }}
  })
}