var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};
Object.prototype.printCustomValue = function (message) {
    console.log("Welcome Message for :- "+message);
};
//var Tast2 = "Testing String Salah";
module.exports.Task = Task;
module.exports.Task2 = "Testing string Salah";
module.exports.User = {
    name: "Anas",
    };
