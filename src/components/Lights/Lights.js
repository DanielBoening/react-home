import React from 'react';
import './Lights.css';
import Container from '../commons/Container/Container';
import Cell from '../commons/Cell/Cell';
import Header from '../commons/Header/Header';
import {ReactComponent as IconLightActive} from './../../assets/icons/lights/light_icon_active.svg';
import {ReactComponent as IconLightDisabled} from './../../assets/icons/lights/light_icon_disabled.svg';

const lightmodes = ['Hell', 'Dämmerung', 'Abends', 'Chillen'];
function Lights(props) {
    return (
      <Container>
          <div className="Lights">
            <Header 
                title={'Licht'} 
                active={false}
                iconActive={() => IconLightActive} 
                iconDisabled={() => IconLightDisabled} 
                />
            {lightmodes.map(l => <Cell name={l} active={false}/>)}
          </div>
      </Container>  
    );
  }
  
  export default Lights;