import { useState } from "react";
import { handleClick } from "../Game";
import { player1 } from "../Player";

const Square = () => {
    

    const cells = [
        {text: "", id : 1},
        {text: "", id : 2},
        {text: "", id : 3},
        {text: "", id : 4},
        {text: "", id : 5},
        {text: "", id : 6},
        {text: "", id : 7},
        {text: "", id : 8},
        {text: "", id : 9}
    ]

    const [gameCell, setGameCell] = useState(cells);

    const [currentTurn, setCurrentTurn] = useState(player1);


    
    //props buttons different values/links
    return (  
        <section className="game-cells">
            {gameCell.map((cell) => (
                <div className="cell" key={cell.id} onClick={() => handleClick(cell.id, setGameCell, currentTurn , setCurrentTurn)}>{cell.text}</div>
            ))}
        </section>
    );
}
 
export default Square;