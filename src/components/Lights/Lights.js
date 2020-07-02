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
  // const [lights, setLights] = useState([{ 
  //   title: 'Hell', 
  //   id: 'Scene_Bright',
  //   active: false 
  // }, {
  //   title:'Dämmerung', 
  //   id: "Scene_Dusk",
  //   active: false
  // }, {
  //   title:'Abends',
  //   id: 'Scene_Evening',
  //   active: false
  // }, {
  //   title:'Chillen', 
  //   id: 'Scene_Chill',
  //   active: false
  // }]);
  // console.log('props', props);

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
 
  
  const changeLight = (light) => {
    // let _lights = [...lights];
    // const index = _lights.findIndex(l => l.title === light.title);
    // if(!light.active) {
    //   _lights = _lights.map(l => ({...l, active: false}));
    // }
    // light.active = !light.active;
    // _lights[index] = light;
    // setLights(_lights);
    openhabAPI.setItem(light.id, light.active ? 'ON' : 'OFF');
  }

  const switchOffAllLights = () => {
    // const _lights = lights.map(l => ({...l, active: false}));
    // setLights(_lights);
    openhabAPI.setItem('Wohnzimmer_Color', 'OFF');
  }
    return (
      <Container>
          <div className="Lights">
            <Header 
                title={'Licht'} 
                // active={props.lights.some(l => l.active === true)}
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