var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
        console.log("Welcome to vehicle");
    }
    Vehicle.prototype.getVehicle = function () {
        return "XXX";
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this;
        console.log("Hello world");
        _this = _super.call(this) || this;
        return _this;
    }
    return Car;
}(Vehicle));
