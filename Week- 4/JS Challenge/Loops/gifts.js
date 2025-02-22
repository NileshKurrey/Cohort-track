function distributeGifts(totalGifts, friends) {
    // write your code here
    let giftsgiven;
    if(totalGifts > friends){
        for (let i = 0; i <= friends; i++) {
            giftsgiven = i;

        }
        return giftsgiven
    }
    else{
        for (let i = 0; i <= totalGifts; i++) {
            giftsgiven = i;

        }
        return giftsgiven
    }
  }

  let result = distributeGifts(2,5);

  console.log(result)