import { player_data } from "./player_data.js";
export function createPlayer(name){
    player_data.name = name
    // player_data.times=[]
    return player_data
}

// console.log(createPlayer("david"));
