/**
 * Write your challenge solution here
 */

const accordBtn = document.querySelectorAll('.accordion-button');
const arrow = document.querySelector('.arrow');
const content = document.getElementsByClassName('.accordion-content')


accordBtn.forEach((item)=>{
    console.log(item.children)
    item.addEventListener('click',(e)=>{
       if(!item.parentElement.classList.contains('active')){
            item.parentElement.classList.add('active')
            item.children[0].classList.add('active')
       }
       else{
            item.parentElement.classList.remove('active')
            item.children[0].classList.remove('active')
       }
    })
    
})