var Task= require('./Task');
var Module = require('./Module');
var task1 = new Task(Module.get(1));
//var task1 = new Task("Creating new Modules1 ");
var task2 = new Task({ name: "Creating new Modules2 " });
var task3 = new Task({ name: "Creating new Singletons " });
var task4 = new Task({ name: "Creating new Prototypes " });
task1.completed();
task2.save();
task3.save();
task4.save();

