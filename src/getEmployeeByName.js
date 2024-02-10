const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  let workerList = {};
  employees.forEach((worker) => {
    if (worker.firstName === employeeName || worker.lastName === employeeName) {
      workerList = worker;
    }
  });
  return workerList;
};

module.exports = getEmployeeByName;
