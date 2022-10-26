window.addEventListener('load', ()=> {
    const form = document.querySelector("#New-task-form");
    const input = document.querySelector('#New-Task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        //makes it that after submitting the page does not refresh


        const task = input.Value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        //created the class task even though does not exist in the html file

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        //created class content which also does not exist in the html file
      

        task_el.appendChild(task_content_el)
        //makes it a div within a div 
        //make the task_content_el a child of the task_el(div)

        const task_input_el = document.createElement('input');//create container and assign class for it
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
         //assign the task to the input field created above
        task_input_el.value = task;

        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el);

       const task_action_el = document.createElement('div');
       task_action_el.classList.add ('actions');

       const task_edit_el = document.createElement('button');
       task_edit_el.classList.add('edit')
       task_edit_el.innerText = 'Edit';

       const task_del_el = document.createElement('button');
       task_del_el.classList.add('del')
       task_del_el.innerText = 'Delete';

       //last two blocks of code were to create the buttons edit and delete.
       //the next two line are to append them

       task_action_el.appendChild(task_edit_el);
       task_action_el.appendChild(task_del_el);

       task_el.appendChild(task_action_el);

       input.value = "";
       //important to keep it blank.

       list_el.appendChild(task_el);
   
       task_edit_el.addEventListener('click', (e)=> {
        //changing the edit button from readonly and open to changes and back forth accordingly
        if(task_edit_el.innerText.toLowerCase() = "edit") {
            task_edit_el.innerText = "save";
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
        }
        else {
            task_edit_el.innerText = "edit";
            task_input_el.setAttribute("readonly", "readonly");

        }
    }
          function NoblankTask(uadd)
        { 
         var task =/^[0-9a-zA-Z]+$/;
         if(uadd.value.match(task))
        {
         return true;
        }
         else
        {
        alert('Please enter some task!');
        uadd.focus();
        return false;
        }
    }   
     );


});
});