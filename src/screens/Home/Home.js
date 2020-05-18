import React from 'react';
import './Home.css';
import Header from '../../components/commons/Header/Header';
import Weather from '../../components/Weather/Weather';

function Home() {
  return (
    <div className="Home">
      <Header title="Home"/>
      <Weather />
    </div>
  );
}

export default Home;
