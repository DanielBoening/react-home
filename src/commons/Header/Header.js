import React from 'react';
import './Header.css'

function Header(props) {
  return (
    <div className="Header">
        <div className="Header-Title">{props.title}</div>
    </div>
  );
}

export default Header;
