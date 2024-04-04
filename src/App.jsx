import React,{useState} from "react";
import Sqaure from "./Square";

function App(){

    const [count,setCount]= useState(Array(9).fill(null)); 
    // TURN OF X=TRUE;
    const [xIsNext, setXIsNext] = useState(true);
    
  // draw condition
    

    // disable button after clicking on it
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick= (index)=>{
      if (count[index] || isButtonDisabled[index] || calculateWinner(count)) {
        return; // Return if the button is disabled or already clicked.
      }

      // update the values in box
       console.log("index ",index);
       const updatedCount = [...count];
       updatedCount[index] = xIsNext?"X":"O";
       setCount(updatedCount);
       
    //    UPDATE X = FALSE
       setXIsNext(!xIsNext);
       
      //  disabling the button
       setButtonDisabled(true);
    };

    // restart/refresh the page
    function restart(){
      console.log("click");
      // refresh the page 
      window.location.reload();
    }
    
    // winner selection
    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (const element of lines) {
        const [a, b, c] = element;
        if (squares[a]!=null && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    // DECLARING WINNER
    const winner = calculateWinner(count);
      let status;
      if (winner) {
        status = 'Winner: ' + winner + ', Restart the Game';
      } else {
        status = 'Player ' + (xIsNext ? 'X Turn :' : 'O Turn :');
      }

    

    return (
        <div className="container text-center table">

        {/* restart button */}
          <h1>
          <button 
          onClick={()=>restart()}
          style={{backgroundColor:"silver",width:"200px",height:"50px",marginBottom:"20px",color:"black"}} >
            Restart the game
          </button>
          </h1>

          <div className="status">{status}</div>

        {/* add values x|o */}
          <div className="matrix">
            {count.map((value, index) => (
              <div className="cell" key={index}>
                <Sqaure onClick={() => handleClick(index)} disabled={isButtonDisabled}  value={value} />
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default App;