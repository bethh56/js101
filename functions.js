console.log("functions!")
 
const nuggetizer = (animal) => {
    const output = `proceessed ${animal}`;
    return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('tire'));

const dogBreed = (dog) => {
    return `My favorite dog breed a ${dog}`;
}

console.log(dogBreed('lab'));

const fortyTwo = (number) => {
    return 42 + number;
}
 console.log(fortyTwo(4));

 const oldAge = (year) => {
    return 2099 - year;
 }

 console.log(oldAge(1954));
