import React from 'react';
import './Home.css';
import Header from '../../components/commons/Header/Header';
import Weather from '../../components/Weather/Weather';
import Lights from '../../components/Lights/Lights';
import ToDo from '../../components/ToDo/ToDo';

function Home() {
  return (
    <div className="Home">
      <Header title="Home"/>
      <div className="HomeContainer">
        <Weather />
        <Lights />
        <ToDo />
      </div>
    </div>
  );
}

export default Home;
