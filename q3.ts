/* define interface for Monster objects */
interface Monster {
  
}

/* assign interface/type to the function definition properly */
const q3 = (mons: Monster[]):Monster[] => {
  //your code here

};

//test cases
const input1 = [
  { name: "Zombie", power: 10 },
  { name: "Slime", power: 2 },
  { name: "Dragon", power: 15 },
];

console.log(q3(input1));

export default q3;
