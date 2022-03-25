const findTheOldest = function(people) {

  const pLen = people.length-1;

  for (let i = 0; i < pLen; i++) {
    if (!people[i].yearOfDeath ) {
      people[i].yearOfDeath = (new Date()).getFullYear();
    }
  }

  const oldest = people.sort(function(a, b) {
    const firstAge = a.yearOfDeath - a.yearOfBirth;
    const nextAge = b.yearOfDeath - b.yearOfBirth;


    if (firstAge > nextAge) {
      return 1;
    } else {
      return -1;
    }


  });



  return oldest[pLen];


};

// Do not edit below this line
module.exports = findTheOldest;
