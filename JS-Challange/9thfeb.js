const teas = {
    name:'Lemon Tea',
    type:'Green',
    caffine:'low'
}

console.log(teas.name)
console.log(teas["type"])


teas.Origin = "Assam"

teas.caffine = 'Medium'

delete teas.type

console.log("Origin" in teas);

for (const key in teas) {
  console.log(key + ": " + teas[key])
}

const myteas = {
    greentee:{
        name:'Green Tea'
    },
    blackTea:[]
}

const teaCopy = {...teas}