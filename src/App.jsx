import React,{useState} from "react";
import Sqaure from "./Square";

function App(){

    const [count,setCount]= useState(Array(9).fill(null)); 
    // TURN OF X=TRUE;
    const [xIsNext, setXIsNext] = useState(true);
    
    const handleClick= (index)=>{
       console.log("index ",index);
       const updatedCount = [...count];
       updatedCount[index] = xIsNext?"X":"O";
       setCount(updatedCount);
    //    UPDATE X = FALSE
       setXIsNext(!xIsNext);
    };
    
    
    return (
        <div className="container text-center table">
          <div className="matrix">
            {count.map((value, index) => (
              <div className="cell" key={index}>
                <Sqaure onClick={() => handleClick(index)} value={value} />
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default App;