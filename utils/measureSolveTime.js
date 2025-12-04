
// import askRiddle from './askRiddle.js';
export default function measureSolveTime(fn){
    const startTime = performance.now()
    console.log("time start");
    
    fn()
    const endTime = performance.now()

    // console.log(`Call to doSomething took ${(endTime - startTime)/1000} milliseconds`)
   let time= Math.round((startTime-endTime)/1000);
    console.log(time);
    return time
    
}
// measureSolveTime(()=> askRiddle(r2))
