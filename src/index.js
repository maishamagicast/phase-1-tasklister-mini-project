document.addEventListener("DOMContentLoaded", () => {
  const inputValue= document.getElementById('new-task-description');
  const inputDisplay= document.getElementById('tasks');
  const form= document.getElementById('create-task-form');

  form.addEventListener('submit',function(event){
    event.preventDefault();
    
    const newElement= document.createElement('li');
    newElement.textContent=inputValue.value;
    inputDisplay.append(newElement);
    
    
  })
});
