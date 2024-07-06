// follow-allong in part1: java_script

// VARIABLES
console.log(">> VARIABLES");
const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);
// x = 4; // not possible!

// ARRAYS
console.log("\n>> ARRAYS");
const t = [1, -1, 3]; // ARRAYS are OBJECTS
console.log(t.length);
t.push(5);

console.log(t.length);
console.log(t[1]);

t.forEach((value) => {
  console.log(value);
});

console.log("\n>>> Functional programming methods");
const t2 = [1, -1, 3];
const t3 = t2.concat(5);
console.log("t:", t);
console.log("t2:", t2);
console.log("t3:", t3);

const t4 = [1, 2, 3];
const m1 = t4.map((value) => value * 2);
console.log("t4:", t4, "m1:", m1);
const m2 = t4.map((value) => "<li>" + value + "</li>");
console.log("m2:", m2);

const t5 = [1, 2, 3, 34, 5];
const [first, second, ...rest] = t5;
console.log("t5:", t5);
console.log("first:", first);
console.log("second:", second);
console.log("rest:", rest);

console.log("\n>> Objects");
const obj1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};

const obj2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const obj3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};

const fieldName = "age";

console.log("obj1.name:", obj1.name);
console.log("obj2.level:", obj2.level);
console.log("obj3.name.first:", obj3.name.last);
console.log("obj1[fieldName]:", obj1[fieldName]);

obj1.address = "Helsinki";
obj1["secret number"] = 21235;
console.log("obj1:", obj1);

console.log("obj1 keys", Object.keys(obj1));
console.log("obj1 values", Object.values(obj1));

console.log(">> Functions");
const sum = (p1, p2) => {
  console.log("inside of sum function");
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

console.log("sum of 5 and -2:", sum(5, -2));

const square = (p) => {
  console.log("inside of square function");
  console.log(p);
  return p * p;
};
const square2 = (p) => p * p; // even shorter!
const t6 = [1, 2, 5];
// console.log(t6.map(square));

console.log(t6.map(sum)); // WORKED TOO WOOOW

// another way of defining functions
function product(a, b) {
  return a * b;
}
const result1 = product(2, 6);
console.log("result1:", result1);

const average = function (a, b) {
  return (a + b) / 2;
};

const result2 = average(2, 5);
console.log("result2:", result2);
