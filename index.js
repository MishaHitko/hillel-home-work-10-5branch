const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const positiveNum = numbers.reduce((acc,number) => {
    if (number > 0) {
        acc.num += 1;
        acc.sum = acc.sum + number;
    }
    return acc;
}, {sum: 0, num: 0});
console.log('Сумма позитивных елементов:', positiveNum.sum, 'Количество позитивных елементов:', positiveNum.num);

const minNum = numbers.reduce((acc, number, index) => {
    if (acc.num > number) {
        acc.num = number;
        acc.index = index;
    }
    return acc;
}, {num: 0, index: 0});
console.log('Минимальное число:', minNum.num,'Индекс минимального числа:', minNum.index);

const maxNum = numbers.reduce((acc, number, index) => {
    if (acc.num < number) {
        acc.num = number;
        acc.index = index;
    }
    return acc;
}, {num: 0, index: 0});
console.log('Максимальное число:', maxNum.num,'Индекс максимального числа:', maxNum.index);

const negativeNum = numbers.reduce((acc,number) => {
    if (number < 0) {
        acc += 1;
    }
    return acc;
}, 0);
console.log('Количество негативных елементов:', negativeNum);

const oddNum = numbers.reduce((acc,number) => {
    if (number % 2 !== 0 && number > 0) {
        acc += 1;
    }
    return acc;
}, 0);
console.log('Количество непарных позитивных елементов:', oddNum);

const evenNum = numbers.reduce((acc,number) => {
    if (number % 2 === 0 && number > 0) {
        acc += 1;
    }
    return acc;
}, 0);
console.log('Количество парных позитивных елементов:',evenNum);

const evenNumSum = numbers.reduce((acc,number) => {
    if (number % 2 === 0 && number > 0) {
        acc += number;
    }
    return acc;
}, 0);
console.log('Сумма парных позитивных елементов:',evenNumSum);

const oddNumSum = numbers.reduce((acc,number) => {
    if (number % 2 !== 0 && number > 0) {
        acc += number;
    }
    return acc;
}, 0);
console.log('Сумма непарных позитивных елементов:',oddNumSum);

const multiNumSum = numbers.reduce((acc,number) => {
    if (number > 0) {
        acc *= number;
    }
    return acc;
}, 1);
console.log('Умножение всех позитивных елементов:',multiNumSum);

let maxNumber = 0;
const maxNumArray = numbers.map((number) => {
    if (number > maxNumber) {
        maxNumber = number;
    }
    return number;
}).map((number) => {
    if (number < maxNumber) {
        number = 0;
    }
    return number;
})

console.log('Найден наибольший елемент массива, остальные обнулены:',maxNumArray);