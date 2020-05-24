import React from 'react';
import './Header.css'

function Header(props) {
  let IconActive = null;
  let IconDisabled = null;
  if(props.iconActive){
    IconActive = props.iconActive();
  }
  if(props.iconDisabled){
    IconDisabled = props.iconDisabled();
  }
  return (
    <div className="Header" onClick={props.onClick}>
        {IconActive && props.active && <IconActive className="HeaderIcon"/>}
        {IconDisabled && !props.active && <IconDisabled className="HeaderIcon"/>}
        <div className="Header-Title">{props.title}</div>
    </div>
  );
}

export default Header;
