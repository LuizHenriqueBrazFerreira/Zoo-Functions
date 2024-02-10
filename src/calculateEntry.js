const data = require('../data/zoo_data');

const { prices } = data; // método desconstructing ensinado por luquinhas no cículo que ocorreu dia 11/08/2023

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const checkAge = (entrants) => {
  const personList = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age < 18) {
      personList.child += 1;
    } else if (person.age >= 50) {
      personList.senior += 1;
    } else {
      personList.adult += 1;
    }
  });
  return personList;
};

const countEntrants = (entrants) => {
  let expectedPersons = {};
  if (entrants) {
    expectedPersons = checkAge(entrants);
  }
  return expectedPersons;
};

const calculateEntry = (entrants) => {
  const peoples = countEntrants(entrants);
  const priceChild = prices.child;
  const pricesAdult = prices.adult;
  const pricesSenior = prices.senior;
  const countChilds = peoples.child;
  const countAdult = peoples.adult;
  const countSenior = peoples.senior;
  let bill = 0;
  if (entrants) {
    bill = countChilds * priceChild + countAdult * pricesAdult + countSenior * pricesSenior;
    return bill;
  }
  return bill;
};

console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
