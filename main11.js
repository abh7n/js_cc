// Constructor function 
/*function Person(firstname,lastname,dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date (dob);
    //this.getBirthYear = function() {
        //return this.dob.getFullYear();
    //}
    //this.getFullName = function() {
        //return `${this.firstname} ${this.lastname}`;
    //}
    Person.prototype.getBirthYear=function() {
        return this.dob.getFullYear();
    }

    Person.prototype.getFullName=function() {
        return `${this.firstname} ${this.lastname}`;
    }
}*/

// class
    class Person {
        constructor (firstname,lastname,dob) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.dob = new Date (dob);
    }
            getBirthYear() {
                return this.dob.getFullYear();
            }

            getFullName() {
                return `${this.firstname} ${this.lastname}`
            }
        }

// Instantiate object
const person1 = new Person('John', 'Doe' , '4-3-1980');
const person2 = new Person('Mary', 'Rose' , '6-9-1982');

console.log(person2.getFullName());

