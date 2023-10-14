import React from "react";

function Sqaure(props){

    return <button  className="square" onClick={props.onClick}>{props.value}</button>
}

export default Sqaure;

