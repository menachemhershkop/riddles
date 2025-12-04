// import {r2} from '../riddle-game/r2.js';
// import askRiddle from './askRiddle.js';
export default function measureSolveTime(fn){
    const startTime = performance.now()
    console.log("time start");
    
    fn()
    const endTime = performance.now()

    // console.log(`Call to doSomething took ${(endTime - startTime)/1000} milliseconds`)
    console.log(Math.round((startTime-endTime)/1000));
    
}
// measureSolveTime(()=> askRiddle(r2))
