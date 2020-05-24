import React, {useState} from 'react';
import './Lights.css';
import Container from '../commons/Container/Container';
import Cell from '../commons/Cell/Cell';
import Header from '../commons/Header/Header';
import {ReactComponent as IconLightActive} from './../../assets/icons/lights/light_icon_active.svg';
import {ReactComponent as IconLightDisabled} from './../../assets/icons/lights/light_icon_disabled.svg';

function Lights(props) {
  const [lights, setLights] = useState([{ title: 'Hell', active: false }, {title:'Dämmerung', active: false}, {title:'Abends', active: false}, {title:'Chillen', active: false}]);
  const changeLight = (light) => {
    let _lights = [...lights];
    const index = _lights.findIndex(l => l.title === light.title);
    if(!light.active) {
      _lights = _lights.map(l => ({...l, active: false}));
    }
    light.active = !light.active;
    _lights[index] = light;
    setLights(_lights);
  }
  const switchOffAllLights = () => {
    const _lights = lights.map(l => ({...l, active: false}));
    setLights(_lights);
  }
    return (
      <Container>
          <div className="Lights">
            <Header 
                title={'Licht'} 
                active={lights.some(l => l.active === true)}
                iconActive={() => IconLightActive} 
                iconDisabled={() => IconLightDisabled}
                onClick={switchOffAllLights}
                />
            {lights.map(l => <Cell item={l} active={false} onClick={(light) => changeLight(light)}/>)}
          </div>
      </Container>  
    );
  }
  
  export default Lights;