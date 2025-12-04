import { player_data } from "./player_data.js";
import { createPlayer } from "./createPlayer.js";
import addSolveTime from "./addSolveTime.js";
export default function showStata(player){
    let time=0
    let i =0
    for (; i<player['times'].length;i++){
        time += player.times[i]
    }
    let seconds_time = time*60
    return {total_time:seconds_time, average_time:seconds_time/i}
}

// createPlayer("moshe")
// addSolveTime(player_data,3.32)
// addSolveTime(player_data,9.23)
// console.log(showStata(player_data));
