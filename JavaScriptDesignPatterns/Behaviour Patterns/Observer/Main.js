var Task = require('./task');
var NotificationService = function () {
    var message = "Notification ";
    this.upate = function (task) {
        console.log(message + task.user +" for task "+ task.name);
    }
}
var LoggingService = function () {
    var message = "Logging ";
    this.upate = function (task) {
        console.log(message + task.user +" for task "+ task.name);
    }
}
var AuditingService = function () {
    var message = "Auditing ";
    this.upate = function (task) {
        console.log(message + task.user + " for task " + task.name);
    }
}
var ObserverCollection = function () {
    this.observerList = [];
}
ObserverCollection.prototype.add = function (observer) {
    return this.observerList.push(observer);
}
ObserverCollection.prototype.get = function (index) {
    if (index != -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}
ObserverCollection.prototype.count = function () {
    return this.observerList.length;
}
var Observerable = function (data) {
    Task.call(this, data);
    this.observerCollection = new ObserverCollection();
}
Observerable.prototype.addObserver = function (observer) {
    this.observerCollection.add(observer);
}
Observerable.prototype.notify = function (context) {
    var collectionLength = this.observerCollection.count();
    for (var i = 0; i < collectionLength; i++) {
        this.observerCollection.get(i)(context);
    }
}

Observerable.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this)
}

var ntService = new NotificationService();
var lgService = new LoggingService();
var adService = new AuditingService();

var task = new Observerable({ name: "This is Salah's Task", user: "Salahuddin" });
task.addObserver(ntService.upate);
task.addObserver(lgService.upate);
task.addObserver(adService.upate);
task.save();