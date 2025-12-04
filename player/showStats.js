import { player_data } from "./player_data.js";
import { createPlayer } from "./createPlayer.js";
import addSolveTime from "./addSolveTime.js";
export default function showStats(player){
    let time=0
    let i =0
    for (; i<player['times'].length;i++){
        time += player.times[i]
    }
    let seconds_time = time*60
    console.log(
     {total_time:time, average_time:time/i});
}

