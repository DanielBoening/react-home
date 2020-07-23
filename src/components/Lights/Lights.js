import React, {useState, useEffect} from 'react';
import './Lights.css';
import Container from '../commons/Container/Container';
import Cell from '../commons/Cell/Cell';
import Header from '../commons/Header/Header';
import {ReactComponent as IconLightActive} from './../../assets/icons/lights/light_icon_active.svg';
import {ReactComponent as IconLightDisabled} from './../../assets/icons/lights/light_icon_disabled.svg';
import openhabAPI from '../../api/openhabAPI';
import { getLightScene, switchLightScene } from '../../redux/actions/lights';
import { connect } from 'react-redux';

function Lights(props) {

  useEffect(() => {
    const interval = setInterval(() => {
      props.getLightScene('Scene_Bright')
      props.getLightScene('Scene_Dusk')
      props.getLightScene('Scene_Evening')
      props.getLightScene('Scene_Chill')
      props.getLightScene('Wohnzimmer_Color')
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const switchOffAllLights = () => {
    openhabAPI.setItem('Wohnzimmer_Color', 'OFF');
  }
  const hasAciveLight = () => {
    if(!props.lights){
      return false;
    }
    return props.lights.bright.active
        || props.lights.dusk.active
        || props.lights.evening.active
        || props.lights.chill.active;
  }
    return (
      <Container>
          <div className="Lights">
            <Header 
                title={'Licht'} 
                active={props.lights.allLights.active}
                iconActive={() => IconLightActive} 
                iconDisabled={() => IconLightDisabled}
                onClick={switchOffAllLights}
                />
            <Cell item={props.lights.bright} onClick={(light) => props.switchLightScene(light)}/>
            <Cell item={props.lights.dusk} onClick={(light) => props.switchLightScene(light)}/>
            <Cell item={props.lights.evening} onClick={(light) => props.switchLightScene(light)}/>
            <Cell item={props.lights.chill} onClick={(light) => props.switchLightScene(light)}/>
          </div>
      </Container>  
    );
  }
  const mapStateToProps = state => ({
    lights: state.lights
  })
  
  const mapDispatchToProps = dispatch => ({
    getLightScene: scene => dispatch(getLightScene(scene)),
    switchLightScene: scene => dispatch(switchLightScene(scene))
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Lights);