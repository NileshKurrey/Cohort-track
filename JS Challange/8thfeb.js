const teas =['Green Tea','Masala tea','Elaich tea','Oolong tea', 'White tea','Herbal Tea']

teas.push('Chamomile Tea')
console.log(teas)
const index = teas.indexOf('Oolong tea')
console.log(index)
if(index > -1){
    teas.splice(index, 1)
}
console.log(teas)
let cafinatedtea = teas.filter(cafinatedtea => cafinatedtea !== 'Herbal Tea');

console.log(cafinatedtea)

let sortedtea = teas.sort();
console.log(sortedtea)

for (let i = 0; i < teas.length; i++) {
    console.log(teas[i])
}

let count = 0
let cafinatedMyTeas = 0
for (let i = 0; i < teas.length; i++) {
    if(teas[i] != 'Herbal Tea'){
        cafinatedMyTeas++
    }
}
const uppercase = []

for (let i = 0; i < teas.length; i++) {
  
    uppercase.push(teas[i].toUpperCase())
}

console.log(uppercase)

let longesttea = '';

for (let i = 0; i < teas.length; i++) {
    if(longesttea.length < teas[i].length ){
        longesttea = teas[i]
    }
    
}

console.log(longesttea)

let reveresdtea = []
for (let i = teas.length -1; i >=0; i--) {
    
    reveresdtea.push(teas[i])
}

console.log(reveresdtea)