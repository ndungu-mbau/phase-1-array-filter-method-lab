// Code your solution here
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function findMatching(drivers, name) {
  return drivers.filter((driver) => {
    return driver.toLowerCase().includes(name.toLowerCase());
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => {
    return driver.toLowerCase().startsWith(letters.toLowerCase());
  });
}

function matchName(drivers, name) {
  return drivers.filter((driver) => {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

console.log(matchName(drivers, "Bobby"));
