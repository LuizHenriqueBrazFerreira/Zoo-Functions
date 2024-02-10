const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  const worker = employees.find((functionay) => functionay.id === id);
  const workerFirstAnimal = worker.responsibleFor[0];
  const findSpecie = species.find((animal) => animal.id === workerFirstAnimal);
  const getResidents = findSpecie.residents;
  const getOlderAnimal = getResidents.sort((a, b) => b.age - a.age)[0];
  const nameSexAge = Object.values(getOlderAnimal);
  return nameSexAge;
};

module.exports = getOldestFromFirstSpecies;
