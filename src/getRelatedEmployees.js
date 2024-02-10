const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

const isManager = (id) => {
  const checkManager = managers.some((manager) => manager === id);
  return checkManager;
};

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
const getRelatedEmployees = (managerId) => {
  const functionary = data.employees;
  let supervisedWorkers = [];
  if (isManager(managerId)) {
    supervisedWorkers = functionary.filter((leader) => leader.managers.includes(managerId))
      .map((workers) => `${workers.firstName} ${workers.lastName}`);
    return supervisedWorkers;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
