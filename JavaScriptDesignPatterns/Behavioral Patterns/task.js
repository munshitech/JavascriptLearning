var Module = require('./Module');
var Task = function (data) {
    this.name = data.name;
    this.complete = false;
}

Task.prototype.completed = function () {
    console.log("The task completed " + this.name);
    complete = true;
};

Task.prototype.save = function () {
    console.log("Saving task " + this.name);
    Module.save(this);
};


module.exports = Task;