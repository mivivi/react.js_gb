//Задание 1

let loop = (times = 0, callback = null) => {
    if (callback === null) {
        console.log("Значение не присвоено")
    } else {
        for (let i = 5; i <= times; i++) {
            callback();
        }
    }
};

let test = () => {
    console.log("smthg")
};

loop();
loop(8, test);


// Задание 2

let calculateArea = (a,b) => {
    const Figure = {area: a*b, figure: "rectangle", input: {a,b}};
    console.log(Figure);
}
calculateArea(5,8);


// Задание 3

class Human {
constructor (name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
}

displayInfo() {
        return `Name = ${this.name} ; Age = ${this.age} ; Date of birth = ${this.dateOfBirth}`;
    }
}

console.log(new Human("Cliff", 30, "07.10.1987").displayInfo());



class Employee extends Human {
    constructor (name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
displayInfo() {
        return `${super.displayInfo()} ; Salary =  ${this.salary} ; Department =  ${this.department}`;
    }
}

console.log(new Employee("Cliff", 30, "07.10.1987", 300000, "Development").displayInfo());

class Manager extends Employee {
    constructor (name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }


    // add(developer){

    // }

    // delete(developer) {

    // }

displayInfo() {
        return `${super.displayInfo()} ; Manager of ${this.developers.length} developer(s)`;
    }

}

var managerAnna = new Manager("Anna", 29, "30.03.1989", 500000, "Department of Magical Transportation");
console.log(managerAnna.displayInfo());



class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }

    // setManager(manager){

    // }

displayInfo() {
        return `${super.displayInfo()} ; Manager is ${this.manager.name}`;
    }
}
var developerCliff = new Developer("Cliff", 30, "07.10.1987", 300000, "Development", managerAnna);
console.log(developerCliff.displayInfo());

