import React from 'react';
import './Home.css';
import Header from '../../components/commons/Header/Header';
import Weather from '../../components/Weather/Weather';
import Lights from '../../components/Lights/Lights';

function Home() {
  return (
    <div className="Home">
      <Header title="Home"/>
      <div className="HomeContainer">
        <Weather />
        <Lights />
      </div>
    </div>
  );
}

export default Home;
