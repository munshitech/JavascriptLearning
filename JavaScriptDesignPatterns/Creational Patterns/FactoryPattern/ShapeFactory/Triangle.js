var Triangle = function () {
    console.log("Triangle: I am been created everytime. Please use cache function");
    var draw = function () {
        console.log("I am going to draw Triangle");
    };
    return {
        draw: draw
    }
}

module.exports = Triangle();
