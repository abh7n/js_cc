const person = {
    FirstName: 'John' ,
    LastName: 'Cena' ,
    Age: 30 ,
    hobbies: ['movies' , 'games' , 'sports'] ,
    address: {
        street : '50 main street , LA' ,
        city: 'Boston' ,
        state: 'MA'
    }

}

console.log(person.FirstName , person.LastName);

console.log(person.hobbies[0])

console.log(person.address.city);


// to add properties

person.email = 'johncena619@gmail.com';
console.log(person.email);


//de-structuring

const {FirstName , LastName , address: {city}}=person;
console.log(city);