let person = {
    firstName: "Ljubo",
    lastName: "Sarik",
    getFirstName: () => {
        return person.firstName;
    },
    setFirstName: (firstName) => {
        person.firstName = firstName;
    }
}

console.log(person.getFirstName());

person.setFirstName("Milos");

console.log(person.getFirstName());

person.setFirstName("Sandra");

console.log(person.getFirstName());