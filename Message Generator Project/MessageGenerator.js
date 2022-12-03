function Button() 
    {return Math.floor(Math.random() * 3 )}

const Animal = () => {
    switch (Button()) {
        case 0: 
            return "giraffe";
        case 1:
            return "donkey";
        case 2:
            return "elephant"
    }
}

const Color = () => {
    switch (Button()) {
        case 0:
            return "blue";
        case 1:
            return "yellow";
        case 2:
            return "orange"
    }
}

const Snack = () => {
    switch (Button()) {
        case 0:
         return "popcorn";
        case 1:
            return "chips";
        case 2:
            return "yogurt"
    }
}

console.log(`Your favorite animal is a ${Animal()}.`)
console.log(`Your favorite color is ${Color()}.`)
console.log(`Your favorite snack is ${Snack()}.`)