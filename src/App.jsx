import React from "react";
import Sqaure from "./Square";




function App(){

    const [count,setCount]= React.useState(null);  
    
    

    return(
    <div class="container text-center table" >

        <div class="matrix">
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        <div class="cell"><Sqaure value={count}/></div>
        </div>

    </div>
    )
}
export default App;