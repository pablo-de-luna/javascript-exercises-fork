const findTheOldest = function(people) {
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear()
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
    });
    people.sort((a, b) => b.age - a.age);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
