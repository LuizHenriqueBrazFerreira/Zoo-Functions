const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  let test = false; // se fizer com for ... of... comentar o test para nao ter risco de erro
  const typeAnimal = data.species;

  // teste feito com for ... of (funcionou);
  //   for (const animalName of typeAnimal) {
  //     if (animalName.name === animal && animalName.residents.every((year) => year.age > age)) {
  //       return true;
  //     }
  //   }
  //   return false;

  // teste feito com forEach, deu trabalho...
  typeAnimal.forEach((animalName) => {
    if (animalName.name === animal && animalName.residents.every((year) => year.age > age)) {
      test = true;
    }
  });
  return test;
};

module.exports = getAnimalsOlderThan;
