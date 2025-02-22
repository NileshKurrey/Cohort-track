
function leapyear(year){
    if(year % 4 === 0  && !year % 100 === 0 && year >=400){
        return "Leap year"
    }
    else{
        return "Not Leap year"
    }
}


let result = leapyear(2025);

console.log(result);