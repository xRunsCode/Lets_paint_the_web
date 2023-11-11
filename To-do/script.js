let inputBox=document.getElementById('input-field');
let taskList=document.getElementById('task-list');
let taskBtn=document.getElementById('add-btn');

taskBtn.addEventListener('click',function(){
    if(inputBox.value==='')
    {
        alert("You didn't tell me your task!");
    }else{
        let taskElm=document.createElement('li');
        let span=document.createElement('span');
        taskElm.innerText=inputBox.value;
        span.innerHTML="\u00d7";
        taskElm.appendChild(span);
        taskList.appendChild(taskElm);


    }
    inputBox.value=" ";
    saveData();
});

taskList.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName==='SPAN')
    {
        e.target.parentNode.remove();
        saveData();
    }
},false);


function saveData()
{
    localStorage.setItem('data',taskList.innerHTML);
}

function showData()
{
    taskList.innerHTML=localStorage.getItem("data");
}

if(!showData())
{

}else{
    showData();
}