import React from 'react';
import './Header.css'

function Header(props) {
  let IconActive = null;
  let IconDisabled = null;
  let IconAction = null;
  if(props.iconActive){
    IconActive = props.iconActive();
  }
  if(props.iconDisabled){
    IconDisabled = props.iconDisabled();
  }
  if(props.iconAction){
    IconAction = props.iconAction();
  }
  return (
    <div className="Header" onClick={props.onClick}>
      <div className="HeaderContainer">
        {IconActive && props.active && <IconActive className="HeaderIcon"/>}
        {IconDisabled && !props.active && <IconDisabled className="HeaderIcon"/>}
        <div className="Header-Title">{props.title}</div>
        </div>
        {IconAction && <IconAction className="HeaderIcon" onClick={() => props.action ? props.action() : null}/>}
    </div>
  );
}

export default Header;
