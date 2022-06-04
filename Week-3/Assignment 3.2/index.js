// program to demonstrate call, apply and bind function 
 
var p1 = {                      // create p1 object and initize the name,age,college values                   
  name: "bakkesh",
  age: null,
  college: null,
  set: function (a, b) {        // this set function used to set  age & college values to properities
    this.age = a;   
    this.college = b;
  }
}
var p2 = {                      // create p2 object and initize the name,age,college values
  name: "john",
  age: null,
  college: null,
}
p1.set.call(p1, 20, 'biet');        // invoke the set method of p1 object with paramaters and set the values to p1 object  properities using CALL() Method 
console.log(p1.age + p1.college);   // output (20, biet)
p1.set.call(p2, 18, 'harvad');      // invoke the set method of p1 object with paramaters and set the values to p2 object properities using CALL() Method
console.log(p2.age + p2.college);   // output (18, harvad)

p1.set.apply(p1, [25, 'ubdt']);     // invoke the set method of p1 object with passing paramaters as an array using APPLY() Method.
console.log(p1.age + p1.college);   // output (25, ubdt) 
p1.set.apply(p2, [30, 'standford']);// invoke the set method of p2 object with passing paramaters as an array using APPLY() Method.
console.log(p2.age + p2.college);   // output (30, college )

var bindfunction1 = p1.set.bind(p1, 30, 'manipal'); // invoke the set method of  p1 object  and set the values to p1 object with passing paramaters using BIND() Method.
bindfunction1();                                     // Bind() method returns a function that could call a later point. 
console.log(p1.age + p1.college);               // output (30, manipal)
var bindfunction2 = p1.set.bind(p2, 35, 'Vtu');   // invoke the set method of p1 object and set the values to p2 object with passing paramaters using BIND() Method.

// Output 
// 20 biet
// 18 harvad
// 25 ubdt
// 30 standford
// 30 manipal 