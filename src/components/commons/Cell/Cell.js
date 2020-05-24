import React from 'react';
import './Cell.css';

function Cell(props) {
    return (
        <div className="Cell" style={{color: props.item.active ? '#FFA500' : '#fff'}} onClick={() => props.onClick(props.item)}>
            {props.item.title}
        </div>
    );
  }
  
  export default Cell;