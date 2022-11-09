/**
 *
 * @param {string} name
 * @param {number} age
 * @constructor
 */
function Human(name, age) {
    this.name = name;
    this.age = age;
    this.ownerCar = [];
    this.getHumanInfo = function () {
        console.log(this.name, this.age);
    }
}
const john = new Human('John',  25);
john.getHumanInfo();
const jo = new Human('Jo',  30);
jo.getHumanInfo();
const olha = new Human('Olha',  20);
olha.getHumanInfo();

/**
 *
 * @param {string} brand
 * @param {string} model
 * @param {number} yearOfIssue
 * @param {string} plateNumber
 * @constructor
 */
function Auto(brand, model, yearOfIssue, plateNumber) {
    this.brand = brand;
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.plateNumber = plateNumber;
    this.owner = [];
    this.setOwner = function (human) {
        if (human.age >= 18) {
            this.owner.push(human);
            human.ownerCar.push(this);
        } else {
            console.log(`${human} вам нет 18 лет, вы не можете быть владельцем автомобиля`)
        }
    }
    this.getAutoInfo = function () {
        console.log('Авто:', this.brand, this.model, this.yearOfIssue, this.plateNumber);
        this.owner.forEach((item) => {
            item.getHumanInfo();
        });
    }
}


const bmw = new Auto('bmw', 'BMW X6', 2020, 'KA5242XI');
bmw.setOwner(john);
bmw.setOwner(jo);
bmw.getAutoInfo();
