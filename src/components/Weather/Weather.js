import React, { useEffect } from 'react';
import './Weather.css';
import Container from '../commons/Container/Container';
import weatherIcon from '../../assets/icons/weather/cloudy.png'
import iconWindspeed from '../../assets/icons/weather/wind.png'
import iconRainProbability from '../../assets/icons/weather/rain.png'
import { getWeatherNow } from '../../redux/actions/weather';
import { connect } from 'react-redux';


function renderForecastItem(weather) {
  

  return (
    <div className="WeatherForecastItem">
      <img className="WeatherNowInfoImage" src={weatherIcon} />
      <div className="WeatherForecastLabel">5 &deg; C</div>
      <div className="WeatherForecastLabel">Montag</div>
    </div>
  )
}

function renderForecast() {
  return (
    <div className="WeatherForecastContainer">
      {renderForecastItem()}
      {renderForecastItem()}
      {renderForecastItem()}
    </div>
  );
}

function renderWeatherNow(now) {
  return (
    <div className="WeatherNowContainer">
        <div>
          <img style={{ width: 128, height:128 }}  src={weatherIcon}/>
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
      props.getWeatherNow();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container>
        <div className="Weather">
          <div className="WeatherMainContainer">
            <div style={{fontSize: 64, fontWeight: 400}}>14:20</div>
            <h3>Donnerstag, 21.05.</h3> 
            <div style={{ paddingTop: 20}}>
              {renderWeatherNow(props.weather.now)}
            </div>
          </div>
          <div className="Seperator"/>
          {renderForecast()}
        </div>
    </Container>  
  );
}
const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  getWeatherNow: () => dispatch(getWeatherNow()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
