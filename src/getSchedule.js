const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const days = Object.keys(hours);

const setWeek = () => {
  const week = {
    Tuesday: { officeHour: '', exhibition: [] },
    Wednesday: { officeHour: '', exhibition: [] },
    Thursday: { officeHour: '', exhibition: [] },
    Friday: { officeHour: '', exhibition: [] },
    Saturday: { officeHour: '', exhibition: [] },
    Sunday: { officeHour: '', exhibition: [] },
    Monday: { officeHour: '', exhibition: [] },
  };
  days.forEach((dayOfWeek) => {
    if (hours[dayOfWeek].open !== 0 && hours[dayOfWeek].close !== 0) {
      const daysHour = hours[dayOfWeek];
      week[dayOfWeek].officeHour = `Open from ${daysHour.open}am until ${daysHour.close}pm`;
    } else {
      week[dayOfWeek].officeHour = 'CLOSED';
    }
  });
  return week;
};

const exhibitionDays = (weekSchedule) => {
  let animalList = '';
  const exhibitionDay = weekSchedule;
  days.forEach((day) => {
    if (weekSchedule[day].officeHour === 'CLOSED') {
      exhibitionDay[day].exhibition = 'The zoo will be closed!';
    } else {
      exhibitionDay[day].exhibition = [];
    }
    species.forEach((animal) => {
      if (animal.availability.includes(day)) {
        animalList = animal.name;
        exhibitionDay[day].exhibition.push(animalList);
      }
    });
  });
  return exhibitionDay;
};
const getSchedule = (scheduleTarget) => {
  const standardZooSchedule = exhibitionDays(setWeek());
  let availableAnimals;
  const checkIsAnimal = species.find((animal) => animal.name === scheduleTarget);
  if (checkIsAnimal) {
    availableAnimals = checkIsAnimal.availability;
  } else if (days.includes(scheduleTarget)) {
    availableAnimals = { [scheduleTarget]: standardZooSchedule[scheduleTarget] };
  } else {
    availableAnimals = standardZooSchedule;
  }

  return availableAnimals;
};

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
