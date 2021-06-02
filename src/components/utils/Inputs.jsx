import React from 'react';
import './inputs.css'

const Inputs = (props) => {
    return (
        <input onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder} className={props.className}/>
    );
};

export default Inputs