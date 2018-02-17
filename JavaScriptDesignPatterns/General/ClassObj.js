'use strict'

class Task{ 
    constructor(name){
        this.name = name;
        this.complete = false;
    }
    completed() {
        console.log("The task completed "+this.name);
        this.complete = true;
    };
    save(){
        console.log("Saving task "+this.name);
    };
}
var task1 = new Task("Creating new constructors ");
var task2 = new Task("Creating new Modules ");
var task3 = new Task("Creating new Singletons ");
var task4 = new Task("Creating new Prototypes ");

task1.completed();
task2.save();
task3.save();
task4.save();