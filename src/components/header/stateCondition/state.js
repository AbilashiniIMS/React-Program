import React, { useState } from "react";
// import './button.css'
const State = (props) => {

    const [state, setState] = useState({
        type:'info',
        messge: 'Hello alert'
    });

    const [messgeClass, SetmessgeClass] = useState('succcess');

    const [show, Setshow] = useState(true);

    const updateState = () => {
        setState({
            messge: 'Message Updated'
        });

        show ?  Setshow(false) : Setshow(true); 
        messgeClass == 'succcess' ? SetmessgeClass('error') : SetmessgeClass('succcess');
    }

    return (
        <div>
            <button onClick={updateState} className={props.type}>Button</button>
            <br/>
            
            {/* {/ {show ? <p style={{'color':'red'}}>{state.messge}</p> : <p style={{'color':'blue'}}>{state.messge}</p>} /}
             */}
            <p className={messgeClass}>{state.messge}</p>

        </div>
    )
}

export default State;