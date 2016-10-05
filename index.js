function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x},${this.y}`;
};

function Side(length) {
  this.length = length;
}

function Shape() {
  
}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position.x = x;
  this.position.y = y;
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return this.radius*2;
};

Circle.prototype.area = function() {
  return (Math.PI * this.radius^2)
};

Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius)
};

function Polygon(array) {
  this.sides = array;
  Shape.call(this);
};

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var tmp = this.sides.reduce(function(prev,curr){ return curr.length + prev ;},0);
  return tmp
};

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};

function Quadrilateral(a,b,c,d) {
  Polygon.call(this,[new Side(a), new Side(b), new Side(c), new Side(b)]);
};

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(a,b) {
  this.width = a;
  this.height = b;
  Quadrilateral.call(this,a,b,a,b);
};

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width*this.height;
};

function Square(a) {
  Rectangle.call(this,a,a);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var res = [];
  for(var m in this) {
      if(typeof this[m] == "function") {
        res.push(m);
      }
  }
  // console.log(res.join(', '));
  // var tmp = res.join(' , ');
  // return tmp;
};

var s = new Square(4)
var props = s.listProperties()
console.log(s);
function Triangle(a,b,c) {
  Polygon.call(this,[new Side(a), new Side(b), new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
