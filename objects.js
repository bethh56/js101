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