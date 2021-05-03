var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, height) {
        this.name = name;
        this.height = height;
    }
    Human.prototype.addHeight = function (height) {
        this.height += height;
    };
    Human.prototype.displayHeight = function () {
        console.log(this.name + " is " + this.height + "cm");
    };
    return Human;
}());
var nathan = new Human("Nathan", 180);
nathan.displayHeight();
nathan.addHeight(16);
nathan.displayHeight();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(3, 4);
var p2 = new Point(7, 2);
var p3 = p1.add(p2);
console.log(p3);
// Inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Point3D;
}(Point));
// Tuple
var strNumTuple;
strNumTuple = ['hello', 3];
console.log(strNumTuple);
// Pure functions
var num = 123;
function toString(val) {
    return val.toString();
}
// Immutable Data
var data = Object.freeze([1, 2, 3, 4, 5, 6]);
// Functions as arguments
var addEmoji = function (val) { return toString(val) + ' 😊'; };
var emojiData = data.map(addEmoji);
console.log(emojiData);
// Functions as return value
var appendEmoji = function (fixed) { return function (dynamic) { return fixed + dynamic; }; };
var rain = appendEmoji('🌧️');
var sun = appendEmoji('🌞');
console.log(rain(' today'));
console.log(sun(' tomorrow'));
