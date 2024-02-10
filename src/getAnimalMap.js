const data = require('../data/zoo_data');

const { species } = data;
const regionAnimalsZoo = () => {
  const region = {};
  species.forEach((specie) => {
    const { location, name } = specie;
    if (!region[location]) {
      region[location] = [];
    }
    region[location].push(name);
  });
  return region;
};
// console.log(regionAnimalsZoo());
const regions = Object.keys(regionAnimalsZoo());
const animalsRegion = Object.values(regionAnimalsZoo());
const fullRegionAnimals = (alphabeticOrder, sex = 'male/female') => {
  const region = {};
  regions.forEach((loc, index) => {
    const animalRegion = animalsRegion[index].map((animalName) => {
      const specie = species.find((animal) => animal.name === animalName);
      const filterAnimal = specie.residents.filter((animal) => {
        if (sex === 'male/female') return animal;
        return animal.sex === sex;
      }).map((animal) => animal.name);
      if (alphabeticOrder) {
        filterAnimal.sort();
      }
      return { [animalName]: filterAnimal };
    });
    region[loc] = animalRegion;
  });
  return region;
};
const getAnimalMap = (options) => {
  let animalMap = regionAnimalsZoo();
  if (!options) {
    return animalMap;
  }
  if (options.includeNames) {
    animalMap = fullRegionAnimals(options.sorted, options.sex);
  }
  return animalMap;
};
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ sex: 'male' }));
// console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'male' }));

module.exports = getAnimalMap;
