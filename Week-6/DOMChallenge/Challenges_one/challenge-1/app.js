/**
 * Write your challenge solution here
 * 
 */
let body = document.getElementById('body');
let bulb = document.getElementById('bulb');
let toggleButton = document.getElementById('toggleButton')
let switchStatus = document.getElementById('status')
console.log(bulb.classList.contains('off'))
// body.classList.add('dark-mode')
toggleButton.addEventListener('click',function(e){
if (bulb.classList.contains('off')) {
    bulb.classList.remove('off')
    body.classList.add('dark-mode')
    toggleButton.innerText = 'Turn Off'
    switchStatus.innerText = 'Status: On'
} else {
    bulb.classList.add('off')
    body.classList.remove('dark-mode')
    toggleButton.innerText = 'Turn on'
    switchStatus.innerText = 'Status: Off'
}

})