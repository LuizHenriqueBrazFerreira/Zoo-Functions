const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const {species} = data;

  // Método antigo

  // const recoveredIds = [];
  // species.forEach((element) => {
  //   if (ids.includes(element.id)) {
  //     recoveredIds.push(element);
  //   }
  // });
  // return recoveredIds;
  
  // Método refatorado
  
  const returnedSpecies = species.filter((specie) => ids.includes(specie.id))
  return returnedSpecies

};

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';

console.log(getSpeciesByIds(lionId, tigersId, elephantsId));
module.exports = getSpeciesByIds;
