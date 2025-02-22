
    function totalStars(starLevels) {
        let countStart = 0;
         for(let i =0; i< starLevels.length; i++){
            countStart += starLevels[i].length;
         }
         return countStart
        }

let result = totalStars([['*','*','*'],['*'],['*','*']])

  console.log(result)