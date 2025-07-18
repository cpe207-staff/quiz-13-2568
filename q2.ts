/* define interface for Person objects */
interface Person {
  
}

/* assign interface/type to the function definition properly */
const q2 = (person) => {
  //your code here

};

//test cases
const input1 = { name: "John", age: 59 };
const input2 = { name: "Jane", age: 18 };

console.log(q2(input1));
console.log(q2(input2));

export default q2;
