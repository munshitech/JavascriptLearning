var ShapeFactory = function () {
    this.getShape = function (shapeType) {
        var shape;
        switch (shapeType) {
            case "Square":
                shape = require('./Square');
                break;
            case "Triangle":
                shape = require('./Triangle');
                break;
            case "Rectangle":
                shape = require('./Rectangle');
                break;
            case "Circle":
            default:
                shape = require('./Circle');
                break;
        }
        return shape;
    }
};

module.exports = new ShapeFactory;