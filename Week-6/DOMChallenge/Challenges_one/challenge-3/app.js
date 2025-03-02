/**
 * Write your challenge solution here
 */

let name1 = document.getElementById('nameInput');
let job = document.getElementById('jobInput');
let age = document.getElementById('ageInput');
let bio = document.getElementById('bioInput')

let nameDisplay = document.getElementById('nameDisplay')
let jobDisplay = document.getElementById('jobDisplay');
let ageDisplay = document.getElementById('ageDisplay');
let bioDisplay = document.getElementById('bioDisplay');


name1.addEventListener('input',(e)=>{
    let value = e.target.value
    changeFn(nameDisplay ,value)
})
job.addEventListener('input',(e)=>{
    let value = e.target.value
    changeFn(jobDisplay ,value)
})
age.addEventListener('input',(e)=>{
    let value = e.target.value
    changeFn(ageDisplay ,value)
})
bio.addEventListener('input',(e)=>{
    let value = e.target.value
    changeFn(bioDisplay ,value)
})


function changeFn( AplliedValue,value){
            if(value.length !== 0){
        
                AplliedValue.textContent = value
            }
            else{
                AplliedValue.textContent = "Not provided"
            }
}

// name1.addEventListener('input',(e)=>{
//     if(e.target.value.length !== 0){

//         nameDisplay.textContent = e.target.value
//     }
//     else{
//         nameDisplay.textContent = "Not Provided"
//     }
// })