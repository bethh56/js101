console.log("Objects")

const wordLength = (word) => {
    return word.length;
}

console.log('num of letters',wordLength('cat'));
console.log('num of letters',wordLength('monkeybutt'))

const ageCheck = (age) => {
    if (age >= 21){
        return ('PARTY!');
    } else {
        return ('No drinks for you!');
    }
}

console.log(ageCheck(12));
console.log(ageCheck(24));

const expense = {
    dateCreated: '1/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true,
}

// dot notation and bracket notation

console.log(expense.cost);
console.log(expense['cost']);

const employee = {
    firstName: 'John',
    lastName: 'Smith',
    startDate: '01/01/2014',
    position: 'front desk',
    payRate: 14.00,
    location: 'Nashville',
    goodEmployee: true,
}
 
const statusMaker = (employee) => {
    if (employee.firstName[0] === 'M') {
        employee.status = 'vip';
    } else {
        employee.status = 'peasant';
    }
        return employee;    
}

console.log(statusMaker(employee));
