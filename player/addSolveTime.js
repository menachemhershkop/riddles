import { player_data } from "./player_data.js";
import { createPlayer } from "./createPlayer.js";
export default function addSolveTime(player, seconds){
    player["times"].push(seconds)
    return player
}
// createPlayer("moshe")
// console.log(addSolveTime(player_data,3));

