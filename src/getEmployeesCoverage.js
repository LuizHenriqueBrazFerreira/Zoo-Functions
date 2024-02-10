const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const workerInformation = (worker) => {
  const infoAboutWorker = {
    id: worker.id,
    fullName: `${worker.firstName} ${worker.lastName}`,
    species: worker.responsibleFor.map((animalId) => {
      const animal = species.find((animals) => animals.id === animalId);
      return animal.name;
    }),
    locations: worker.responsibleFor.map((animalId) => {
      const animal = species.find((animals) => animals.id === animalId);
      return animal.location;
    }),
  };
  return infoAboutWorker;
};

const getEmployeesCoverage = (object) => {
  if (!object) return employees.map((worker) => workerInformation(worker));
  const functionary = employees.find((worker) =>
    [worker.firstName, worker.lastName].includes(object.name)
    || [worker.id].includes(object.id));
  if (functionary) return workerInformation(functionary);
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
