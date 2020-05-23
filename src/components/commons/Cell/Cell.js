import React from 'react';
import './Cell.css';

function Cell(props) {
    return (
        <div className="Cell" style={{color: props.active ? '#FFA500' : '#fff'}}>
            {props.name}
        </div>
    );
  }
  
  export default Cell;