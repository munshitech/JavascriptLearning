var Circle = function () {
    console.log("Circle: I am been created everytime. Please use cache function");
    var draw = function () {
        console.log("I am going to draw Circle");
    };
    return {
        draw: draw
    }
}
module.exports = Circle();