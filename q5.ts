/* define interface for Hero and Item objects */
/* Your code here */

/* assign interface/type to the function definition properly */
const q5 = (hero, shopItems) => {
  /* Your code here */
};

const hero1 = {
  items: ["sword", "potion"],
  gold: 100,
};

const hero2 = {
  items: ["knife"],
  gold: 100,
};

const shopItems1 = [
  {
    item: "armor",
    price: 10,
  },
  {
    item: "boot",
    price: 5,
  },
  {
    item: "gun",
    price: 50,
  },
];

const shopItems2 = [
  {
    item: "helmet",
    price: 70,
  },
  {
    item: "boot",
    price: 40,
  },
  {
    item: "magic wand",
    price: 20,
  },
];

console.log(q5(hero1, shopItems1));
console.log(q5(hero2, shopItems2));

export default q5;
