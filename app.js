import input from "analiza-sync";
import {riddels} from './riddle-game/index_ridle.js';
import { createPlayer } from "./player/createPlayer.js";
import { player_data } from "./player/player_data.js";
import measureSolveTime from "./utils/measureSolveTime.js";
import askRiddle from './utils/askRiddle.js';
import addSolveTime from "./player/addSolveTime.js";
import showStats from "./player/showStats.js";
function main(){
    console.log("welcome to the riddle game");
    const player_name = input("Enter your name: ")
    createPlayer(player_name)
    console.log("welcome", player_data);
    // console.log(riddels);
    
    for (let i=0; i<riddels.length;i++){
       let time = measureSolveTime(()=>
             askRiddle(riddels[i]))
        addSolveTime(player_data, time)
        
    }
    // console.log(player_data);
    console.log("wonderfull", player_name);
    showStats(player_data)
    
    
}

       
main()