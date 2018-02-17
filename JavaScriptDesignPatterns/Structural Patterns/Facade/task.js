var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving Task: ' + task.name);
        }
    }
}();

var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {
        TaskService.complete(task);
        if (task.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}();

var myTask2 = new Task({
    name: 'MyTask2',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});
/*TaskService.complete(myTask2);
if (myTask2.completed == true) {
    TaskService.setCompleteDate(myTask2);
    TaskService.notifyCompletion(myTask2, myTask2.user);
    TaskService.save(myTask2);
}
*/
//console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask2);

console.log(myTask2);
//

var myTask3 = new Task({
    name: 'MyTask3',
    priority: 1,
    project: 'Courses3',
    user: 'Jon3',
    completed: false
});
/*TaskService.complete(myTask3);
if (myTask3.completed == true) {
    TaskService.setCompleteDate(myTask3);
    TaskService.notifyCompletion(myTask3, myTask3.user);
    TaskService.save(myTask3);
}*/
TaskServiceWrapper.completeAndNotify(myTask3);
console.log(myTask3);