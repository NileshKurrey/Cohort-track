
function tempratureConverter(value ,scale){
    switch (scale) {
        case 'C':
            return `${(value * 9/5) + 32}\u00B0F`
            
        case "F":
            return `${(value - 32) * 5/9}\u00B0C`
        default:
            
    }
}

let result = tempratureConverter(0,"C")

console.log(result)