var Square = function () {
    console.log("Square: I am been created everytime. Please use cache function");
    var draw = function () {
        console.log("I am going to draw Square");
    };
    return {
        draw: draw
    }
}
module.exports = Square();