import readlineSync from 'readline-sync'
import input from 'analiza-sync'
// import {r2} from '../riddle-game/r2.js';
export default function askRiddle(riddleObj){
    while(true){
    console.log(riddleObj['name'], riddleObj['taskDescription']);
    if ('choices' in riddleObj){
        let index = readlineSync.keyInSelect(riddleObj.choices, 'What is the answer?');
        if (index == riddleObj.correctAnswer){
            return true
        }
    }
    else {
        let answer = input("Enter your answer")
        if (answer == riddleObj.correctAnswer){
            return true
        }
    }
}
}
// console.log(askRiddle(r2))