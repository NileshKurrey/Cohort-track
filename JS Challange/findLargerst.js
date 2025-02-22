function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if(a > b && c){
      return a
    }
    else if(b > a && c){
      return b
    }
    else{
      return c
    }
  }

  let result = findLargest(50,20,10)
  
  console.log(result)