console.log("COMBO CHALLENGE!")

const evenOdd = (num) => {
    if (num % 2){
        return 'odd';
    } else {
        return 'even';
    }
}

console.log(evenOdd(23));
console.log(evenOdd(24));

const opposite = (num) => {
    const x = num * 2;
    return  num - x;
}

console.log(opposite(0));
console.log(opposite(9));

const palindrome = (word) => {
    for (var c of word) {
        console.log(c);
    }
}

console.log(palindrome("racecar"));