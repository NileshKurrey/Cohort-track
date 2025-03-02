/**
 * Write your challenge solution here
 */

const openBtn = document.querySelector('.toggle-btn');
const content = document.querySelector('.content');
const closeBtn = document.querySelector('.close-btn');
const panel = document.querySelector('.panel')


openBtn.addEventListener('click',(e)=>{
    if(!panel.classList.contains('active')){
        panel.classList.add('active')
     
    }else{
        panel.classList.remove('active')
    }
})

closeBtn.addEventListener('click',(e)=>{
    
        panel.classList.remove('active')
    
})


