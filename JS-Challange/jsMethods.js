// //uniting super heroes

let superheroes = []
superheroes.push('Iron Man','Thor','Captain America','Super Man','Batman','Shaktiman','Goku','Doctor Strange')
console.log(superheroes) // 'Iron Man','Thor','Captain America','Super Man','Batman','Shaktman','Goku','Doctor Strange'

// // Finding battlefield

// let battlefield = ['Amazon Jungle', 'Wakanda', 'New York', 'Gaziabad', 'wasseypur']
// let selectBattlefield = battlefield.find(battlefield => battlefield === 'Wakanda')
// console.log(selectBattlefield) //wakanda

// //Assignig weapon

superheroes.forEach(hero =>{
    console.log(hero, "Equiped with weapon")
})

// //Iron Man Equiped with weapon
// // Thor Equiped with weapon
// // Captain America Equiped with weapon
// // Super Man Equiped with weapon
// // Batman Equiped with weapon
// // Shaktman Equiped with weapon
// // Goku Equiped with weapon
// // Doctor Strange Equiped with weapon

// killing the army 



//reinforcement

superheroes.unshift('Spider-man','bheem','krrish','Ant man')
// console.log(superheroes)
//'Spider-man',
// 'bheem',
// 'krrish',
// 'Ant man',
// 'Iron Man',
// 'Thor',
// 'Captain America',
// 'Super Man',
// 'Batman',
// 'Shaktiman',
// 'Goku',
// 'Doctor Strange'

//remove some heroes

superheroes.pop()
superheroes.pop()
superheroes.pop()

console.log(superheroes)
//'Spider-man',
// 'bheem',
// 'krrish',
// 'Ant man',
// 'Iron Man',
// 'Thor',
// 'Captain America',
// 'Super Man',
// 'Batman',

let aliens = ['Alien army', 'Army leaders', 'Final Bosses']
let finalboss = aliens.indexOf('Final Bosses')
console.log(finalboss) // 2