// Spread Operator - With Array
const array = [1,2,3,4,5,];
const sum = ((a,b,c,d,e) =>{
    return a+b+c+d+e;
})
console.log(sum(...array))

// Spread Operator - With Object
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const {tiger, lion,...rest} = animals; 
console.log(tiger)
console.log(rest)

const objectSpread=((p1, p2, p3) =>{
    console.log(p1)
    console.log(p2)
    console.log(p3)
})

console.log(objectSpread(tiger, lion, rest))