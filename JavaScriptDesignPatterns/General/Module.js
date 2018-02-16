var repo = function(){
    var get = function (id) {
        console.log("Getting Task " + id);
        return {
            name: "Name Saim Anas from DB"
        }
    };
    var save = function (task) {
        console.log("Saving " + task.name + " to DB");
    }
    return {
        get: get,
        save: save
    }
}

module.exports = repo();