class Human {
    name: string;
    height: number;
    constructor(name: string, height: number) {
        this.name = name;
        this.height = height;
    }

    addHeight(height: number) {
        this.height += height;
    }

    displayHeight() {
        console.log(this.name + " is " + this.height + "cm");
    }
}

let nathan = new Human("Nathan", 180);

nathan.displayHeight();
nathan.addHeight(16);
nathan.displayHeight();

class Point {
    x: number;
    y: number;
    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

let p1 = new Point(3,4);
let p2 = new Point(7,2);

let p3 = p1.add(p2);

console.log(p3);

// Inheritance
class Point3D extends Point {
    z: number;
    constructor(x:number, y:number, z:number) {
        super(x,y);
        this.z = z;
    }
    add(point: Point3D) {
        let point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

// Tuple
let strNumTuple: [string, number, any?];

strNumTuple = ['hello', 3];

console.log(strNumTuple);

// Pure functions

let num = 123;
function toString(val) {
    return val.toString();
}

// Immutable Data
const data = Object.freeze([1,2,3,4,5,6]);

// Functions as arguments
const addEmoji = (val) => toString(val) + ' 😊';

const emojiData = data.map(addEmoji);
console.log(emojiData);

// Functions as return value
const appendEmoji = (fixed) => (dynamic) => fixed + dynamic;

const rain = appendEmoji('🌧️');
const sun = appendEmoji('🌞');

console.log(rain(' today'));
console.log(sun(' tomorrow'));