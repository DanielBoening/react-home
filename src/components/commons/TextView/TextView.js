import React from 'react';
import './TextView.css';

export default function TextView(props) {
    return (
        <div className="TextView">
            {props.placeholder && !props.value && <div className="TextViewPlaceholder">{props.placeholder}</div>}
            <input className="TextViewInput" onChange={(event) => props.onChange(event.target.value)} value={props.value}/>
        </div>
    )
}