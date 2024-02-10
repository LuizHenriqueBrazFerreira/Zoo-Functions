const data = require('../data/zoo_data');

const { species } = data;
let animalsList = {};

const countAnimals = (animal) => {
  if (typeof animal === 'object') {
    const animalSpecies = species.find((findSpecie) => findSpecie.name === animal.species);
    animalsList = animalSpecies.residents.length;
    if (animal.sex) {
      const sexFilter = animalSpecies.residents.filter((sexType) => sexType.sex === animal.sex);
      animalsList = sexFilter.length;
    }
  } species.forEach((specie) => {
    animalsList[specie.name] = specie.residents.length;
  });
  return animalsList;
};
// console.log(countAnimals('penguins'));
module.exports = countAnimals;
