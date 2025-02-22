function grade(a){
    if(a>=90){
        return "A";
    }else if(a>=80){
        return "B";
    }else if(a>=70){
        return "C";
    }else if(a>=60){
        return "D";
    }else{
        return "F";
    }
}

let result =grade(85)
console.log(result) // A