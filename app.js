const addForm = document.querySelector(".add");//reference to form
const list = document.querySelector(".todos"); //reference to ul





//Adding todos
const generateTemplate = (todo) => {
  const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa fa-trash-o delete"></i>
    </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  // console.log(todo);

  //check - for true if the todo lenght is greater than 1 it return true to if condition
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); //to reset the input
  }
});

