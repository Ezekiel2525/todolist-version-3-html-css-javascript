const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const err = document.querySelector('#error');
const addTaskBtn = document.getElementById('add-btn');


addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const taskName = inputBox.value.trim();
    if(!taskName){
        err.style.display ='block';
        err.innerHTML = 'Input must not be empty!!!';
        setInterval(() => {
            err.style.display = 'none';
        }, 1500);

    }else{
        let li = document.createElement('li');
        li.innerHTML = taskName;
        listContainer.appendChild(li);
        let img = document.createElement('img');
        img.src = 'imgs/delete.png';
        img.style.width ='20px';
        li.appendChild(img);
    }
    
    inputBox.value = '';
    saveDataTasks();
});

listContainer.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveDataTasks();

    }else if(event.target.tagName === 'IMG'){
        event.target.parentElement.remove();
        saveDataTasks();
    }
})

function saveDataTasks(){
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem('tasks');
}

showTasks();



