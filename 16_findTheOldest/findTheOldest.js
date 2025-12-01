// const findTheOldest = function(people) {
//     ages = []
//     for (let i of people) {
//         ages.push([i.name, i.yearOfDeath - i.yearOfBirth])
//     }
//     oldest = ages.at(0).at(1)
//     for (let j of ages) {
//         if (j.at(1) > oldest) {
//             oldest === j.at(1)
//         }
//     }
//     return oldest
// };
const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
