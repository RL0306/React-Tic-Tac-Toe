import { useState } from "react";
import { player1, player2 } from "./Player";
import { winningCombos } from "./WinningCombinations"



export const handleClick = (id, setGameCell, currentTurn, setCurrentTurn) => {
    
    console.log(currentTurn);

    setGameCell(prevState => {
        const tempState = [...prevState];

        tempState[id - 1].text = currentTurn.symbol;
        return tempState;
    });

    if(currentTurn === player1){
        setCurrentTurn(player2);
    } else {
        setCurrentTurn(player1);
    }
}


// const checkForWinner = (player) => {
//     winningCombos.forEach(combo => {
//         const check = combo.every(item => player.turns.includes(item));
//         if(check){
//             return true;
//         }
//     })
// }


