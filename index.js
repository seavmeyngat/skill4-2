function fetchTodos(){
    fetch("https://todo-api-beige.vercel.app/api/todos", {
        method: 'GET',
        headers: {
            'x-secret-key': '9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe',
            'Content-Type': 'application/json'
        }
    })
  
    .then ((Response) => {
      return Response.json();
    })
    .then(data => {
                    const todoListDiv = document.getElementById('todo-list');
                    todoListDiv.innerHTML = '';
        
                    data.data.forEach(todo => {
                        const card = document.createElement('div');
                        card.className = 'card mt-2';
                        card.innerHTML = `
                        <div class="card-body">
                            <div class="row">
                                <div class="col">ID: ${todo.id}</div>
                                <div class="col">Name: ${todo.task_name}</div>
                                <div class="col">Status: ${todo.task_status ? 'Done' : 'Pending'}</div>
                            </div>
                        </div>
                    `;
                        todoListDiv.appendChild(card);
                    });
                })
    .catch ((error) => {
      console.error("error",error);
      return error;
    })
  }
  
  fetchTodos();