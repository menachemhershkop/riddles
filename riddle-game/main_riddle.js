export  function riidle(id, name, taskDesccription, correctAnswer){
    this.id = id
    this.name= name
    this.taskDesccription = taskDesccription
    this.correctAnswer = correctAnswer
    
    return{id:this.id, name:this.name, taskDesccription:this.taskDesccription, correctAnswer:this.correctAnswer}

}

export  function riidle_option(id, name, taskDesccription,choice, correctAnswer){
    this.id = id
    this.name= name
    this.taskDesccription = taskDesccription
    // this.choice = readlineSync.keyInSelect(choice, 'Which answer?')
    this.choice= choice
    this.correctAnswer = correctAnswer
    return{id:this.id, name:this.name, taskDesccription:this.taskDesccription, choice:this.choice correctAnswer:this.correctAnswer}

}

console.log(new riidle(1,"dani", "1+2", "3"));
console.log(new riidle_option(2,"what","sdds",[1,2,3,4]),"2");
