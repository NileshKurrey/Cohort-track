/**
 * Write your challenge solution here
 */

let title = document.getElementById('mainHeading')
let colors = document.getElementsByClassName('color-buttons')
let colorsChild = Array.from(colors[0].children)

colorsChild.forEach((child)=>{
    child.addEventListener('click',()=>{
        const getColor = child.textContent
        addColor(getColor)
    })
})


  function addColor(selectedColor){
    if(selectedColor == 'Reset'){
        title.style.color = 'black'
    }
    else{
        title.style.color = selectedColor
    }
  }