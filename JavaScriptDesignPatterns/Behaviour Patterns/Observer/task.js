var Task = function (data) {
    this.name = data.name;
    this.project = data.project;
    this.priority = data.priority;
    this.user = data.user;
    this.completed = data.completed;
}

Task.prototype.completed = function () {
    console.log("The task completed " + this.name);
    completed = true;
};

Task.prototype.save = function () {
    console.log("Saving task " + this.name);

};
module.exports = Task;
