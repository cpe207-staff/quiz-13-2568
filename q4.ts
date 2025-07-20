/* define interface for Mafia objects */
interface Mafia {
  id: number;
  power: number;
}
/* assign interface/type to the function definition properly */
const q4 = (mafias: Mafia[], fights: number[]) => {
  /* Your code here */
  let winners: Mafia[] = [];
  for (let i = 0; i < fights.length; i += 2) {
    // console.log(fights[i]+" vs. "+fights[i+1])

    if (mafias[fights[i] - 1].power > mafias[fights[i + 1] - 1].power) {
      mafias[fights[i] - 1].power += mafias[fights[i + 1] - 1].power;
      // console.log(mafias[ fights[i]-1 ]);
      // winners.push(mafias[ fights[i]-1 ]);
    } else if (mafias[fights[i] - 1].power < mafias[fights[i + 1] - 1].power) {
      mafias[fights[i + 1] - 1].power += mafias[fights[i] - 1].power;
      // console.log(mafias[ fights[i+1]-1 ]);
      // winners.push(mafias[ fights[i+1]-1 ]);
    }
    // console.log("")
  }
  return mafias.reduce((prev, curr) => (prev.power > curr.power ? prev : curr));
};

//Test case
const mafias = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];
const fights = [5, 2, 4, 3, 1, 3];
console.log(q4(mafias, fights));

export default q4;
