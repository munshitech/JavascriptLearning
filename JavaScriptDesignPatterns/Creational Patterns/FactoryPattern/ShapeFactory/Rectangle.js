var Rectangle = function () {
    console.log("Rectangle: I am been created everytime. Please use cache function");
    var draw = function () {
        console.log("I am going to draw Rectangle");
    };
    return {
        draw: draw
    }
}
module.exports = Rectangle();
