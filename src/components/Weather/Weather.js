import React, { useEffect } from 'react';
import './Weather.css';
import Container from '../commons/Container/Container';
import iconWindspeed from '../../assets/icons/weather/wind.png'
import iconRainProbability from '../../assets/icons/weather/rain.png'
import { getCurrentWeather, getForecast } from '../../redux/actions/weather';
import { connect } from 'react-redux';
import moment from 'moment';

function renderForecastItem(forecast) {
  return (
    <div className="WeatherForecastItem">
      <img className="WeatherNowInfoImage" src={require('../../assets/icons/weather/'+forecast.condition+'.png')} />
      <div className="WeatherForecastLabel">{forecast.temperature} &deg; C</div>
      <div className="WeatherForecastLabel">{moment(forecast.date, 'YYYY-MM-DD HH:mm:ss').format('dddd')}</div>
    </div>
  )
}

function renderForecast(forecasts) {
  return (
    <div className="WeatherForecastContainer">
      {renderForecastItem(forecasts[1])}
      {renderForecastItem(forecasts[2])}
      {renderForecastItem(forecasts[3])}
    </div>
  );
}

function renderWeatherNow(now) {
  return (
    <div className="WeatherNowContainer">
        <div>
          <img style={{ width: 128, height:128 }}  src={require('../../assets/icons/weather/'+now.condition+'.png')}/>
          <div className="WeatherTempNowLabel" >{now.temperature} &deg; C</div>
        </div>

        <div className="WeatherNowInfoContainer" layout="column">
          <div className="WeatherNowInfoItem" >
            <img className="WeatherNowInfoImage"  src={iconWindspeed}/>
            <div className="WeatherNowInfoLabel">{now.wind} km/h</div>    
          </div>

          <div className="WeatherNowInfoItem">
            <img className="WeatherNowInfoImage"  src={iconRainProbability}/>
            <div className="WeatherNowInfoLabel">{now.rain} mm</div>    
          </div> 
        </div>
      </div>
  )
}


function Weather(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      props.getCurrentWeather();
      //refactor so days are only set in actions
      props.getForecast(1);
      props.getForecast(2);
      props.getForecast(3);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container>
        <div className="Weather">
          <div className="WeatherMainContainer">
            <div style={{fontSize: 64, fontWeight: 400}}>{moment().format('hh:mm')}</div>
            <h3>{moment().format('dddd, d. MMMM')}</h3> 
            <div style={{ paddingTop: 20}}>
              {renderWeatherNow(props.weather.now)}
            </div>
          </div>
          <div className="Seperator"/>
          {renderForecast(props.weather.forecasts)}
        </div>
    </Container>  
  );
}
const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  getCurrentWeather: () => dispatch(getCurrentWeather()),
  getForecast: day => dispatch(getForecast(day)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
