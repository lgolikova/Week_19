class Worker {
    constructor(name, surname, rate, days) {
    this.name = name; 
    this.surname = surname;
    this.rate = rate;
    this.days = days; 
    }
    getSalary() {
        let salary = this.rate*this.days; 
        return salary;
    }
}

let worker2 = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());