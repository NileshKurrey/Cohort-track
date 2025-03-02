/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totaltask = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const emptyTask = document.getElementById('emptyTask')


let completedTasksCount = 0;
function addList(){

    if (taskInput.value.length !== 0) {
        const li = document.createElement('li')
        const checkbox = document.createElement('input')
        const span = document.createElement('span')
        const dltBtn = document.createElement('button')
        
        li.classList.add('task-item')
        checkbox.classList.add('complete-checkbox')
        span.classList.add('task-text')
        dltBtn.classList.add('delete-button')
        
        checkbox.setAttribute('type','checkbox')

        dltBtn.textContent ='Delete'
        span.textContent = `${taskInput.value}`
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(dltBtn)
        taskList.appendChild(li)

        emptyTask.style.display = 'none'

        totaltask.textContent = `Total Task: ${taskList.children.length - 1}`

        taskInput.value = ''

        dltBtn.addEventListener('click',(e)=>{
            if(taskList.children.length - 1 == 1){
                li.remove()
                totaltask.textContent = `Total Task: ${taskList.children.length -1}`
                emptyTask.style.display = 'block'
            }
            else{ 
                li.remove()
                totaltask.textContent = `Total Task: ${taskList.children.length -1}`
            }
            if (li.classList.contains('completed')) {
                completedTasksCount--;
                completedTasks.textContent = `Completed: ${completedTasksCount}`;
            }

        })

        checkbox.addEventListener('click',(e)=>{
            if(checkbox.checked){
                li.classList.add('completed')
                completedTasksCount++
            }
            else{
                li.classList.remove('completed',)
              
                    
                completedTasksCount--;
            }
            
        })

        completedTasksCount = Math.max(completedTasksCount, 0);
        completedTasks.textContent = `Completed: ${completedTasksCount}`      
        console.log(completedTasksCount)
    }
}

addBtn.addEventListener('click', addList)
taskInput.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        addList()
    }
})