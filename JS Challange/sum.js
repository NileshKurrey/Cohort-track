let myArray = [1,4,2,3,5,6]

function sumFactor(numbers){
    let sum;
    for (let i = 0; i < numbers.length; i++) {
        sum = numbers[i] + sum;
    }
    return sum
}

let sumAr = sumFactor(myArray)
console.log(sumAr)