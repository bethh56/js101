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