var Task = function (name) {
    this.name= name;
    this.complete=false;
}

Task.prototype.completed = function() {
        console.log("The task completed "+this.name);
        this.complete=true;
};

Task.prototype.save = function(){
    console.log("Saving task " + this.name);
};


var UrgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype);


UrgentTask.getInstance = function (name, priority) {
    if (this.ut) {
        this.ut = new UrgentTask(name, priority)
    }
    return ut;
}

UrgentTask.prototype.test = function () {
    console.log("Hi I am test method only in " + this.name);
}
UrgentTask.prototype.notify = function () {
    console.log("Hi I am notifing for " + this.name);
}
UrgentTask.prototype.save = function () {
    console.log("I am in urget Task and going to call supper save method.");
    this.notify();
    Task.prototype.save.call(this);
}

var myTask = new Task("My Task");
myTask.completed();
myTask.save();
//myTask.test();

var ut = UrgentTask.getInstance("This is urgent Task", 4);

console.log(ut);
//ut.completed();
//ut.save();

var ut2 = UrgentTask.getInstance("This is 2 urgent Task", 3);

if (ut === ut2) {
    console.log("Yes! they are same");
}
else {
    console.log("No! they are not same");
}